"use client";

import { useEffect, useRef } from "react";

/* ── Scroll reveal observer ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            // also reveal children with .reveal
            e.target.querySelectorAll(".reveal").forEach((c) => c.classList.add("visible"));
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    // observe self and any child sections
    el.querySelectorAll(".reveal, .reveal-stagger").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Card mouse tracking ── */
function useCardGlow() {
  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest(".card-interactive") as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
    document.addEventListener("mousemove", handleMouse);
    return () => document.removeEventListener("mousemove", handleMouse);
  }, []);
}

const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Logistics & Supply Chain",
    desc: "End-to-end supply chain optimization, route engineering, and last-mile delivery architecture. We reduce cost-per-unit while improving reliability at scale.",
    tags: ["Route Optimization", "Fleet Analytics", "Procurement Strategy", "Warehouse Design"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    ),
    title: "Research & Development",
    desc: "Market intelligence, product feasibility studies, and technology roadmapping. We help you validate before you commit capital.",
    tags: ["Market Analysis", "Competitive Intelligence", "Product Validation", "Tech Assessment"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Agentic Solutions",
    desc: "AI-powered automation and autonomous workflow design. We build intelligent systems that operate, learn, and improve without constant human oversight.",
    tags: ["Agent Architecture", "Process Automation", "LLM Integration", "Workflow Orchestration"],
  },
];

const RESULTS = [
  { metric: "32%", label: "reduction in delivery cost-per-unit", vertical: "Supply Chain" },
  { metric: "4x", label: "pipeline acceleration through agentic automation", vertical: "Operations" },
  { metric: "$2.1M", label: "operational savings delivered in Year 1", vertical: "Digital Transformation" },
  { metric: "90 day", label: "time-to-launch for complex system integrations", vertical: "Technology" },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Deep diagnostic of operations, pain points, and strategic objectives. We listen before we prescribe." },
  { step: "02", title: "Architecture", desc: "Solution design with clear deliverables, timelines, and success criteria. Every recommendation backed by data." },
  { step: "03", title: "Execution", desc: "Embedded teams operating alongside your staff. We build internal capacity, not external dependency." },
  { step: "04", title: "Transition", desc: "Knowledge transfer, documentation, and clean handoff. Your team owns the result when we leave." },
];

const VERTICALS = [
  "Supply Chain & Logistics",
  "Technology & SaaS",
  "Healthcare Operations",
  "Real Estate & PropTech",
  "Professional Services",
  "E-Commerce & DTC",
];

