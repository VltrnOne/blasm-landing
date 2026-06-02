"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════
   φ = 1.618033988749895
   Fibonacci: 1 1 2 3 5 8 13 21 34 55 89 144
   Hero wash stops at 38.2% and 61.8%
   Content splits: 61.8% / 38.2%
   ═══════════════════════════════════════════ */

const FRAME_COUNT = 54;
const fp = (i: number) => `/frames/f${String(i).padStart(3, "0")}.jpg`;

/* ── Canvas-based smooth frame renderer ── */
function useCanvasFrames(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  scrollRef: React.RefObject<HTMLElement | null>
) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const currentFrame = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* Load all images */
    const images: HTMLImageElement[] = [];
    let loaded = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = fp(i);
      img.onload = () => {
        loaded++;
        if (loaded === 1) {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    /* Smooth scroll-driven rendering via rAF */
    function render() {
      const el = scrollRef.current;
      if (!el || !ctx) { rafRef.current = requestAnimationFrame(render); return; }

      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const targetFrame = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(progress * (FRAME_COUNT - 1))));

      if (targetFrame !== currentFrame.current && imagesRef.current[targetFrame]?.complete && canvas) {
        currentFrame.current = targetFrame;
        const img = imagesRef.current[targetFrame];
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx!.drawImage(img, 0, 0);
      }

      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [canvasRef, scrollRef]);
}

