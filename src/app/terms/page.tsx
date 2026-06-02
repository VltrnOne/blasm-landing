export default function Terms() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid var(--rule)", padding: "0 0" }}>
        <div className="page-grid" style={{ alignItems: "center", height: 64 }}>
          <div style={{ gridColumn: "content-start / content-end", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href="/" className="display" style={{ fontSize: "1.3rem", letterSpacing: "-0.02em", lineHeight: 1, textDecoration: "none", color: "var(--ink)" }}>BLASM</a>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="/privacy" className="label" style={{ color: "var(--ink-secondary)", textDecoration: "none" }}>Privacy</a>
              <a href="/#contact" className="cta cta--fill" style={{ padding: "8px 20px", fontSize: "0.65rem" }}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: "clamp(48px, 8vw, 120px)", paddingBottom: "clamp(64px, 10vw, 120px)" }}>
        <div className="page-grid">
          <div className="col-8">
            <span className="label label--accent" style={{ display: "block", marginBottom: 16 }}>Legal</span>
            <h1 className="display display--md" style={{ marginBottom: 8 }}>Terms of Service</h1>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", marginBottom: "clamp(40px, 5vw, 64px)" }}>Last updated June 2, 2026</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {[
                { t: "Agreement", p: "By accessing blasm.us, you agree to be bound by these Terms of Service. If you do not agree, do not use our website or services." },
                { t: "Services", p: "BLASM Consulting provides strategic consulting in logistics optimization, research and development, agentic AI solutions, digital transformation, and strategic advisory. Engagements are governed by separate agreements." },
                { t: "Intellectual Property", p: "All content on this website — text, graphics, logos, design, software — is the property of BLASM Consulting and protected by applicable intellectual property laws. No reproduction without prior written consent." },
                { t: "Confidentiality", p: "Information shared during consulting engagements is treated as confidential unless otherwise agreed. Both parties protect confidential information with the same care used for their own proprietary information." },
                { t: "Limitation of Liability", p: "BLASM provides information and services as-is. We make no warranties regarding accuracy, completeness, or reliability. BLASM shall not be liable for indirect, incidental, special, or consequential damages." },
                { t: "Governing Law", p: "These Terms are governed by the laws of the United States. Disputes shall be resolved in courts of competent jurisdiction." },
                { t: "Modifications", p: "We reserve the right to modify these terms at any time. Changes are effective immediately upon posting. Continued use constitutes acceptance." },
                { t: "Contact", p: "Questions about these Terms — reach us at info@blasm.us." },
              ].map((s, i) => (
                <div key={s.t} style={{ borderTop: i === 0 ? "3px solid var(--ink)" : "1px solid var(--rule)", paddingTop: 20 }}>
                  <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}>{s.t}</h2>
                  <p style={{ color: "var(--ink-secondary)", lineHeight: 1.7, maxWidth: "60ch" }}>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer style={{ background: "var(--ink)", padding: "clamp(24px, 3vw, 40px) 0" }}>
        <div className="page-grid">
          <div style={{ gridColumn: "content-start / content-end", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontSize: "0.7rem", color: "oklch(0.55 0.008 75)" }}>&copy; 2026 BLASM Consulting</span>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="/privacy" style={{ fontSize: "0.7rem", color: "oklch(0.55 0.008 75)", textDecoration: "none" }}>Privacy</a>
              <a href="/terms" style={{ fontSize: "0.7rem", color: "oklch(0.55 0.008 75)", textDecoration: "none" }}>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
