'use client';

import { useState } from 'react';
import Link from 'next/link';
import './checkout.css';

export default function Tier1Checkout() {
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
          priceId: process.env.NEXT_PUBLIC_TIER_1_PRICE_ID,
          tier: 'tier-1',
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
          <h1 className="checkout-title">Small Team Checkout</h1>
        </div>

        {/* Product Summary */}
        <div className="product-summary-card">
          <div className="product-header">
            <h2 className="product-name">The AI Team - Small Team</h2>
            <div className="product-price">
              <span className="price-amount">$5,999</span>
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
                  <strong>3 AI Team Members</strong>
                  <p>Executive Assistant, Chief Financial Officer, Chief Operating Officer</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>60+ Core Skills</strong>
                  <p>Morning briefings, goal tracking, financial tools, SOP creation, project management, and more</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>30-Minute Setup Call</strong>
                  <p>Personalized onboarding within first 30 days</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>30 Days Support</strong>
                  <p>Email support and troubleshooting included</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>Lifetime Access</strong>
                  <p>No subscriptions, no monthly fees - own it forever</p>
                </div>
              </li>
              <li>
                <svg className="check-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                <div>
                  <strong>Upgrade Option</strong>
                  <p>Upgrade to Full Team anytime for $2,500</p>
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
                  Complete Purchase - $5,999
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

        {/* Perfect For Section */}
        <div className="perfect-for-section">
          <h3 className="perfect-for-title">Perfect For:</h3>
          <div className="perfect-for-grid">
            <div className="perfect-for-card">
              <strong>Small Business Owners</strong>
              <p>Get C-level support without C-level salaries</p>
            </div>
            <div className="perfect-for-card">
              <strong>Solo Entrepreneurs</strong>
              <p>Scale your business without hiring a team</p>
            </div>
            <div className="perfect-for-card">
              <strong>W-2 Employees</strong>
              <p>Gain a cutting-edge AI advantage at work</p>
            </div>
            <div className="perfect-for-card">
              <strong>Stay-at-Home Parents</strong>
              <p>Manage schedules, groceries, and daily life with ease</p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="requirements-card">
          <h3 className="requirements-title">Requirements:</h3>
          <ul className="requirements-list">
            <li>
              <strong>Claude Subscription Required:</strong> You need an active Claude Pro ($20/month) or Claude Max ($75/month) subscription. This is NOT included.
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
