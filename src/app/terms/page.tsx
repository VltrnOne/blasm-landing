export default function Terms() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight text-[var(--accent)]">
            BLASM<span className="text-[var(--gold)]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--slate)]">
            <a href="/#services" className="hover:text-[var(--foreground)] transition-colors">Services</a>
            <a href="/privacy" className="hover:text-[var(--foreground)] transition-colors">Privacy</a>
            <a href="/#contact" className="px-5 py-2 bg-[var(--accent)] text-white rounded-md text-sm font-medium hover:bg-[var(--accent-secondary)] transition-colors">
              Start a Conversation
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--accent)] mb-2">Terms of Service</h1>
          <p className="text-sm text-[var(--slate)] mb-10">Last updated: June 2, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-[var(--slate)] text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the BLASM Consulting website (&quot;blasm.us&quot;), you agree
                to be bound by these Terms of Service. If you do not agree to these terms, please
                do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">2. Services</h2>
              <p>
                BLASM Consulting provides strategic consulting services including but not limited
                to logistics optimization, research and development, agentic AI solutions, financial
                operations, digital transformation, and strategic advisory. All consulting
                engagements are governed by separate engagement agreements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">3. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, design elements,
                and software — is the property of BLASM Consulting and is protected by applicable
                intellectual property laws. You may not reproduce, distribute, or create derivative
                works from any content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">4. Confidentiality</h2>
              <p>
                Any information shared during the course of a consulting engagement is treated as
                confidential unless otherwise agreed. Both parties agree to protect confidential
                information with the same degree of care used to protect their own proprietary
                information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">5. Limitation of Liability</h2>
              <p>
                BLASM Consulting provides information and services on an &quot;as is&quot; basis.
                We make no warranties, express or implied, regarding the accuracy, completeness,
                or reliability of any information provided. In no event shall BLASM Consulting be
                liable for any indirect, incidental, special, or consequential damages arising
                from the use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">6. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless BLASM Consulting, its officers, employees,
                and agents from any claims, liabilities, damages, or expenses arising from your
                use of our website or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">7. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws
                of the United States. Any disputes arising from these terms shall be resolved in
                the appropriate courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">8. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective
                immediately upon posting to this page. Your continued use of our website after
                changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">9. Contact</h2>
              <p>
                For questions about these Terms of Service, contact us at:{" "}
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
