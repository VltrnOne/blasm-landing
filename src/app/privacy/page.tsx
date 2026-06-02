export default function Privacy() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight text-[var(--accent)]">
            BLASM<span className="text-[var(--gold)]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--slate)]">
            <a href="/#services" className="hover:text-[var(--foreground)] transition-colors">Services</a>
            <a href="/terms" className="hover:text-[var(--foreground)] transition-colors">Terms</a>
            <a href="/#contact" className="px-5 py-2 bg-[var(--accent)] text-white rounded-md text-sm font-medium hover:bg-[var(--accent-secondary)] transition-colors">
              Start a Conversation
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--accent)] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[var(--slate)] mb-10">Last updated: June 2, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-[var(--slate)] text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">1. Information We Collect</h2>
              <p>
                When you contact us through our website, email, or other channels, we may collect
                your name, email address, company name, phone number, and any other information
                you voluntarily provide. We also collect standard web analytics data including
                IP address, browser type, pages visited, and referring URLs.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your inquiries and provide consulting services</li>
                <li>Communicate with you about our services, updates, and opportunities</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share information with trusted service providers who assist us in operating our
                business, provided they agree to keep this information confidential. We may also
                disclose information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">5. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your
                browsing experience and analyze website traffic. You can control cookie preferences
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices or content of these external sites. We encourage you to
                review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">7. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You
                may also opt out of receiving marketing communications at any time. To exercise
                these rights, contact us at{" "}
                <a href="mailto:info@blasm.us" className="text-[var(--accent)] underline">
                  info@blasm.us
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on
                this page with an updated effective date. Your continued use of our website
                constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at:{" "}
                <a href="mailto:info@blasm.us" className="text-[var(--accent)] underline">
                  info@blasm.us
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 bg-[#0d0d1a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            &copy; 2026 BLASM Consulting. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-gray-300 transition-colors">Terms</a>
            <span>blasm.us</span>
          </div>
        </div>
      </footer>
    </>
  );
}
