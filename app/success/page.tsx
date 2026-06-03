'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import './success.css';

// Force dynamic rendering - this page needs query params
export const dynamic = 'force-dynamic';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [tier, setTier] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const tierParam = searchParams?.get('tier') || 'tier-1';
    setTier(tierParam);

    // In production, you'd fetch this from Stripe session
    // For now, we'll use a placeholder
    setEmail('[Your Email Address]');
  }, [searchParams]);

  const getTierDetails = () => {
    if (tier === 'tier-2') {
      return {
        name: 'Full Team (9 Agents)',
        agents: '9 AI team members',
        skills: '60+ skills',
        call: '60-minute setup call',
        support: '60 days support'
      };
    } else if (tier === 'tier-1-upsell') {
      return {
        name: 'Full Team Upgrade',
        agents: '9 AI team members (upgraded from 3)',
        skills: '60+ skills',
        call: '60-minute setup call',
        support: '60 days support'
      };
    } else {
      return {
        name: 'Small Team (3 Agents)',
        agents: '3 AI team members',
        skills: '60+ core skills',
        call: '30-minute setup call',
        support: '30 days support'
      };
    }
  };

  const details = getTierDetails();

  return (
    <div className="success-page">
      <div className="success-container">
        {/* Success Icon */}
        <div className="success-icon-wrapper">
          <svg className="success-icon" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4"/>
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="success-title">Welcome to Your AI Team!</h1>
        <p className="success-subtitle">
          Your purchase was successful. Get ready to 10x your productivity.
        </p>

        {/* Order Summary */}
        <div className="order-summary-card">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span className="summary-label">Product Purchased:</span>
            <span className="summary-value">{details.name}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">What You Got:</span>
            <span className="summary-value">{details.agents}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Skills Included:</span>
            <span className="summary-value">{details.skills}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Setup Call:</span>
            <span className="summary-value">{details.call}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Support Included:</span>
            <span className="summary-value">{details.support}</span>
          </div>

          <div className="summary-row highlight-row">
            <span className="summary-label">Email Used:</span>
            <span className="summary-value">{email}</span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="next-steps-card">
          <h2 className="steps-title">What Happens Next?</h2>

          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-heading">Check Your Email</h3>
              <p className="step-description">
                We've sent your AI Team files to <strong>{email}</strong>.
                Check your inbox (and spam folder) for an email from <strong>support@knowmore.academy</strong>.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-heading">Download & Extract</h3>
              <p className="step-description">
                Download the ZIP file and extract it to your computer.
                You'll find a complete setup guide inside the folder.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-heading">Open in Claude Code</h3>
              <p className="step-description">
                Install Claude Code (free desktop app) and open the extracted folder.
                Follow the 15-minute setup guide to customize your team.
              </p>
            </div>
          </div>

          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3 className="step-heading">Schedule Your Setup Call</h3>
              <p className="step-description">
                You'll receive a separate email with a link to schedule your {details.call}.
                We'll help you get everything configured perfectly.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="important-notes-card">
          <h3 className="notes-title">Important Notes:</h3>
          <ul className="notes-list">
            <li>
              <strong>Claude Subscription Required:</strong> Remember, you need an active Claude Pro ($20/month) or Claude Max ($75/month) subscription to use The Team. This is NOT included in your purchase.
            </li>
            <li>
              <strong>Setup Time:</strong> Plan for 15-30 minutes to complete the initial setup and customization.
            </li>
            <li>
              <strong>Support:</strong> If you have any questions, email us at support@knowmore.academy. We typically respond within 24 hours.
            </li>
            <li>
              <strong>Money-Back Guarantee:</strong> You have 30 days to try The Team risk-free. If you don't save at least 10 hours per week, request a full refund.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="success-cta">
          <Link href="/" className="home-button">
            Return to Homepage
          </Link>
          <a href="mailto:support@knowmore.academy" className="support-button">
            Contact Support
          </a>
        </div>

        {/* Footer Message */}
        <div className="success-footer">
          <p>Thank you for your purchase!</p>
          <p>We can't wait to see how you transform your business with your new AI team.</p>
        </div>
      </div>
    </div>
  );
}