/* ── Reveal observer ── */
function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold: 0.1, rootMargin: "0px 0px -34px 0px" }
    );
    el.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useCanvasFrames(canvasRef, heroRef);
  useReveal(pageRef);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div ref={pageRef}>
      {/* ── Canvas frame sequence ── */}
      <div className="frame-canvas" aria-hidden="true">
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div className="frame-wash" aria-hidden="true" />

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
          background: scrolled ? "oklch(0.965 0.01 80 / 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(13px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.88 0.02 75)" : "1px solid transparent",
        }}
      >
        <div className="phi-grid" style={{ alignItems: "center", height: 55 }}>
          <div style={{ gridColumn: "content-start / content-end", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href="#" className="display" style={{ fontSize: "1.2rem", letterSpacing: "-0.02em", lineHeight: 1, textDecoration: "none", color: "var(--soil)" }}>
              BLASM
            </a>
            <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 34 }}>
              <a href="#work" className="label" style={{ color: "var(--bark)", textDecoration: "none" }}>Work</a>
              <a href="#services" className="label" style={{ color: "var(--bark)", textDecoration: "none" }}>Services</a>
              <a href="#method" className="label" style={{ color: "var(--bark)", textDecoration: "none" }}>Method</a>
              <a href="#contact" className="cta cta--fill" style={{ padding: "7px 21px", fontSize: "0.62rem" }}>Get in Touch</a>
            </div>
            <a href="#contact" className="hide-desktop cta cta--fill" style={{ padding: "6px 13px", fontSize: "0.58rem" }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* ── Hero — scroll height = video duration ── */}
      <section ref={heroRef} className="relative z-10" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen flex flex-col" style={{ justifyContent: "flex-end", paddingBottom: "clamp(55px, 10vh, 144px)" }}>
          <div className="phi-grid">
            {/* Text sits in the φ-major column (61.8%) */}
            <div className="phi-major">
              <div className="reveal" style={{ marginBottom: 13 }}>
                <span className="label label--amber">Est. 2023 — Where Everything Grows</span>
              </div>
              <h1 className="reveal display display--hero" style={{ marginBottom: "clamp(21px, 3.5vw, 55px)", maxWidth: "13ch" }}>
                We grow what others plant.
              </h1>
            </div>
            {/* Subtext in φ-minor (38.2%), offset down by golden ratio */}
            <div className="phi-minor reveal" style={{ alignSelf: "end", paddingBottom: 5 }}>
              <p className="body-lg" style={{ color: "var(--bark)", maxWidth: "38ch" }}>
                A consulting agency delivering measurable outcomes across
                logistics, R&amp;D, and agentic AI — three disciplines, one firm.
              </p>
              <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", gap: 13 }}>
                <a href="#contact" className="cta cta--fill">
                  Start a Conversation
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </a>
                <a href="#services" className="cta">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="relative z-10 full-bleed overflow-hidden" style={{ background: "var(--soil)", padding: "13px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "marquee 24s linear infinite" }}>
          {[...Array(3)].map((_, rep) => (
            <span key={rep} style={{ display: "flex", alignItems: "center", gap: 55, paddingRight: 55 }}>
              {["Logistics", "Research & Development", "Agentic Solutions", "Supply Chain", "Digital Transformation", "Strategic Advisory"].map((t) => (
                <span key={t + rep} style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--sand)", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 13 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--amber)" }} />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Results ── */}
      <section id="work" className="relative z-10" style={{ background: "var(--cream)", paddingTop: "clamp(89px, 12vw, 233px)", paddingBottom: "clamp(89px, 12vw, 233px)" }}>
        <div className="phi-grid">
          <div className="reveal" style={{ marginBottom: "clamp(55px, 7vw, 89px)", gridColumn: "content-start / content-end" }}>
            <span className="label label--amber" style={{ display: "block", marginBottom: 13 }}>Track Record</span>
            <h2 className="display display--xl" style={{ maxWidth: "16ch" }}>Outcomes, not outputs.</h2>
          </div>

          <div style={{ gridColumn: "content-start / content-end" }} data-stagger="">
            {[
              { n: "32%", d: "Reduction in delivery cost-per-unit across a regional supply chain network", t: "Supply Chain" },
              { n: "4×", d: "Pipeline acceleration through agentic automation of compliance workflows", t: "Operations" },
              { n: "$2.1M", d: "Operational savings delivered within the first year of engagement", t: "Transformation" },
              { n: "90d", d: "Time-to-launch for complex multi-system integrations", t: "Technology" },
            ].map((r) => (
              <div key={r.n} className="reveal" style={{ borderTop: "1px solid var(--sand)", paddingTop: 34, paddingBottom: "clamp(34px, 5vw, 55px)" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 13 }}>
                  <span className="result-num">{r.n}</span>
                  <span className="label" style={{ marginBottom: 8 }}>{r.t}</span>
                </div>
                <p style={{ color: "var(--bark)", lineHeight: 1.65, maxWidth: "50ch", marginTop: 8 }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — φ split layout ── */}
      <section id="services" className="relative z-10" style={{ background: "var(--parchment)", paddingTop: "clamp(89px, 12vw, 233px)", paddingBottom: "clamp(89px, 12vw, 233px)" }}>
        <div className="phi-grid">
          <div className="phi-major reveal" style={{ marginBottom: "clamp(55px, 7vw, 89px)" }}>
            <span className="label label--amber" style={{ display: "block", marginBottom: 13 }}>What We Do</span>
            <h2 className="display display--xl">Three disciplines. One firm.</h2>
          </div>

          {/* Services in full-width editorial rows */}
          {[
            { num: "01", title: "Logistics & Supply Chain", body: "End-to-end supply chain optimization, route engineering, fleet strategy, and last-mile architecture. We reduce cost-per-unit while improving reliability at scale.", caps: ["Route Optimization", "Fleet Analytics", "Procurement", "Warehouse Design"] },
            { num: "02", title: "Research & Development", body: "Market intelligence, product feasibility studies, competitive analysis, and technology roadmapping. We help you validate before you commit capital.", caps: ["Market Analysis", "Competitive Intel", "Product Validation", "Tech Assessment"] },
            { num: "03", title: "Agentic Solutions", body: "AI-powered automation and autonomous workflow design. We build intelligent systems that operate, learn, and improve without constant human oversight.", caps: ["Agent Architecture", "Process Automation", "LLM Integration", "Orchestration"] },
          ].map((svc) => (
            <div key={svc.num} className="reveal" style={{ gridColumn: "content-start / content-end", borderTop: "1px solid var(--sand)", paddingTop: "clamp(21px, 3vw, 34px)", paddingBottom: "clamp(34px, 5vw, 55px)", display: "grid", gridTemplateColumns: "1fr", gap: 13 }}>
              <div style={{ display: "flex", gap: "clamp(21px, 4vw, 55px)", flexWrap: "wrap" }}>
                <span className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--amber)", lineHeight: 0.9 }}>{svc.num}</span>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <h3 className="display display--lg" style={{ marginBottom: 13 }}>{svc.title}</h3>
                  <p style={{ color: "var(--bark)", lineHeight: 1.68, maxWidth: "50ch" }}>{svc.body}</p>
                  <div className="hide-mobile" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 21 }}>
                    {svc.caps.map((c) => (
                      <span key={c} style={{ fontSize: "0.68rem", padding: "5px 13px", border: "1px solid var(--sand)", color: "var(--earth)", fontWeight: 500 }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Method — dark ground ── */}
      <section id="method" className="relative z-10" style={{ background: "var(--soil)", color: "var(--cream)", paddingTop: "clamp(89px, 12vw, 233px)", paddingBottom: "clamp(89px, 12vw, 233px)" }}>
        <div className="phi-grid">
          <div className="phi-major reveal" style={{ marginBottom: 13 }}>
            <span className="label" style={{ color: "var(--amber)", display: "block", marginBottom: 13 }}>Method</span>
            <h2 className="display display--xl" style={{ color: "var(--cream)" }}>Four phases. Zero surprises.</h2>
          </div>
          <div className="phi-minor reveal hide-mobile" style={{ alignSelf: "end", paddingBottom: 8, marginBottom: 13 }}>
            <p className="body-lg" style={{ color: "var(--stone)", maxWidth: "34ch" }}>
              A disciplined engagement model designed for predictable outcomes.
            </p>
          </div>

          <div style={{ gridColumn: "content-start / content-end", marginTop: "clamp(34px, 5vw, 55px)" }} data-stagger="">
            {[
              { n: "01", t: "Discovery", d: "Deep diagnostic of operations, pain points, and strategic objectives. We listen before we prescribe." },
              { n: "02", t: "Architecture", d: "Solution design with clear deliverables, timelines, and success criteria. Every recommendation backed by data." },
              { n: "03", t: "Execution", d: "Embedded teams operating alongside your staff. We build internal capacity, not external dependency." },
              { n: "04", t: "Transition", d: "Knowledge transfer, documentation, and clean handoff. Your team owns the result when we leave." },
            ].map((s) => (
              <div key={s.n} className="reveal" style={{ borderTop: "1px solid var(--soil-warm)", paddingTop: "clamp(21px, 3vw, 34px)", paddingBottom: "clamp(21px, 3vw, 34px)", display: "flex", gap: "clamp(21px, 4vw, 55px)", alignItems: "baseline", flexWrap: "wrap" }}>
                <span className="display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--amber)", lineHeight: 0.9 }}>{s.n}</span>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <h3 className="display display--md" style={{ color: "var(--cream)", marginBottom: 8 }}>{s.t}</h3>
                  <p style={{ color: "var(--stone)", lineHeight: 1.68, maxWidth: "50ch" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Growth — φ split ── */}
      <section className="relative z-10" style={{ background: "var(--cream)", paddingTop: "clamp(89px, 12vw, 233px)", paddingBottom: "clamp(89px, 12vw, 233px)" }}>
        <div className="phi-grid">
          <div className="phi-major reveal">
            <span className="label label--amber" style={{ display: "block", marginBottom: 13 }}>Growth</span>
            <h2 className="display display--xl" style={{ marginBottom: "clamp(21px, 3vw, 34px)" }}>Built to scale.</h2>
            <p className="body-lg" style={{ color: "var(--bark)", maxWidth: "44ch", marginBottom: 21 }}>
              After three years of disciplined growth, BLASM has proven demand
              across multiple verticals. Predictable revenue, strong margins,
              low capital intensity.
            </p>
            <p style={{ color: "var(--bark)", maxWidth: "44ch", lineHeight: 1.68 }}>
              We&apos;re expanding our agentic solutions practice, deepening
              vertical expertise, and scaling delivery capacity. The infrastructure
              is built. The demand is accelerating.
            </p>
          </div>
          <div className="phi-minor reveal" style={{ paddingTop: "clamp(0px, 2vw, 34px)" }}>
            {[
              { k: "Recurring Revenue", v: "Engagements expand in scope year-over-year" },
              { k: "Capital Efficiency", v: "High utilization rates, lean operational overhead" },
              { k: "Market Position", v: "Agentic AI capability as a compounding moat" },
              { k: "Client Economics", v: "98% retention with strong referral pipeline" },
            ].map((item, i) => (
              <div key={item.k} style={{ borderTop: i === 0 ? "3px solid var(--soil)" : "1px solid var(--sand)", paddingTop: 13, paddingBottom: 21 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--soil)", marginBottom: 3 }}>{item.k}</div>
                <div style={{ fontSize: "0.88rem", color: "var(--bark)", lineHeight: 1.55 }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="relative z-10" style={{ background: "var(--parchment)", paddingTop: "clamp(89px, 14vw, 233px)", paddingBottom: "clamp(89px, 14vw, 233px)" }}>
        <div className="phi-grid">
          <div className="phi-major reveal">
            <span className="label label--amber" style={{ display: "block", marginBottom: 13 }}>Contact</span>
            <h2 className="display display--xl" style={{ marginBottom: "clamp(21px, 3vw, 34px)" }}>Start a conversation.</h2>
            <p className="body-lg" style={{ color: "var(--bark)", maxWidth: "44ch", marginBottom: "clamp(34px, 5vw, 55px)" }}>
              Whether you&apos;re exploring a consulting engagement, a strategic
              partnership, or an investment opportunity.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 13 }}>
              <a href="mailto:info@blasm.us" className="cta cta--fill">
                info@blasm.us
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </a>
              <a href="mailto:info@blasm.us?subject=Partnership" className="cta">Partnership Inquiry</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10" style={{ background: "var(--soil)", color: "var(--cream)", padding: "clamp(34px, 5vw, 55px) 0" }}>
        <div className="phi-grid">
          <div style={{ gridColumn: "content-start / content-end", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 21 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 21 }}>
              <span className="display" style={{ fontSize: "1rem", lineHeight: 1 }}>BLASM</span>
              <span style={{ fontSize: "0.65rem", color: "var(--earth)" }}>&copy; 2026 BLASM Consulting</span>
            </div>
            <div style={{ display: "flex", gap: 21 }}>
              <a href="/privacy" style={{ fontSize: "0.65rem", color: "var(--earth)", textDecoration: "none" }}>Privacy</a>
              <a href="/terms" style={{ fontSize: "0.65rem", color: "var(--earth)", textDecoration: "none" }}>Terms</a>
              <a href="mailto:info@blasm.us" style={{ fontSize: "0.65rem", color: "var(--earth)", textDecoration: "none" }}>info@blasm.us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
