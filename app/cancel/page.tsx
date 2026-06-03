'use client';

import Link from 'next/link';
import './cancel.css';

export default function CancelPage() {
  return (
    <div className="cancel-page">
      <div className="cancel-container">
        {/* Cancel Icon */}
        <div className="cancel-icon-wrapper">
          <svg className="cancel-icon" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="8" y1="8" x2="16" y2="16"/>
            <line x1="16" y1="8" x2="8" y2="16"/>
          </svg>
        </div>

        {/* Cancel Message */}
        <h1 className="cancel-title">Payment Cancelled</h1>
        <p className="cancel-subtitle">
          No problem! You can purchase anytime you're ready.
        </p>

        {/* Reassurance */}
        <div className="reassurance-card">
          <h2 className="reassurance-title">What You Missed:</h2>
          <ul className="reassurance-list">
            <li>3-9 AI team members working for you 24/7</li>
            <li>60+ skills to automate your business operations</li>
            <li>One-time payment - no monthly fees, ever</li>
            <li>30-day money-back guarantee</li>
            <li>Lifetime access to your AI team</li>
          </ul>

          <p className="reassurance-note">
            <strong>Still interested?</strong> Your cart is still available. You can complete your purchase anytime.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cancel-cta">
          <Link href="/the-ai-team#pricing" className="try-again-button">
            Try Again - View Pricing
          </Link>
          <Link href="/" className="home-button-cancel">
            Return to Homepage
          </Link>
        </div>

        {/* Contact Support */}
        <div className="support-section">
          <p className="support-text">
            Have questions? <a href="mailto:support@knowmore.academy" className="support-link">Contact our team</a>
          </p>
        </div>
      </div>
    </div>
  );
}
