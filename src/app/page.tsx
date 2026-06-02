"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ── Constants ── */
const FRAME_COUNT = 30;
const FRAME_PATH = (i: number) => `/frames/f${String(i).padStart(3, "0")}.jpg`;

/* ── Scroll-driven frame sequence ── */
function useFrameSequence(containerRef: React.RefObject<HTMLElement | null>) {
  const [activeFrame, setActiveFrame] = useState(1);

  useEffect(() => {
    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const h = containerRef.current.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / h));
      const frame = Math.max(1, Math.min(FRAME_COUNT, Math.ceil(progress * FRAME_COUNT)));
      setActiveFrame(frame);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  return activeFrame;
}

/* ── Intersection reveal ── */
function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("vis");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    el.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const activeFrame = useFrameSequence(heroRef);
  useReveal(pageRef);

  /* Preload frames */
  const [framesLoaded, setFramesLoaded] = useState(false);
  useEffect(() => {
    let loaded = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => { loaded++; if (loaded === FRAME_COUNT) setFramesLoaded(true); };
    }
  }, []);

  /* Nav scroll state */
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div ref={pageRef}>
      {/* ── FRAME SEQUENCE (fixed behind hero) ── */}
      <div className="frame-sequence" aria-hidden="true">
        {Array.from({ length: FRAME_COUNT }, (_, i) => (
          <img
            key={i + 1}
            src={FRAME_PATH(i + 1)}
            alt=""
            className={activeFrame === i + 1 ? "active" : ""}
            loading={i < 5 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <div className="frame-overlay" aria-hidden="true" />

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "oklch(0.97 0.008 75 / 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.88 0.008 75)" : "1px solid transparent",
        }}
      >
        <div className="page-grid" style={{ alignItems: "center", height: 64 }}>
          <div className="flex items-center justify-between" style={{ gridColumn: "content-start / content-end" }}>
            <a href="#" className="display" style={{ fontSize: "1.3rem", letterSpacing: "-0.02em", lineHeight: 1 }}>
              BLASM
            </a>
            <div className="hide-mobile flex items-center" style={{ gap: 32 }}>
              <a href="#work" className="label" style={{ color: "var(--ink-secondary)", textDecoration: "none" }}>Work</a>
              <a href="#services" className="label" style={{ color: "var(--ink-secondary)", textDecoration: "none" }}>Services</a>
              <a href="#method" className="label" style={{ color: "var(--ink-secondary)", textDecoration: "none" }}>Method</a>
              <a href="#contact" className="cta cta--fill" style={{ padding: "8px 20px", fontSize: "0.65rem" }}>
                Get in Touch
              </a>
            </div>
            <a href="#contact" className="hide-desktop cta cta--fill" style={{ padding: "7px 16px", fontSize: "0.6rem" }}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative z-10" style={{ minHeight: "250vh" }}>
        <div className="sticky top-0 min-h-screen flex flex-col justify-end" style={{ paddingBottom: "clamp(48px, 8vh, 96px)" }}>
          <div className="page-grid">
            <div className="col-wide">
              <div className="reveal" style={{ marginBottom: 24 }}>
                <span className="label label--accent">Est. 2023</span>
              </div>
              <h1 className="reveal display display--xl" style={{ marginBottom: "clamp(24px, 4vw, 48px)", maxWidth: "14ch" }}>
                We solve what
                slows you down.
              </h1>
              <div className="reveal col-offset" style={{ gridColumn: "unset" }}>
                <p className="body-lg" style={{ color: "var(--ink-secondary)", maxWidth: "52ch" }}>
                  BLASM is a consulting agency that delivers measurable outcomes
                  across logistics, research &amp; development, and agentic AI —
                  three disciplines, one operator-led firm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE DIVIDER ── */}
      <div
        className="relative z-10 overflow-hidden full-bleed"
        style={{ background: "var(--ink)", padding: "14px 0" }}
      >
        <div style={{ display: "flex", width: "max-content", animation: "marquee 20s linear infinite" }}>
          {[...Array(3)].map((_, rep) => (
            <span key={rep} className="flex items-center" style={{ gap: 48, paddingRight: 48 }}>
              {["Logistics", "Research & Development", "Agentic Solutions", "Supply Chain", "Digital Transformation", "Strategic Advisory"].map((t) => (
                <span key={t + rep} style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--paper)", whiteSpace: "nowrap" as const, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--vermillion)" }} />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
      </div>

      {/* ── RESULTS ── */}
      <section id="work" className="relative z-10" style={{ background: "var(--paper)", paddingTop: "clamp(64px, 10vw, 140px)", paddingBottom: "clamp(64px, 10vw, 140px)" }}>
        <div className="page-grid">
          <div className="col-wide reveal" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <span className="label label--accent">Track Record</span>
          </div>

          {/* Asymmetric result layout */}
          <div className="col-wide" data-stagger="">
            {[
              { n: "32%", desc: "Reduction in delivery cost-per-unit across a regional supply chain network", tag: "Supply Chain" },
              { n: "4×", desc: "Pipeline acceleration through agentic automation of compliance workflows", tag: "Operations" },
              { n: "$2.1M", desc: "Operational savings delivered within the first year of engagement", tag: "Transformation" },
              { n: "90d", desc: "Time-to-launch for complex multi-system integrations", tag: "Technology" },
            ].map((r, i) => (
              <div key={r.n} className="reveal result-fig" style={{ borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                  <div className="flex items-end justify-between flex-wrap" style={{ gap: 16 }}>
                    <span className="result-fig__number">{r.n}</span>
                    <span className="label" style={{ paddingBottom: 8 }}>{r.tag}</span>
                  </div>
                  <p className="result-fig__label">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative z-10" style={{ background: "var(--paper-warm)", paddingTop: "clamp(64px, 10vw, 140px)", paddingBottom: "clamp(64px, 10vw, 140px)" }}>
        <div className="page-grid">
          <div className="col-wide reveal" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <span className="label label--accent" style={{ marginBottom: 16, display: "block" }}>What We Do</span>
            <h2 className="display display--lg" style={{ maxWidth: "18ch" }}>
              Three disciplines.
              One firm.
            </h2>
          </div>

          <div className="col-wide" data-stagger="">
            {[
              {
                num: "01",
                title: "Logistics & Supply Chain",
                body: "End-to-end supply chain optimization, route engineering, fleet strategy, and last-mile architecture. We reduce cost-per-unit while improving reliability at scale.",
                capabilities: ["Route Optimization", "Fleet Analytics", "Procurement Strategy", "Warehouse Design"],
              },
              {
                num: "02",
                title: "Research & Development",
                body: "Market intelligence, product feasibility studies, competitive analysis, and technology roadmapping. We help you validate before you commit capital.",
                capabilities: ["Market Analysis", "Competitive Intelligence", "Product Validation", "Technology Assessment"],
              },
              {
                num: "03",
                title: "Agentic Solutions",
                body: "AI-powered automation and autonomous workflow design. We build intelligent systems that operate, learn, and improve without constant human oversight.",
                capabilities: ["Agent Architecture", "Process Automation", "LLM Integration", "Workflow Orchestration"],
              },
            ].map((svc) => (
              <div key={svc.num} className="reveal service-block">
                <div>
                  <span className="display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--vermillion)" }}>
                    {svc.num}
                  </span>
                </div>
                <div>
                  <h3 className="display" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", marginBottom: 12 }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: "var(--ink-secondary)", lineHeight: 1.65, maxWidth: "48ch" }}>
                    {svc.body}
                  </p>
                </div>
                <div className="hide-mobile" style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, alignContent: "start" }}>
                  {svc.capabilities.map((c) => (
                    <span key={c} style={{ fontSize: "0.7rem", padding: "5px 12px", border: "1px solid var(--rule)", color: "var(--ink-muted)", fontWeight: 500 }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHOD ── */}
      <section id="method" className="relative z-10" style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: "clamp(64px, 10vw, 140px)", paddingBottom: "clamp(64px, 10vw, 140px)" }}>
        <div className="page-grid">
          <div className="col-left reveal" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <span className="label" style={{ color: "var(--vermillion)", marginBottom: 16, display: "block" }}>Method</span>
            <h2 className="display display--lg" style={{ color: "var(--paper)" }}>
              Four phases. Zero surprises.
            </h2>
          </div>
          <div className="col-right reveal hide-mobile" style={{ marginBottom: "clamp(48px, 6vw, 80px)", paddingTop: 16 }}>
            <p className="body-lg" style={{ color: "oklch(0.72 0.008 75)", maxWidth: "40ch" }}>
              A disciplined engagement model designed for predictable
              outcomes and transparent communication.
            </p>
          </div>

          <div className="col-wide" data-stagger="">
            {[
              { n: "01", t: "Discovery", d: "Deep diagnostic of operations, pain points, and strategic objectives. We listen before we prescribe." },
              { n: "02", t: "Architecture", d: "Solution design with clear deliverables, timelines, and success criteria. Every recommendation backed by data." },
              { n: "03", t: "Execution", d: "Embedded teams operating alongside your staff. We build internal capacity, not external dependency." },
              { n: "04", t: "Transition", d: "Knowledge transfer, documentation, and clean handoff. Your team owns the result when we leave." },
            ].map((step) => (
              <div
                key={step.n}
                className="reveal"
                style={{
                  borderTop: "1px solid oklch(0.3 0.008 75)",
                  padding: "clamp(24px, 4vw, 48px) 0",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", gap: "clamp(16px, 3vw, 40px)", alignItems: "baseline", flexWrap: "wrap" as const }}>
                  <span className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--vermillion)" }}>
                    {step.n}
                  </span>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <h3 className="display" style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)", color: "var(--paper)", marginBottom: 8 }}>
                      {step.t}
                    </h3>
                    <p style={{ color: "oklch(0.62 0.008 75)", lineHeight: 1.65, maxWidth: "48ch" }}>
                      {step.d}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH THESIS ── */}
      <section className="relative z-10" style={{ background: "var(--paper)", paddingTop: "clamp(64px, 10vw, 140px)", paddingBottom: "clamp(64px, 10vw, 140px)" }}>
        <div className="page-grid">
          <div className="col-left reveal">
            <span className="label label--accent" style={{ marginBottom: 16, display: "block" }}>Growth</span>
            <h2 className="display display--lg" style={{ marginBottom: "clamp(24px, 4vw, 40px)" }}>
              Built to scale.
            </h2>
            <p className="body-lg" style={{ color: "var(--ink-secondary)", maxWidth: "46ch", marginBottom: 32 }}>
              After three years of disciplined growth, BLASM has proven demand
              across multiple verticals. Our model generates predictable revenue
              with strong margins and low capital intensity.
            </p>
            <p style={{ color: "var(--ink-secondary)", maxWidth: "46ch", lineHeight: 1.65 }}>
              We&apos;re entering our next phase — expanding our agentic solutions
              practice, deepening vertical expertise, and scaling delivery capacity.
              The infrastructure is built. The demand is accelerating.
            </p>
          </div>
          <div className="col-right reveal" style={{ paddingTop: "clamp(0px, 2vw, 24px)" }}>
            {[
              { k: "Recurring Revenue", v: "Engagements expand in scope year-over-year" },
              { k: "Capital Efficiency", v: "High utilization rates, lean operational overhead" },
              { k: "Market Position", v: "Agentic AI capability as a compounding moat" },
              { k: "Client Economics", v: "98% retention with strong referral pipeline" },
            ].map((item, i) => (
              <div key={item.k} style={{ borderTop: i === 0 ? "3px solid var(--ink)" : "1px solid var(--rule)", padding: "20px 0" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>{item.k}</div>
                <div style={{ fontSize: "0.9rem", color: "var(--ink-secondary)", lineHeight: 1.55 }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10" style={{ background: "var(--paper-warm)", paddingTop: "clamp(80px, 12vw, 180px)", paddingBottom: "clamp(80px, 12vw, 180px)" }}>
        <div className="page-grid">
          <div className="col-wide reveal" style={{ maxWidth: 700 }}>
            <span className="label label--accent" style={{ marginBottom: 16, display: "block" }}>Contact</span>
            <h2 className="display display--lg" style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
              Start a conversation.
            </h2>
            <p className="body-lg" style={{ color: "var(--ink-secondary)", marginBottom: "clamp(32px, 4vw, 56px)", maxWidth: "48ch" }}>
              Whether you&apos;re exploring a consulting engagement, a strategic
              partnership, or an investment opportunity.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 16 }}>
              <a href="mailto:info@blasm.us" className="cta cta--fill">
                info@blasm.us
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
              <a href="mailto:info@blasm.us?subject=Partnership%20Inquiry" className="cta">
                Partnership Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10" style={{ background: "var(--ink)", color: "var(--paper)", padding: "clamp(32px, 4vw, 48px) 0" }}>
        <div className="page-grid">
          <div className="col-wide" style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "space-between", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <span className="display" style={{ fontSize: "1.1rem", lineHeight: 1 }}>BLASM</span>
              <span style={{ fontSize: "0.7rem", color: "oklch(0.55 0.008 75)" }}>
                &copy; 2026 BLASM Consulting
              </span>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="/privacy" style={{ fontSize: "0.7rem", color: "oklch(0.55 0.008 75)", textDecoration: "none" }}>Privacy</a>
              <a href="/terms" style={{ fontSize: "0.7rem", color: "oklch(0.55 0.008 75)", textDecoration: "none" }}>Terms</a>
              <a href="mailto:info@blasm.us" style={{ fontSize: "0.7rem", color: "oklch(0.55 0.008 75)", textDecoration: "none" }}>info@blasm.us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