export default function Home() {
  const revealRef = useReveal();
  useCardGlow();

  return (
    <div ref={revealRef}>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--bg)]/80 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            BLASM<span className="text-[var(--accent)]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] text-[var(--text-secondary)]">
            <a href="#services" className="hover:text-[var(--text-primary)] transition-colors">Services</a>
            <a href="#results" className="hover:text-[var(--text-primary)] transition-colors">Results</a>
            <a href="#process" className="hover:text-[var(--text-primary)] transition-colors">Process</a>
            <a href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">Privacy</a>
            <a href="#contact" className="btn-primary !py-2 !px-5 !text-[13px]">Get in Touch</a>
          </div>
          {/* Mobile: simple links */}
          <a href="#contact" className="md:hidden btn-primary !py-2 !px-4 !text-[12px]">Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden">
        <div className="hero-orb hero-orb--accent" />
        <div className="hero-orb hero-orb--warm" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="reveal flex items-center gap-3 mb-8">
              <span className="metric-pill"><span className="dot" /> Accepting new engagements</span>
              <span className="metric-pill">Est. 2023</span>
            </div>

            <h1 className="reveal text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] text-[var(--text-primary)] mb-6">
              We solve the problems<br />
              <span className="text-[var(--accent)]">that slow your growth.</span>
            </h1>

            <p className="reveal text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mb-10">
              BLASM is a consulting agency that delivers measurable outcomes in
              logistics, R&D, and agentic AI solutions for companies navigating
              operational complexity.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Schedule a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#services" className="btn-secondary">Explore Services</a>
            </div>
          </div>

          {/* Stats row */}
          <div className="reveal mt-20 pt-10 border-t border-[var(--border)] grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "3+", l: "Years Operating" },
              { v: "40+", l: "Engagements" },
              { v: "98%", l: "Client Retention" },
              { v: "6", l: "Verticals Served" },
            ].map((s) => (
              <div key={s.l}>
                <div className="stat-value">{s.v}</div>
                <div className="text-xs text-[var(--text-muted)] tracking-wider uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERTICALS TICKER ── */}
      <div className="border-y border-[var(--border)] py-4 overflow-hidden">
        <div className="ticker-track">
          {[...VERTICALS, ...VERTICALS].map((v, i) => (
            <span key={i} className="px-8 text-sm text-[var(--text-muted)] whitespace-nowrap flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-60" />
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 max-w-2xl">
            <p className="text-xs font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Core Competencies</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">What We Do</h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              Three practices, each led by operators who&apos;ve built and scaled the
              systems they now advise on. Not theorists — practitioners.
            </p>
          </div>

          <div className="reveal-stagger grid md:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="reveal card-interactive p-8 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] mb-6">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{svc.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider-glow" />

      {/* ── RESULTS ── */}
      <section id="results" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 max-w-2xl">
            <p className="text-xs font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Track Record</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
              Outcomes, Not Outputs
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              We scope every engagement to a defined result with clear accountability.
              Success is measured by client impact, not hours billed.
            </p>
          </div>

          <div className="reveal-stagger grid sm:grid-cols-2 gap-6">
            {RESULTS.map((r) => (
              <div key={r.metric} className="reveal card-interactive p-8 group">
                <p className="text-xs text-[var(--accent)] tracking-[0.15em] uppercase mb-4">{r.vertical}</p>
                <div className="stat-value mb-2">{r.metric}</div>
                <p className="text-[var(--text-secondary)] text-sm">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider-glow" />

      {/* ── PROCESS ── */}
      <section id="process" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 max-w-2xl">
            <p className="text-xs font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Methodology</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">How We Work</h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              A disciplined four-phase model designed for predictable outcomes
              and transparent communication. No surprises. No scope creep.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="reveal relative pl-14">
              <div className="process-line" />
              <div className="space-y-12">
                {PROCESS.map((p) => (
                  <div key={p.step} className="relative">
                    <div className="absolute left-[-38px] top-0 w-12 h-12 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/30 flex items-center justify-center text-sm font-semibold text-[var(--accent)]">
                      {p.step}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{p.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth thesis card */}
            <div className="reveal card-interactive p-10">
              <p className="text-xs font-medium text-[var(--warm)] tracking-[0.2em] uppercase mb-4">Growth Thesis</p>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Built to Scale</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                After three years of disciplined growth, BLASM has proven
                demand across multiple verticals. Our model generates predictable
                revenue with strong margins and low capital intensity.
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
                We&apos;re entering our next phase — expanding our agentic solutions
                practice, deepening vertical expertise, and scaling delivery
                capacity. The infrastructure is built. The demand is accelerating.
              </p>
              <div className="space-y-4">
                {[
                  { k: "Revenue Model", v: "Recurring engagements with expanding scope" },
                  { k: "Capital Efficiency", v: "High utilization, lean operations" },
                  { k: "Market Position", v: "Agentic AI capability as a compounding moat" },
                  { k: "Client Economics", v: "98% retention, strong referral pipeline" },
                ].map((item) => (
                  <div key={item.k} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                    <div>
                      <span className="text-[var(--text-primary)] font-medium">{item.k}:</span>{" "}
                      <span className="text-[var(--text-secondary)]">{item.v}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-glow" />

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <p className="text-xs font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you&apos;re exploring a consulting engagement, an investment
              opportunity, or a strategic partnership — we&apos;re ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="mailto:info@blasm.us" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@blasm.us
              </a>
              <a href="mailto:info@blasm.us?subject=Partnership%20Inquiry" className="btn-secondary">
                Partnership Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--border)] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              BLASM<span className="text-[var(--accent)]">.</span>
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              &copy; 2026 BLASM Consulting. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
            <a href="/privacy" className="hover:text-[var(--text-secondary)] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[var(--text-secondary)] transition-colors">Terms</a>
            <a href="mailto:info@blasm.us" className="hover:text-[var(--text-secondary)] transition-colors">info@blasm.us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
