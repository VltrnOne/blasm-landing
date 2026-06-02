export default function Privacy() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            BLASM<span className="text-[var(--accent)]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-[var(--text-secondary)]">
            <a href="/#services" className="hover:text-[var(--text-primary)] transition-colors">Services</a>
            <a href="/terms" className="hover:text-[var(--text-primary)] transition-colors">Terms</a>
            <a href="/#contact" className="btn-primary !py-2 !px-5 !text-[13px]">Get in Touch</a>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[var(--text-muted)] mb-12">Last updated: June 2, 2026</p>

          <div className="space-y-10 text-[var(--text-secondary)] text-sm leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">1. Information We Collect</h2>
              <p>
                When you contact us through our website, email, or other channels, we may collect
                your name, email address, company name, phone number, and any other information
                you voluntarily provide. We also collect standard web analytics data including
                IP address, browser type, pages visited, and referring URLs.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to your inquiries and provide consulting services</li>
                <li>Communicate with you about our services, updates, and opportunities</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share information with trusted service providers who assist us in operating our
                business, provided they agree to keep this information confidential. We may also
                disclose information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction. No method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">5. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your
                browsing experience and analyze website traffic. You can control cookie preferences
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You
                may also opt out of receiving marketing communications at any time. Contact us at{" "}
                <a href="mailto:info@blasm.us" className="text-[var(--accent)] hover:underline">info@blasm.us</a>.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on
                this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">8. Contact</h2>
              <p>
                Questions about this Privacy Policy? Reach us at{" "}
                <a href="mailto:info@blasm.us" className="text-[var(--accent)] hover:underline">info@blasm.us</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--border)] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs text-[var(--text-muted)]">&copy; 2026 BLASM Consulting. All rights reserved.</span>
          <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
            <a href="/privacy" className="hover:text-[var(--text-secondary)] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[var(--text-secondary)] transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
