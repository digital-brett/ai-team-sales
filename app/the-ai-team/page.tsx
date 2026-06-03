import Link from 'next/link'
import Image from 'next/image'
import './the-ai-team-dark.css'

export default function TheAITeam() {
  return (
    <div className="ai-team-page">
      {/* Hero Section */}
      <section className="hero-team">
        <div className="container">
          <div className="hero-content-team">
            <div className="hero-badge-top">Transform Your Claude Account</div>
            <h1 className="hero-title-team">
              Turn <span className="highlight-gradient">Claude</span> Into a<br/>
              High-Performing <span className="highlight-gradient">AI Team</span>
            </h1>
            <p className="hero-subtitle-team">
              No coding experience needed. Transform your Claude subscription into 3-9 AI executives
              who handle daily operations, strategic planning, and execution—whether you're running a business
              or just want to organize your life better.
              <strong> Pay once. Own forever. No monthly fees.</strong>
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">3-9</div>
                <div className="stat-label">AI Team Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Total Skills Available</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Your Output</div>
              </div>
            </div>
            <a href="#pricing" className="hero-cta-btn">
              <span>Get Your AI Team Now</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <div className="hero-trust">
              <span>
                <svg className="trust-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                No Coding Experience Required
              </span>
              <span>
                <svg className="trust-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                30-Day Money-Back Guarantee
              </span>
              <span>
                <svg className="trust-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                No Subscriptions
              </span>
              <span>
                <svg className="trust-icon" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
                Instant Download
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Comparison */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title-center">Your Own C-Suite Team. Without the $500K Salary.</h2>

          <div className="comparison-grid">
            <div className="comparison-card traditional">
              <h3 className="comparison-title">The Traditional Way</h3>
              <p className="comparison-label">Hiring a Real C-Suite:</p>
              <ul className="comparison-list">
                <li>$400K-$600K per year in salaries</li>
                <li>Months to recruit and onboard</li>
                <li>Benefits, insurance, office space</li>
                <li>Management overhead</li>
                <li>Limited to 9-5 availability</li>
              </ul>
            </div>

            <div className="comparison-card subscription">
              <h3 className="comparison-title">The Subscription Trap</h3>
              <p className="comparison-label">Monthly AI Subscriptions:</p>
              <ul className="comparison-list">
                <li>$50-$300 per month (forever)</li>
                <li>Limited features at lower tiers</li>
                <li>Price increases without warning</li>
                <li>Lose access if you stop paying</li>
                <li>Never truly own the system</li>
              </ul>
            </div>

            <div className="comparison-card the-team">
              <div className="best-badge">Best Value</div>
              <h3 className="comparison-title">The Team (Your Way)</h3>
              <p className="comparison-label">Own Your AI C-Suite:</p>
              <ul className="comparison-list featured">
                <li> $5,999-$7,999 <strong>one-time payment</strong></li>
                <li> No monthly fees, no subscriptions</li>
                <li> Lifetime access to your system</li>
                <li> Customizable to your business</li>
                <li> Available 24/7, never takes a day off</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="what-you-get-section">
        <div className="container">
          <h2 className="section-title-center">3-9 AI Team Members. 50-100+ Skills. Unlimited Possibilities.</h2>

          <div className="tier-comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Small Team (Tier 1)</th>
                  <th className="recommended-col">Full Team (Tier 2)
                    <span className="recommended-star">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Price</strong></td>
                  <td>$5,999 one-time</td>
                  <td className="recommended-col">$7,999 one-time</td>
                </tr>
                <tr>
                  <td><strong>Team Members</strong></td>
                  <td>3 executives</td>
                  <td className="recommended-col">9 executives</td>
                </tr>
                <tr>
                  <td><strong>Total Skills</strong></td>
                  <td>~50 core skills</td>
                  <td className="recommended-col">100+ total skills</td>
                </tr>
                <tr>
                  <td><strong>Goal Tracking</strong></td>
                  <td> Included</td>
                  <td className="recommended-col"> Included</td>
                </tr>
                <tr>
                  <td><strong>Morning Briefings</strong></td>
                  <td> Included</td>
                  <td className="recommended-col"> Included</td>
                </tr>
                <tr>
                  <td><strong>Financial Tools</strong></td>
                  <td>Basic</td>
                  <td className="recommended-col">Advanced</td>
                </tr>
                <tr>
                  <td><strong>Strategic Planning</strong></td>
                  <td>Weekly</td>
                  <td className="recommended-col">Daily + Weekly</td>
                </tr>
                <tr>
                  <td><strong>Setup Call</strong></td>
                  <td> 30 minutes</td>
                  <td className="recommended-col"> 60 minutes</td>
                </tr>
                <tr>
                  <td><strong>Support</strong></td>
                  <td>30 days</td>
                  <td className="recommended-col">60 days</td>
                </tr>
                <tr>
                  <td><strong>Upgrade Option</strong></td>
                  <td>+$2,499 anytime</td>
                  <td className="recommended-col">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tier-ctas">
            <a href="/checkout/upsell" className="tier-btn tier-1">Get Small Team — $5,999</a>
            <a href="/checkout/tier-2" className="tier-btn tier-2">Get Full Team — $7,999 (Recommended)</a>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members-section">
        <div className="container">
          <h2 className="section-title-center">Meet Your New Executive Team</h2>

          <div className="team-grid">
            {/* Executive Assistant */}
            <div className="team-member-card">
              <div className="member-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
              </div>
              <h3 className="member-title">Executive Assistant</h3>
              <p className="member-description">
                Email triage, calendar management, follow-ups, meeting prep, daily briefings
              </p>
              <div className="member-skills">
                <span className="skill-tag">Daily Command Center</span>
                <span className="skill-tag">Commitment Manager</span>
                <span className="skill-tag">Inbox Intelligence</span>
                <span className="skill-tag">Meeting Prep</span>
              </div>
            </div>

            {/* CFO */}
            <div className="team-member-card">
              <div className="member-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="member-title">Chief Financial Officer</h3>
              <p className="member-description">
                Financial reporting, cash flow monitoring, revenue forecasting, KPI dashboards
              </p>
              <div className="member-skills">
                <span className="skill-tag">Financial Snapshot</span>
                <span className="skill-tag">Revenue Forecast</span>
                <span className="skill-tag">KPI Dashboard</span>
                <span className="skill-tag">Cash Flow Monitor</span>
              </div>
            </div>

            {/* COO */}
            <div className="team-member-card">
              <div className="member-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="member-title">Chief Operating Officer</h3>
              <p className="member-description">
                Systems, processes, SOP creation, project management, workflow optimization
              </p>
              <div className="member-skills">
                <span className="skill-tag">SOP Builder</span>
                <span className="skill-tag">Brain Dump</span>
                <span className="skill-tag">Project Pulse</span>
                <span className="skill-tag">Client Onboarding</span>
              </div>
            </div>

            {/* Marketing Director */}
            <div className="team-member-card tier-2-only">
              <div className="tier-2-badge">Tier 2 Only</div>
              <div className="member-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                </svg>
              </div>
              <h3 className="member-title">Marketing Director</h3>
              <p className="member-description">
                Content creation, social media calendars, brand building, email sequences
              </p>
              <div className="member-skills">
                <span className="skill-tag">Content Factory</span>
                <span className="skill-tag">Social Media Calendar</span>
                <span className="skill-tag">Email Drafter</span>
              </div>
            </div>

            {/* Legal Advisor */}
            <div className="team-member-card tier-2-only">
              <div className="tier-2-badge">Tier 2 Only</div>
              <div className="member-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                </svg>
              </div>
              <h3 className="member-title">Legal Advisor</h3>
              <p className="member-description">
                Contract review, risk assessment, compliance monitoring, document drafting
              </p>
              <div className="member-skills">
                <span className="skill-tag">Contract Review</span>
                <span className="skill-tag">Legal Drafter</span>
                <span className="skill-tag">Compliance Audit</span>
              </div>
            </div>

            {/* Business Analyst */}
            <div className="team-member-card tier-2-only">
              <div className="tier-2-badge">Tier 2 Only</div>
              <div className="member-icon">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="member-title">Business Analyst</h3>
              <p className="member-description">
                Market research, competitor analysis, SWOT analysis, strategic planning
              </p>
              <div className="member-skills">
                <span className="skill-tag">Deep Research</span>
                <span className="skill-tag">Competitor Analysis</span>
                <span className="skill-tag">SWOT Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title-center">Set Up in 15 Minutes. Use It Every Day.</h2>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Purchase & Download</h3>
              <p className="step-description">
                You receive instant access to The Team as a ZIP file. Download to your computer.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Open in Claude Code</h3>
              <p className="step-description">
                Extract the folder and open it in Claude Code (free desktop app). Takes 5 minutes.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Customize Your Team</h3>
              <p className="step-description">
                Fill in a simple config file with your business info, goals, and priorities. Takes 10 minutes.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Start Using Daily</h3>
              <p className="step-description">
                Run your first morning briefing. Assign tasks to your team. Scale your business.
              </p>
            </div>
          </div>

          <div className="how-it-works-cta">
            <a href="#pricing" className="secondary-cta-btn">Get Started Now →</a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title-center">One-Time Payment. Own It Forever.</h2>

          <div className="pricing-cards">
            {/* Small Team */}
            <div className="pricing-card">
              <h3 className="pricing-tier-name">Small Team</h3>
              <div className="pricing-amount">
                <span className="price-dollar">$</span>
                <span className="price-number">5,999</span>
              </div>
              <p className="pricing-note">One-time payment • No subscription</p>
              <p className="pricing-tagline">Perfect for solopreneurs and small business owners</p>

              <ul className="pricing-features">
                <li> 3 AI team members (EA, CFO, COO)</li>
                <li> ~50 core skills: Daily briefings, inbox triage, meeting prep, follow-ups, financial reports, SOP builder, project management, contract review, tax strategy, bookkeeping</li>
                <li> Goal tracking system</li>
                <li> Morning briefings</li>
                <li> 30-minute setup call</li>
                <li> 30 days support</li>
                <li> Upgrade to Full Team anytime (+$2,499)</li>
              </ul>

              <a href="/checkout/upsell" className="pricing-btn" data-tier="small">
                Buy Small Team — $5,999
              </a>
            </div>

            {/* Full Team */}
            <div className="pricing-card recommended">
              <div className="recommended-badge">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Recommended
              </div>
              <h3 className="pricing-tier-name">Full Team</h3>
              <div className="pricing-amount">
                <span className="price-dollar">$</span>
                <span className="price-number">7,999</span>
              </div>
              <p className="pricing-note">One-time payment • No subscription</p>
              <p className="pricing-tagline">For entrepreneurs scaling to $500K+ revenue</p>

              <ul className="pricing-features">
                <li> 9 AI team members (EA, CFO, COO, Marketing, Social Media, Lead Manager, Deal Analyst, Financial Analyst, Legal)</li>
                <li> 100+ total skills: Everything in Tier 1 PLUS content creation, social media calendars, landing page optimization, email campaigns, lead tracking, CRM management, deal analysis, property underwriting, portfolio tracking, stock research, legal drafting</li>
                <li> Complete business operations</li>
                <li> Morning + weekly briefings</li>
                <li> Product launch & marketing automation</li>
                <li> 60-minute setup call</li>
                <li> 60 days support</li>
                <li> Lifetime updates</li>
              </ul>

              <a href="/checkout/tier-2" className="pricing-btn premium" data-tier="full">
                Buy Full Team — $7,999
              </a>
            </div>
          </div>

          <div className="payment-trust">
            <div className="trust-item"> Secure checkout via Stripe</div>
            <div className="trust-item"> Instant access after purchase</div>
            <div className="trust-item"> 30-day money-back guarantee</div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="guarantee-section">
        <div className="container">
          <h2 className="guarantee-title">30-Day Money-Back Guarantee</h2>
          <p className="guarantee-text">
            <strong>Try The Team risk-free for 30 days.</strong>
          </p>
          <p className="guarantee-description">
            If you complete setup and don't save at least 10 hours per week, we'll refund 100% of your purchase.
            No questions asked.
          </p>
          <p className="guarantee-why">
            <strong>Why we can offer this:</strong> We've used this system ourselves for months. It works.
            And we want you to experience the same results.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container-narrow">
          <h2 className="section-title-center">Frequently Asked Questions</h2>

          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">What is The Team exactly?</h3>
              <p className="faq-answer">
                The Team is a complete AI-powered executive system built on Claude (Anthropic's AI). You get 3-9
                specialized AI team members with 60+ skills that handle daily operations, strategic planning, financial
                oversight, marketing, legal, real estate analysis, stock market intelligence, and more. It's like hiring a full C-suite for your business, but at a
                one-time cost instead of $400K+/year in salaries.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do I need coding skills or technical knowledge?</h3>
              <p className="faq-answer">
                No. If you can copy/paste text and follow a 15-minute setup guide, you can use The Team. We've designed
                it for busy entrepreneurs, not developers.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can I upgrade from Small Team to Full Team later?</h3>
              <p className="faq-answer">
                Yes. You can upgrade anytime for $2,499 (saving you $500 vs. buying Full Team directly). We'll send you
                the upgrade link and additional skills.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do I need a Claude subscription?</h3>
              <p className="faq-answer">
                Yes. The Team requires a Claude Pro ($20/mo) or Claude Max ($75/mo) subscription. <strong>This is NOT
                included</strong> with your purchase. We recommend Claude Max if using The Team daily. The Team is built
                on Claude's AI platform - your subscription pays for the AI processing power.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What platforms does this work on?</h3>
              <p className="faq-answer">
                The Team works fully on Mac (macOS 10.15+), Windows (10 or 11), and Linux (Ubuntu, Debian). Mobile access
                (Android/iPhone) is limited via Claude.ai website or mobile app. Best experience is on desktop (Claude Code app).
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Is this a subscription or one-time payment?</h3>
              <p className="faq-answer">
                <strong>One-time payment.</strong> You pay once ($5,999 or $7,999) and own The Team forever. No monthly fees.
                No recurring charges. No "cancel anytime" traps. <strong>You own it. Forever.</strong>
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What if The Team doesn't work for my business?</h3>
              <p className="faq-answer">
                30-day money-back guarantee. If you complete setup and don't save at least 10 hours per week, full refund.
                No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <h2 className="final-cta-title">Stop Doing Everything Yourself. Build Your AI C-Suite Today.</h2>
          <p className="final-cta-subtitle">One-time payment. Lifetime access. No subscriptions.</p>

          <div className="final-cta-buttons">
            <a href="/checkout/upsell" className="final-btn tier-1-btn">Get Small Team — $5,999</a>
            <a href="/checkout/tier-2" className="final-btn tier-2-btn">Get Full Team — $7,999 (Recommended)</a>
          </div>

          <div className="final-trust-badges">
            <div className="final-badge"> 30-Day Money-Back Guarantee</div>
            <div className="final-badge"> Secure Checkout (Stripe)</div>
            <div className="final-badge"> Instant Access After Purchase</div>
          </div>
        </div>
      </section>
    </div>
  )
}
// Trigger deployment
