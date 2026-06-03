import Link from 'next/link'
import '../the-ai-team-dark.css'
import './legal.css'

export default function AITeamTerms() {
  return (
    <div className="ai-team-page">
      <div className="legal-page">
        <div className="container-narrow">
          <Link href="/the-ai-team" className="back-link">
            ← Back to The AI Team
          </Link>

          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">The AI Team - Digital Product Purchase Agreement</p>
          <p className="legal-updated">Last Updated: May 29, 2026</p>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Agreement to Terms</h2>
              <p>
                By purchasing "The AI Team" digital product from Know More Academy, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, do not purchase or use this product.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Product Description</h2>
              <p>
                "The AI Team" is a digital product consisting of:
              </p>
              <ul>
                <li>Small Team (Tier 1): 3 AI team members + 17 core skills</li>
                <li>Full Team (Tier 2): 6 AI team members + 29 total skills</li>
                <li>Installation guides and documentation</li>
                <li>Setup instructions and configuration files</li>
              </ul>
              <p>
                The product is delivered as a downloadable ZIP file. It requires Claude Pro ($20/month) or Claude Max ($75/month) subscription from Anthropic, which is NOT included with this purchase.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Pricing and Payment</h2>
              <ul>
                <li><strong>Small Team:</strong> $5,997 one-time payment</li>
                <li><strong>Full Team:</strong> $7,997 one-time payment</li>
                <li><strong>Upgrade Path:</strong> Small Team customers can upgrade to Full Team for $2,500</li>
              </ul>
              <p>
                All payments are processed securely through Stripe. Payment is due in full at the time of purchase.
                No monthly fees or recurring charges apply to The AI Team product itself.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. 30-Day Money-Back Guarantee</h2>
              <p>
                We offer a 30-day money-back guarantee from the date of purchase. To qualify for a refund:
              </p>
              <ul>
                <li>You must request a refund within 30 days of purchase</li>
                <li>You must have completed the installation process as documented</li>
                <li>You must demonstrate that the product did not save you at least 10 hours per week as promised</li>
              </ul>
              <p>
                To request a refund, email <a href="mailto:support@knowmore.academy">support@knowmore.academy</a> with
                your order number and brief explanation. Refunds are processed within 5-7 business days.
              </p>
              <p className="legal-highlight">
                <strong>No refunds after 30 days.</strong> Digital products are non-refundable after the 30-day guarantee period has expired.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Delivery</h2>
              <p>
                Upon successful payment, you will receive:
              </p>
              <ul>
                <li>Immediate email confirmation with download link</li>
                <li>Access to the product ZIP file</li>
                <li>Installation guide and documentation</li>
              </ul>
              <p>
                Download links are valid for 90 days from purchase. After 90 days, contact support for re-access.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. License and Usage Rights</h2>
              <p>
                By purchasing The AI Team, you receive a <strong>single-user, non-transferable license</strong> to use the product. You may:
              </p>
              <ul>
                <li>Use the product for your personal or business purposes</li>
                <li>Customize configuration files and settings for your needs</li>
                <li>Install on multiple devices you personally own and operate</li>
              </ul>
              <p>
                You may NOT:
              </p>
              <ul>
                <li>Resell, redistribute, or share the product with others</li>
                <li>Publish, display, or provide access to the product files publicly</li>
                <li>Modify and redistribute the core product structure or skills</li>
                <li>Use the product to create competing products or services</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>7. System Requirements</h2>
              <p>
                The AI Team requires:
              </p>
              <ul>
                <li>Claude Pro ($20/month) or Claude Max ($75/month) subscription from Anthropic</li>
                <li>Claude Code desktop application (free from Anthropic)</li>
                <li>macOS 10.15+, Windows 10/11, or Linux (Ubuntu/Debian)</li>
                <li>Internet connection for AI processing</li>
              </ul>
              <p>
                <strong>Third-Party Services:</strong> The product relies on Claude AI, a third-party service operated by Anthropic.
                We are not responsible for Claude AI service availability, pricing changes, or functionality changes by Anthropic.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Support</h2>
              <ul>
                <li><strong>Small Team:</strong> 30 days email support + 30-minute setup call</li>
                <li><strong>Full Team:</strong> 60 days email support + 60-minute setup call</li>
              </ul>
              <p>
                Support is provided via email at <a href="mailto:support@knowmore.academy">support@knowmore.academy</a>.
                Response time is typically within 24 hours (business days). Support covers installation, configuration, and basic usage questions.
              </p>
              <p>
                Support does NOT cover:
              </p>
              <ul>
                <li>Claude AI technical issues or subscription problems</li>
                <li>Custom development or advanced modifications</li>
                <li>Training on general AI or business topics</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>9. Disclaimer of Warranties</h2>
              <p className="legal-highlight">
                THE PRODUCT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                We make no guarantees about:
              </p>
              <ul>
                <li>Specific business results or revenue increases</li>
                <li>Time savings beyond the 10 hours/week estimate</li>
                <li>Compatibility with future versions of Claude AI</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Know More Academy shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly,
                or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul>
                <li>Your use or inability to use the product</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the product</li>
                <li>Any bugs, viruses, or the like that may be transmitted through the product by any third party</li>
              </ul>
              <p>
                <strong>MAXIMUM LIABILITY:</strong> In no event shall our total liability to you for all damages exceed the amount you paid for the product.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Updates and Changes</h2>
              <p>
                We may release updates, improvements, or additional features to The AI Team. Updates are provided at our discretion
                and are not guaranteed. Existing customers receive updates at no additional charge for the tier they purchased.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated via email.
                Continued use of the product after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Oregon, United States,
                without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the product shall be resolved in the state or federal courts
                located in Deschutes County, Oregon.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Contact Information</h2>
              <p>
                For questions about these Terms or The AI Team product:
              </p>
              <p className="contact-info">
                <strong>Know More Academy</strong><br />
                Email: <a href="mailto:support@knowmore.academy">support@knowmore.academy</a><br />
                Website: <a href="https://knowmore.academy">knowmore.academy</a>
              </p>
            </section>
          </div>

          <div className="legal-footer">
            <p>By purchasing The AI Team, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
