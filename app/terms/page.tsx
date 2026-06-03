import Link from 'next/link'
import '../the-ai-team/the-ai-team-dark.css'
import './legal.css'

export default function TermsPage() {
  return (
    <div className="ai-team-page">
      <div className="legal-page">
        <div className="container-narrow">
          <Link href="/the-ai-team" className="back-link">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>

          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Last Updated: June 3, 2026</p>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Agreement to Terms</h2>
              <p>
                By purchasing and using The AI Team ("the Product"), you agree to be bound by these Terms of Service.
                If you do not agree to these terms, do not purchase or use the Product.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Product Description</h2>
              <p>
                The AI Team is a digital product consisting of configuration files, documentation, and system prompts
                that enhance your Claude AI subscription. The Product is delivered as a downloadable ZIP file.
              </p>
              <p>
                <strong>Important:</strong> The Product requires an active Claude Pro ($20/month) or Claude Max ($100/month)
                subscription from Anthropic. This subscription is NOT included and must be purchased separately.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. No Coding Required</h2>
              <p>
                The AI Team is designed for users of all technical levels. You do NOT need coding experience to use this product.
                It can be used to:
              </p>
              <ul>
                <li>Improve productivity in your W-2 job or employment</li>
                <li>Manage personal tasks and life organization</li>
                <li>Run and scale a business</li>
                <li>Enhance any professional or personal workflow</li>
              </ul>
              <p>
                Setup takes approximately 15 minutes following our step-by-step guide.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Pricing and Payment</h2>
              <ul>
                <li><strong>Small Team (Tier 1):</strong> $5,999 one-time payment</li>
                <li><strong>Full Team (Tier 2):</strong> $7,999 one-time payment</li>
                <li><strong>Upgrade Option:</strong> Tier 1 customers may upgrade to Tier 2 for $2,999 at any time</li>
              </ul>
              <p>
                All prices are in USD. Payment is processed securely through Stripe. This is a one-time payment with no recurring fees.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. 30-Day Money-Back Guarantee</h2>
              <p>
                We offer a 30-day money-back guarantee. If you complete the setup process and do not save at least 10 hours per week
                using The AI Team, we will refund 100% of your purchase price.
              </p>
              <p>
                To request a refund, email <a href="mailto:support@knowmore.academy">support@knowmore.academy</a> within 30 days
                of purchase with your order number and brief explanation.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. License and Usage Rights</h2>
              <p>
                Upon purchase, you receive a non-exclusive, non-transferable license to use The AI Team for personal or business use.
                You may:
              </p>
              <ul>
                <li>Install and use the Product on any device you own</li>
                <li>Customize the Product for your personal or business needs</li>
                <li>Use the Product to generate work product for clients or employers</li>
              </ul>
              <p>
                You may NOT:
              </p>
              <ul>
                <li>Resell, redistribute, or share the Product with others</li>
                <li>Claim ownership of the Product or its components</li>
                <li>Reverse engineer, decompile, or modify the core system architecture</li>
                <li>Use the Product for illegal activities</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>7. Setup Call and Support</h2>
              <ul>
                <li><strong>Tier 1:</strong> 30-minute setup call within 30 days of purchase, 30 days email support</li>
                <li><strong>Tier 2:</strong> 60-minute setup call within 30 days of purchase, 60 days email support</li>
              </ul>
              <p>
                Setup calls are scheduled via email after purchase. Support is provided via email at
                <a href="mailto:support@knowmore.academy">support@knowmore.academy</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Third-Party Dependencies</h2>
              <p>
                The Product requires:
              </p>
              <ul>
                <li>Active Claude Pro or Claude Max subscription (purchased separately from Anthropic)</li>
                <li>Claude Code desktop application (free from Anthropic)</li>
                <li>Compatible operating system: Mac (macOS 10.15+), Windows (10/11), or Linux (Ubuntu/Debian)</li>
              </ul>
              <p>
                We are not responsible for changes, outages, or pricing changes from third-party providers including Anthropic.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Disclaimers and Limitations</h2>
              <p>
                THE PRODUCT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. We make no guarantees about:
              </p>
              <ul>
                <li>Specific results, time savings, or revenue generation</li>
                <li>Compatibility with future versions of Claude or other dependencies</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
              <p>
                <strong>Limitation of Liability:</strong> Our total liability is limited to the amount you paid for the Product.
                We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Updates and Modifications</h2>
              <p>
                We may update the Product from time to time. Tier 2 (Full Team) customers receive lifetime updates.
                Tier 1 (Small Team) customers receive updates for the first year after purchase.
              </p>
              <p>
                We reserve the right to modify these Terms of Service at any time. Continued use of the Product after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Privacy and Data</h2>
              <p>
                The AI Team operates locally on your device and through your Claude subscription. We do not collect, store, or
                access your usage data, prompts, or outputs. See our <Link href="/privacy">Privacy Policy</Link> for details.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Oregon, USA. Any disputes will be resolved in the courts
                of Deschutes County, Oregon.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Contact</h2>
              <p>
                For questions about these Terms, contact us at:
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:support@knowmore.academy">support@knowmore.academy</a><br/>
                <strong>Website:</strong> <a href="/contact">Contact Form</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link href="/terms" className="footer-link">Terms of Service</Link>
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/contact" className="footer-link">Contact Us</Link>
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} The AI Team. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
