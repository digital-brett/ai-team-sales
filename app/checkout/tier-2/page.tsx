'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../tier-1/checkout.css';

export default function Tier2Checkout() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_TIER_2_PRICE_ID,
          tier: 'tier-2',
          email,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to create checkout session');
        setIsLoading(false);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* Header */}
        <div className="checkout-header">
          <Link href="/the-ai-team" className="back-link">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </Link>
          <h1 className="checkout-title">Full Team Checkout</h1>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(255, 107, 53, 0.2))',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            color: '#A855F7',
            padding: '6px 16px',
            borderRadius: '50px',
            fontSize: '12px',
            fontWeight: '800',
            marginTop: '8px'
          }}>
            RECOMMENDED
          </div>
        </div>

        {/* Product Summary */}
        <div className="product-summary-card">
          <div className="product-header">
            <h2 className="product-name">The AI Team - Full Team</h2>
            <div className="product-price">
              <span className="price-amount">$7,999</span>
              <span className="price-note">one-time payment</span>
            </div>
          </div>

          <div className="product-includes">
            <h3 className="includes-title">What's Included:</h3>
            <ul className="includes-list">
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>9 AI Team Members</strong>
                  <p>Executive Assistant, CFO, COO, Marketing/Product Manager, Social Media Manager, Lead Manager, Deal Analyst, Financial Analyst, Legal Assistant</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>100+ Total Skills (Tier 1+ Skills)</strong>
                  <p>Everything in Tier 1 PLUS content creation, social media calendars, landing page optimization, email campaigns, lead tracking, CRM management, deal analysis, property underwriting, portfolio tracking, stock research, legal drafting</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>Comprehensive Business Management</strong>
                  <p>Website creation, product launches, lead management, social media, CRM, deal analysis, stock market intelligence, and legal drafting</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>60-Minute Setup Call</strong>
                  <p>Comprehensive onboarding within first 30 days</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>60 Days Support</strong>
                  <p>Extended email support and troubleshooting</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>Lifetime Access + Updates</strong>
                  <p>No subscriptions, no monthly fees - own it forever with all future updates</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="checkout-form-card">
          <h3 className="form-title">Complete Your Purchase</h3>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleCheckout}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="form-help">
                Your AI Team files will be delivered to this email
              </p>
            </div>

            <button
              type="submit"
              className="checkout-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Complete Purchase - $7,999
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="trust-badges">
            <div className="trust-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              Secure Stripe Checkout
            </div>
            <div className="trust-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              30-Day Money-Back Guarantee
            </div>
          </div>
        </div>

        {/* What You Can Do Section */}
        <div className="perfect-for-section">
          <h3 className="perfect-for-title">What The Full Team Helps You Do:</h3>
          <div className="perfect-for-grid">
            <div className="perfect-for-card">
              <strong>Run Your Entire Business</strong>
              <p>Complete operations from strategy to execution</p>
            </div>
            <div className="perfect-for-card">
              <strong>Create & Launch Products</strong>
              <p>Build websites, digital products, and marketing funnels</p>
            </div>
            <div className="perfect-for-card">
              <strong>Manage Marketing & Social Media</strong>
              <p>Content creation, posting schedules, engagement tracking</p>
            </div>
            <div className="perfect-for-card">
              <strong>Handle Legal & Compliance</strong>
              <p>Review contracts, draft documents, assess risks</p>
            </div>
            <div className="perfect-for-card">
              <strong>Analyze Deals & Markets</strong>
              <p>Underwriting, stock research, investment intelligence</p>
            </div>
            <div className="perfect-for-card">
              <strong>Nurture & Convert Leads</strong>
              <p>CRM management, follow-up sequences, pipeline tracking</p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="requirements-card">
          <h3 className="requirements-title">Requirements:</h3>
          <ul className="requirements-list">
            <li>
              <strong>Claude Subscription Required:</strong> You need an active Claude Pro ($20/month) or Claude Max ($100/month) subscription. This is NOT included. We recommend Claude Max for daily business use.
            </li>
            <li>
              <strong>Platform:</strong> Works on Mac, Windows, and Linux. Best experience on desktop via Claude Code app.
            </li>
            <li>
              <strong>Optional Tools:</strong> Any additional integrations or tools are user-dependent and not included in pricing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
