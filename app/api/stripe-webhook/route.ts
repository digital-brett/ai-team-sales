import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Extract customer data
    const customerEmail = session.customer_details?.email || session.customer_email;
    const customerName = session.customer_details?.name || '';
    const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
    const tier = session.metadata?.tier || 'unknown';

    // Determine which product was purchased
    let productName = 'The AI Team';
    let agentCount = 3;

    if (tier === 'tier-2') {
      productName = 'The AI Team - Full Team (9 Agents)';
      agentCount = 9;
    } else if (tier === 'tier-1-upsell') {
      productName = 'The AI Team - Upgrade to Full Team';
      agentCount = 9;
    } else {
      productName = 'The AI Team - Small Team (3 Agents)';
      agentCount = 3;
    }

    console.log('Payment successful:', {
      email: customerEmail,
      name: customerName,
      amount: amountTotal,
      tier,
      productName,
    });

    // Send data to GoHighLevel
    try {
      await sendToGHL({
        email: customerEmail || '',
        name: customerName,
        amount: amountTotal,
        tier,
        productName,
        agentCount,
        sessionId: session.id,
      });
    } catch (ghlError) {
      console.error('Failed to send to GHL:', ghlError);
      // Don't fail the webhook if GHL fails
    }

    // TODO: Send confirmation email via Resend or other service
    // TODO: Deliver product files (trigger email with download link)

    return NextResponse.json({ received: true });
  }

  // Return a 200 response for other event types
  return NextResponse.json({ received: true });
}

async function sendToGHL(data: {
  email: string;
  name: string;
  amount: number;
  tier: string;
  productName: string;
  agentCount: number;
  sessionId: string;
}) {
  const ghlApiKey = process.env.GHL_API_KEY;
  const ghlLocationId = process.env.GHL_LOCATION_ID;

  if (!ghlApiKey || !ghlLocationId) {
    console.warn('GHL credentials not configured');
    return;
  }

  // Split name into first and last
  const nameParts = data.name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // Create or update contact in GHL
  const contactPayload = {
    email: data.email,
    firstName: firstName,
    lastName: lastName,
    tags: [
      'AI Team Customer',
      data.tier === 'tier-2' || data.tier === 'tier-1-upsell' ? 'AI Team - Tier 2' : 'AI Team - Tier 1',
    ],
    customFields: [
      {
        key: 'product_purchased',
        value: data.productName,
      },
      {
        key: 'purchase_amount',
        value: data.amount.toString(),
      },
      {
        key: 'agent_count',
        value: data.agentCount.toString(),
      },
      {
        key: 'stripe_session_id',
        value: data.sessionId,
      },
    ],
    source: 'knowmore.academy',
  };

  // Send to GHL API
  const response = await fetch(
    `https://rest.gohighlevel.com/v1/contacts/`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ghlApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...contactPayload,
        locationId: ghlLocationId,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`GHL API error: ${response.statusText}`);
  }

  const result = await response.json();
  console.log('Contact created/updated in GHL:', result);

  return result;
}
