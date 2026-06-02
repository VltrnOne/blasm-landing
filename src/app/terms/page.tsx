export default function Terms() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            BLASM<span className="text-[var(--accent)]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-[var(--text-secondary)]">
            <a href="/#services" className="hover:text-[var(--text-primary)] transition-colors">Services</a>
            <a href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">Privacy</a>
            <a href="/#contact" className="btn-primary !py-2 !px-5 !text-[13px]">Get in Touch</a>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-2">Terms of Service</h1>
          <p className="text-sm text-[var(--text-muted)] mb-12">Last updated: June 2, 2026</p>

          <div className="space-y-10 text-[var(--text-secondary)] text-sm leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the BLASM Consulting website (&quot;blasm.us&quot;), you agree
                to be bound by these Terms of Service. If you do not agree, please do not use our
                website or services.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">2. Services</h2>
              <p>
                BLASM Consulting provides strategic consulting services including logistics
                optimization, research and development, agentic AI solutions, digital
                transformation, and strategic advisory. All consulting engagements are governed
                by separate engagement agreements.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, design elements,
                and software — is the property of BLASM Consulting and is protected by applicable
                intellectual property laws. You may not reproduce, distribute, or create derivative
                works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">4. Confidentiality</h2>
              <p>
                Any information shared during consulting engagements is treated as confidential
                unless otherwise agreed. Both parties agree to protect confidential information
                with the same degree of care used to protect their own proprietary information.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">5. Limitation of Liability</h2>
              <p>
                BLASM Consulting provides information and services on an &quot;as is&quot; basis.
                We make no warranties regarding accuracy, completeness, or reliability. In no event
                shall BLASM Consulting be liable for any indirect, incidental, special, or
                consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">6. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United States. Any disputes shall
                be resolved in courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">7. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes are effective
                immediately upon posting. Continued use constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-[var(--text-primary)] mb-3">8. Contact</h2>
              <p>
                Questions about these Terms? Reach us at{" "}
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
