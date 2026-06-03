'use client';

import { useState } from 'react';
import Link from 'next/link';
import './upsell.css';

export default function UpsellPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpgrade = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_TIER_1_UPSELL_PRICE_ID,
          tier: 'tier-1-upsell',
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleNoThanks = () => {
    window.location.href = '/checkout/tier-1';
  };

  return (
    <div className="upsell-page">
      <div className="upsell-container">
        {/* Hero */}
        <div className="upsell-hero">
          <div className="upsell-badge">ONE-TIME EXCLUSIVE OFFER</div>
          <h1 className="upsell-title">
            Wait! Unlock the <span className="highlight-gradient">Full Team</span> for Just $2,000 More
          </h1>
          <p className="upsell-subtitle">
            Add 6 more AI team members and all remaining skills. <strong>Upgrade now</strong> — this offer won't last forever.
          </p>
        </div>

        {/* Comparison */}
        <div className="comparison-container">
          <div className="comparison-card standard">
            <div className="comparison-header">
              <h3 className="comparison-title">Small Team</h3>
              <div className="comparison-price">$5,999</div>
            </div>
            <ul className="comparison-list">
              <li>3 AI Team Members</li>
              <li>Executive Assistant, CFO, COO</li>
              <li>~50 Core Skills</li>
              <li>Daily briefings, inbox triage, meeting prep, financial reports, bookkeeping, tax strategy, SOP builder, project management</li>
              <li>30-Minute Setup Call</li>
              <li>30 Days Support</li>
            </ul>
          </div>

          <div className="comparison-arrow">
            <svg width="48" height="48" fill="none" stroke="#FF6B35" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            <div className="arrow-label">Upgrade for $2,000</div>
          </div>

          <div className="comparison-card premium">
            <div className="recommended-badge-upsell">BEST VALUE</div>
            <div className="comparison-header">
              <h3 className="comparison-title">Full Team</h3>
              <div className="comparison-price">$7,999</div>
              <div className="comparison-note">Save $1,000 when you upgrade now</div>
            </div>
            <ul className="comparison-list premium-list">
              <li>9 AI Team Members</li>
              <li>All Small Team members PLUS:</li>
              <li>Marketing/Product Manager</li>
              <li>Social Media Manager & Content Creator</li>
              <li>Lead Manager & CRM Specialist</li>
              <li>Deal Analyst (Real Estate)</li>
              <li>Financial Analyst (Stock Market)</li>
              <li>Legal Assistant</li>
              <li>100+ Total Skills (Tier 1+ Skills)</li>
              <li>Content creation, social media calendars, landing pages, email campaigns, CRM management, deal analysis, property underwriting, portfolio tracking, stock research, legal drafting</li>
              <li>60-Minute Setup Call</li>
              <li>60 Days Support</li>
              <li>Lifetime Updates</li>
            </ul>
          </div>
        </div>

        {/* What You Unlock */}
        <div className="unlock-section">
          <h2 className="unlock-title">What You Unlock with the Full Team:</h2>
          <div className="unlock-grid">
            <div className="unlock-card">
              <svg className="unlock-icon" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <h3>Complete Product Launch System</h3>
              <p>Create websites, digital products, and marketing funnels from scratch</p>
            </div>

            <div className="unlock-card">
              <svg className="unlock-icon" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <h3>Full Marketing & Social Media</h3>
              <p>Manage content creation, posting schedules, engagement tracking, and lead nurturing</p>
            </div>

            <div className="unlock-card">
              <svg className="unlock-icon" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              <h3>Legal Document Drafting</h3>
              <p>Review contracts, draft legal documents, assess compliance risks</p>
            </div>

            <div className="unlock-card">
              <svg className="unlock-icon" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <h3>Stock Market Intelligence</h3>
              <p>Portfolio tracking, stock research, market analysis, technical indicators</p>
            </div>

            <div className="unlock-card">
              <svg className="unlock-icon" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <h3>Real Estate Deal Analysis</h3>
              <p>Property underwriting, market research, investment calculators, deal packaging</p>
            </div>

            <div className="unlock-card">
              <svg className="unlock-icon" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <h3>Complete CRM & Lead Management</h3>
              <p>Pipeline tracking, follow-up automation, lead qualification, deal velocity analysis</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-box">
            <h2 className="cta-title">Upgrade to Full Team Now</h2>
            <div className="cta-pricing">
              <div className="cta-price-breakdown">
                <div className="price-line">
                  <span>Small Team</span>
                  <span>$5,999</span>
                </div>
                <div className="price-line upgrade-price">
                  <span>Upgrade to Full Team</span>
                  <span>+ $2,499</span>
                </div>
                <div className="price-line total-price">
                  <span>Total</span>
                  <span>$8,499</span>
                </div>
                <div className="savings-note">You save $500 vs. buying Full Team separately</div>
              </div>
            </div>

            <button
              onClick={handleUpgrade}
              className="upgrade-button"
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
                  Yes! Upgrade to Full Team - $2,499
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </>
              )}
            </button>

            <button
              onClick={handleNoThanks}
              className="no-thanks-button"
              disabled={isLoading}
            >
              No thanks, continue with Small Team
            </button>

            <div className="guarantee-note">
              30-Day Money-Back Guarantee on both tiers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
