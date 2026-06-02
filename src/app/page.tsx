export default function Home() {
  return (
    <>
      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight text-[var(--accent)]">
            BLASM<span className="text-[var(--gold)]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--slate)]">
            <a href="#services" className="hover:text-[var(--foreground)] transition-colors">
              Services
            </a>
            <a href="#track-record" className="hover:text-[var(--foreground)] transition-colors">
              Track Record
            </a>
            <a href="#approach" className="hover:text-[var(--foreground)] transition-colors">
              Approach
            </a>
            <a href="#leadership" className="hover:text-[var(--foreground)] transition-colors">
              Leadership
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-[var(--accent)] text-white rounded-md text-sm font-medium hover:bg-[var(--accent-secondary)] transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20 px-6 grid-bg">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--gold)] tracking-widest uppercase mb-4">
              Est. 2023 &middot; Strategic Consulting
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] text-[var(--accent)] mb-6">
              We solve the problems
              <br />
              that slow your growth.
            </h1>
            <p className="text-lg md:text-xl text-[var(--slate)] leading-relaxed max-w-2xl mb-10">
              BLASM is a consulting agency built for companies navigating operational
              complexity. We deliver measurable outcomes in{" "}
              <strong className="text-[var(--foreground)]">logistics</strong>,{" "}
              <strong className="text-[var(--foreground)]">research &amp; development</strong>, and{" "}
              <strong className="text-[var(--foreground)]">agentic AI solutions</strong> — so you
              can focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--accent)] text-white rounded-md text-sm font-medium hover:bg-[var(--accent-secondary)] transition-colors"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[var(--border)] text-[var(--foreground)] rounded-md text-sm font-medium hover:border-[var(--slate)] transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-12 px-6 bg-[var(--accent)]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "3+", label: "Years Operating" },
            { value: "40+", label: "Engagements Delivered" },
            { value: "98%", label: "Client Retention" },
            { value: "6", label: "Industry Verticals" },
          ].map((stat) => (
            <div key={stat.label} className="animate-stat">
              <div className="text-3xl md:text-4xl font-semibold text-gold-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-[var(--gold)] tracking-widest uppercase mb-3">
            Core Competencies
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--accent)] mb-4">
            What We Do
          </h2>
          <p className="text-[var(--slate)] max-w-2xl mb-16">
            Each practice is led by domain specialists who have operated at scale — not
            theorists, but practitioners who&apos;ve built, shipped, and optimized the
            systems they now advise on.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Logistics */}
            <div className="group p-8 border border-[var(--border)] rounded-lg hover:border-[var(--gold)] transition-colors bg-white">
              <div className="w-12 h-12 rounded-md bg-[var(--accent)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-3">
                Logistics &amp; Supply Chain
              </h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
                End-to-end supply chain optimization, fleet management strategy, and
                last-mile delivery architecture. We reduce cost-per-unit while
                improving delivery reliability.
              </p>
              <ul className="text-xs text-[var(--slate)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Route optimization &amp; fleet analytics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Warehouse &amp; inventory system design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Vendor management &amp; procurement strategy
                </li>
              </ul>
            </div>

            {/* R&D */}
            <div className="group p-8 border border-[var(--border)] rounded-lg hover:border-[var(--gold)] transition-colors bg-white">
              <div className="w-12 h-12 rounded-md bg-[var(--accent)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-3">
                Research &amp; Development
              </h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
                Market research, product development strategy, and technology
                feasibility studies. We help you validate ideas before committing
                capital.
              </p>
              <ul className="text-xs text-[var(--slate)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Market analysis &amp; competitive intelligence
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Product-market fit validation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Technology assessment &amp; roadmapping
                </li>
              </ul>
            </div>

            {/* Agentic Solutions */}
            <div className="group p-8 border border-[var(--border)] rounded-lg hover:border-[var(--gold)] transition-colors bg-white">
              <div className="w-12 h-12 rounded-md bg-[var(--accent)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--accent)] mb-3">
                Agentic Solutions
              </h3>
              <p className="text-[var(--slate)] text-sm leading-relaxed mb-4">
                AI-powered automation, intelligent process orchestration, and
                autonomous workflow design. We build systems that think, act, and
                improve without constant human oversight.
              </p>
              <ul className="text-xs text-[var(--slate)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Autonomous agent architecture &amp; deployment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Intelligent process automation (IPA)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#9642;</span>
                  Custom LLM integration &amp; fine-tuning
                </li>
              </ul>
            </div>
          </div>

          {/* Additional services row */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Financial Operations",
                desc: "Treasury management, fintech infrastructure, and regulatory compliance strategy for growth-stage companies.",
              },
              {
                title: "Digital Transformation",
                desc: "Legacy system modernization, cloud migration strategy, and organizational change management.",
              },
              {
                title: "Strategic Advisory",
                desc: "Board-level counsel on capital allocation, M&A readiness, market entry, and competitive positioning.",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="p-6 border border-[var(--border)] rounded-lg bg-white hover:border-[var(--gold)] transition-colors"
              >
                <h3 className="text-base font-semibold text-[var(--accent)] mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-[var(--slate)] leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRACK RECORD ─── */}
      <section id="track-record" className="py-24 px-6 bg-[var(--accent)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-[var(--gold)] tracking-widest uppercase mb-3">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            A Track Record of Delivery
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            We measure success by client outcomes, not billable hours. Every
            engagement is scoped to a defined result with clear accountability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                industry: "Food & Beverage Logistics",
                result: "32% reduction in delivery cost-per-unit",
                detail:
                  "Redesigned last-mile delivery architecture for a regional food distribution company, consolidating routes and renegotiating vendor contracts.",
              },
              {
                industry: "Fintech Infrastructure",
                result: "Launched banking operations in 90 days",
                detail:
                  "Architected BaaS integration layer, compliance workflows, and treasury management for an early-stage fintech serving SMB clients.",
              },
              {
                industry: "Healthcare SaaS",
                result: "4x pipeline acceleration",
                detail:
                  "Built agentic AI system for automated compliance monitoring, reducing manual audit cycles from weeks to hours.",
              },
              {
                industry: "Real Estate Technology",
                result: "$2.1M operational savings in Year 1",
                detail:
                  "End-to-end digital transformation including property management automation, tenant portal development, and vendor procurement optimization.",
              },
            ].map((cs) => (
              <div
                key={cs.industry}
                className="p-8 border border-gray-700 rounded-lg hover:border-[var(--gold)] transition-colors"
              >
                <p className="text-xs text-[var(--gold)] tracking-widest uppercase mb-3">
                  {cs.industry}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {cs.result}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {cs.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section id="approach" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-[var(--gold)] tracking-widest uppercase mb-3">
            Methodology
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--accent)] mb-4">
            How We Work
          </h2>
          <p className="text-[var(--slate)] max-w-2xl mb-16">
            A disciplined, four-phase engagement model designed for predictable outcomes
            and transparent communication. No surprises. No scope creep.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "01",
                title: "Discovery",
                desc: "Deep diagnostic of your current operations, pain points, and strategic objectives. We listen before we prescribe.",
              },
              {
                phase: "02",
                title: "Architecture",
                desc: "Design the solution with clear deliverables, timelines, and success metrics. Every recommendation is backed by data.",
              },
              {
                phase: "03",
                title: "Execution",
                desc: "Deploy with embedded teams that operate alongside your staff. We build capacity, not dependency.",
              },
              {
                phase: "04",
                title: "Transition",
                desc: "Knowledge transfer, documentation, and operational handoff. Your team owns it when we leave.",
              },
            ].map((step) => (
              <div key={step.phase} className="relative">
                <div className="text-5xl font-semibold text-[var(--gold)] opacity-15 mb-4">
                  {step.phase}
                </div>
                <h3 className="text-lg font-semibold text-[var(--accent)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--slate)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BLASM (Investor-facing) ─── */}
      <section className="py-24 px-6 bg-gray-50 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-[var(--gold)] tracking-widest uppercase mb-3">
                Investment Thesis
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--accent)] mb-6">
                Built to Scale
              </h2>
              <p className="text-[var(--slate)] leading-relaxed mb-6">
                After three years of disciplined growth, BLASM has proven
                product-market fit across multiple verticals. Our consulting model
                generates predictable recurring revenue with high margins and low
                capital intensity.
              </p>
              <p className="text-[var(--slate)] leading-relaxed">
                We&apos;re entering our next growth phase — expanding our agentic
                solutions practice, deepening vertical expertise, and scaling our
                delivery capacity. The infrastructure is built. The team is proven.
                The market demand is accelerating.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  metric: "Revenue Growth",
                  value: "Year-over-year revenue growth with expanding margins",
                },
                {
                  metric: "Capital Efficiency",
                  value: "Lean operations with high utilization rates and minimal overhead",
                },
                {
                  metric: "Market Position",
                  value:
                    "Differentiated by agentic AI capability — a moat that compounds",
                },
                {
                  metric: "Client Economics",
                  value:
                    "High retention, expanding engagement sizes, and strong referral pipeline",
                },
              ].map((item) => (
                <div
                  key={item.metric}
                  className="p-5 bg-white border border-[var(--border)] rounded-lg"
                >
                  <h4 className="text-sm font-semibold text-[var(--accent)] mb-1">
                    {item.metric}
                  </h4>
                  <p className="text-sm text-[var(--slate)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section id="leadership" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-[var(--gold)] tracking-widest uppercase mb-3">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--accent)] mb-4">
            Operators, Not Observers
          </h2>
          <p className="text-[var(--slate)] max-w-2xl mb-16">
            Our leadership team has built and scaled companies. We bring
            executive-level judgment to every engagement because we&apos;ve sat in
            the chair.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <span className="text-2xl font-semibold text-[var(--gold)]">JM</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--accent)]">
                Jay Morpheous
              </h3>
              <p className="text-sm text-[var(--gold)] mb-2">Founder &amp; CEO</p>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                Serial operator with deep expertise in fintech infrastructure,
                agentic systems, and operational scaling. Leads firm strategy and
                key client relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <span className="text-2xl font-semibold text-[var(--gold)]">VP</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--accent)]">
                VP, Operations
              </h3>
              <p className="text-sm text-[var(--gold)] mb-2">Coming Soon</p>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                We&apos;re building our executive team to match our growth ambitions.
                Key leadership hires are part of our scaling strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--accent)] flex items-center justify-center">
                <span className="text-2xl font-semibold text-[var(--gold)]">VP</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--accent)]">
                VP, Technology
              </h3>
              <p className="text-sm text-[var(--gold)] mb-2">Coming Soon</p>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                Our agentic solutions practice requires world-class technical
                leadership. Active search in progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA / CONTACT ─── */}
      <section id="contact" className="py-24 px-6 bg-[var(--accent)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Whether you&apos;re a prospective client, an investor, or a potential
            partner — we&apos;re ready to have the conversation.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-12">
            <a
              href="mailto:jay@blasm.us"
              className="px-6 py-3.5 bg-[var(--gold)] text-[var(--accent)] rounded-md text-sm font-semibold hover:bg-[var(--gold-light)] transition-colors"
            >
              Email Us
            </a>
            <a
              href="mailto:jay@blasm.us?subject=Investment%20Inquiry"
              className="px-6 py-3.5 border border-gray-600 text-white rounded-md text-sm font-medium hover:border-[var(--gold)] transition-colors"
            >
              Investor Relations
            </a>
          </div>
          <div className="pt-8 border-t border-gray-700">
            <p className="text-xs text-gray-500">
              <strong className="text-gray-400">BLASM Consulting</strong>
              <br />
              United States &middot;{" "}
              <a href="mailto:jay@blasm.us" className="text-gray-400 hover:text-white">
                jay@blasm.us
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 bg-[#0d0d1a] border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            &copy; 2026 BLASM Consulting. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms
            </a>
            <span>blasm.us</span>
          </div>
        </div>
      </footer>
    </>
  );
}
