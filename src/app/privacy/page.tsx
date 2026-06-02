export default function Privacy() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid var(--rule)", padding: "0 0" }}>
        <div className="page-grid" style={{ alignItems: "center", height: 64 }}>
          <div style={{ gridColumn: "content-start / content-end", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href="/" className="display" style={{ fontSize: "1.3rem", letterSpacing: "-0.02em", lineHeight: 1, textDecoration: "none", color: "var(--ink)" }}>BLASM</a>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="/terms" className="label" style={{ color: "var(--ink-secondary)", textDecoration: "none" }}>Terms</a>
              <a href="/#contact" className="cta cta--fill" style={{ padding: "8px 20px", fontSize: "0.65rem" }}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: "clamp(48px, 8vw, 120px)", paddingBottom: "clamp(64px, 10vw, 120px)" }}>
        <div className="page-grid">
          <div className="col-8">
            <span className="label label--accent" style={{ display: "block", marginBottom: 16 }}>Legal</span>
            <h1 className="display display--md" style={{ marginBottom: 8 }}>Privacy Policy</h1>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-muted)", marginBottom: "clamp(40px, 5vw, 64px)" }}>Last updated June 2, 2026</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {[
                { t: "Information We Collect", p: "When you contact us through our website, email, or other channels, we may collect your name, email address, company name, phone number, and any other information you voluntarily provide. We also collect standard web analytics data including IP address, browser type, pages visited, and referring URLs." },
                { t: "How We Use Information", p: "We use collected information to respond to inquiries and provide consulting services, communicate about our services and opportunities, improve our website and offerings, and comply with legal obligations." },
                { t: "Information Sharing", p: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our business, provided they agree to maintain confidentiality. We may disclose information when required by law." },
                { t: "Data Security", p: "We implement appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction." },
                { t: "Cookies", p: "Our website may use cookies and similar tracking technologies to enhance browsing experience and analyze traffic. You can control cookie preferences through your browser settings." },
                { t: "Your Rights", p: "You have the right to access, correct, or delete your personal information. You may opt out of marketing communications at any time by contacting info@blasm.us." },
                { t: "Changes", p: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date." },
                { t: "Contact", p: "Questions about this Privacy Policy — reach us at info@blasm.us." },
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
