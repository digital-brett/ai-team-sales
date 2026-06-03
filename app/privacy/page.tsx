import Link from 'next/link'
import '../the-ai-team/the-ai-team-dark.css'
import '../terms/legal.css'

export default function PrivacyPage() {
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

          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last Updated: June 3, 2026</p>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Overview</h2>
              <p>
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information
                when you purchase and use The AI Team.
              </p>
              <p>
                <strong>Key Point:</strong> The AI Team operates locally on your device. We do NOT collect, store, or access your
                usage data, prompts, conversations, or outputs.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Information We Collect</h2>

              <h3 style={{fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#FFFFFF'}}>
                Information You Provide:
              </h3>
              <ul>
                <li><strong>Purchase Information:</strong> Email address, name, billing information (processed by Stripe)</li>
                <li><strong>Support Requests:</strong> Email correspondence when you contact us for help</li>
                <li><strong>Setup Call:</strong> Information shared during your onboarding call</li>
              </ul>

              <h3 style={{fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#FFFFFF'}}>
                Information We Do NOT Collect:
              </h3>
              <ul>
                <li>Your Claude conversations or prompts</li>
                <li>Your business data or personal information processed through The AI Team</li>
                <li>Your browsing history or usage patterns within Claude</li>
                <li>Any data stored locally in your AI Team files</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect only for:
              </p>
              <ul>
                <li>Processing your purchase and delivering the Product</li>
                <li>Scheduling your setup call</li>
                <li>Providing customer support</li>
                <li>Sending product updates (Tier 2 customers only)</li>
                <li>Processing refunds if requested</li>
              </ul>
              <p>
                We do NOT use your information for marketing, advertising, or any other purpose without your explicit consent.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Third-Party Services</h2>

              <h3 style={{fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#FFFFFF'}}>
                Stripe (Payment Processing):
              </h3>
              <p>
                All payments are processed by Stripe. Stripe collects payment information including credit card details, billing
                address, and email. We do NOT store your full credit card information.
              </p>
              <p>
                Stripe's Privacy Policy: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a>
              </p>

              <h3 style={{fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#FFFFFF'}}>
                GoHighLevel (CRM):
              </h3>
              <p>
                After purchase, your email and purchase tier are sent to our CRM system (GoHighLevel) to facilitate delivery,
                support, and setup call scheduling. We do not share this information with any other third parties.
              </p>

              <h3 style={{fontSize: '18px', marginTop: '24px', marginBottom: '12px', color: '#FFFFFF'}}>
                Anthropic Claude:
              </h3>
              <p>
                The AI Team requires a Claude subscription from Anthropic. Your usage of Claude (including all prompts, conversations,
                and outputs) is governed by Anthropic's privacy policy, NOT ours. We have NO access to your Claude data.
              </p>
              <p>
                Anthropic's Privacy Policy: <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/privacy</a>
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information:
              </p>
              <ul>
                <li>SSL encryption for all website traffic</li>
                <li>Secure payment processing through Stripe (PCI-compliant)</li>
                <li>Limited access to customer data (support team only)</li>
                <li>No storage of credit card information on our servers</li>
              </ul>
              <p>
                <strong>Local Security:</strong> The AI Team files are stored locally on your device. You are responsible for
                securing your own device and Claude account.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Data Retention</h2>
              <ul>
                <li><strong>Purchase Records:</strong> Retained for 7 years for tax and accounting purposes</li>
                <li><strong>Support Emails:</strong> Retained for 2 years</li>
                <li><strong>Marketing Emails:</strong> You can unsubscribe at any time, and your data is removed within 30 days</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>7. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li><strong>Access:</strong> Request a copy of all data we have about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal retention requirements)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
              </ul>
              <p>
                To exercise these rights, email <a href="mailto:support@knowmore.academy">support@knowmore.academy</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Children's Privacy</h2>
              <p>
                The AI Team is not intended for users under the age of 18. We do not knowingly collect information from children.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. International Users</h2>
              <p>
                The AI Team is operated from the United States. If you are located outside the U.S., your information may be
                transferred to and processed in the U.S. By using the Product, you consent to this transfer.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify Tier 2 customers of significant changes via email.
                Continued use of the Product after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Contact Us</h2>
              <p>
                For questions about this Privacy Policy or to exercise your rights, contact us at:
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:support@knowmore.academy">support@knowmore.academy</a><br/>
                <strong>Website:</strong> <Link href="/contact">Contact Form</Link>
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
