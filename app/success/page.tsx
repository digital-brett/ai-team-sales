'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import './success.css';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// Per-purchase download links (set these in Vercel env vars once the
// cleaned ZIPs are uploaded to Dropbox). Leave unset to fall back to
// email-only delivery instructions.
const downloadLinks: Record<string, string | undefined> = {
  'tier-1': process.env.NEXT_PUBLIC_DOWNLOAD_URL_TIER1,
  'tier-2': process.env.NEXT_PUBLIC_DOWNLOAD_URL_TIER2,
  'upsell':
    process.env.NEXT_PUBLIC_DOWNLOAD_URL_UPSELL ||
    process.env.NEXT_PUBLIC_DOWNLOAD_URL_TIER2,
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const [tier, setTier] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const tierParam = searchParams?.get('tier') || 'tier-1';
    setTier(tierParam);
    setEmail('[Your Email Address]');
  }, [searchParams]);

  const tierDetails = {
    'tier-1': { name: 'Small Team', agents: '3', call: '30-minute' },
    'tier-2': { name: 'Full Team', agents: '9', call: '60-minute' },
    'upsell': { name: 'Full Team', agents: '9', call: '60-minute' }
  }[tier] || { name: 'Small Team', agents: '3', call: '30-minute' };

  const downloadUrl = downloadLinks[tier] || downloadLinks['tier-1'];

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 10 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>

        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-subtitle">
          Welcome to The AI Team - {tierDetails.name}
        </p>

        <div className="success-details">
          <div className="detail-item">
            <strong>Email:</strong> {email}
          </div>
          <div className="detail-item">
            <strong>Team Size:</strong> {tierDetails.agents} AI Executives
          </div>
          <div className="detail-item">
            <strong>Setup Call:</strong> {tierDetails.call} (scheduled within 30 days)
          </div>
        </div>

        {downloadUrl && (
          <a
            href={downloadUrl}
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Your AI Team ({tierDetails.agents} Agents)
          </a>
        )}

        <div className="success-next-steps">
          <h2>What Happens Next?</h2>
          <ol>
            {downloadUrl ? (
              <li>
                <strong>Download Your AI Team</strong> - Use the download button above to get your ZIP file now
              </li>
            ) : (
              <li>
                <strong>Download Your AI Team</strong> - Follow the link in the email to access your download
              </li>
            )}
            <li>
              <strong>Check Your Email</strong> - Look for a message from{' '}
              <span className="highlight">support@knowmore.academy</span>
              <br/>
              <small>(Check spam/junk if you don't see it within 10 minutes)</small>
            </li>
            <li>
              <strong>Schedule Your Setup Call</strong> - You'll receive a separate email with scheduling options
            </li>
          </ol>
        </div>

        <Link href="/the-ai-team" className="back-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="success-page">
        <div className="success-container">
          <p>Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
