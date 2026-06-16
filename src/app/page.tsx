import Link from "next/link";

const cases = [
  {
    href: "/work/chatgenet",
    tag: "AI Healthcare",
    title: "ChatGeneT",
    description: "AI patient simulator for clinical training",
    detail:
      "Realistic multi-turn consultations so junior clinicians can practice history-taking before seeing real patients. Built the eval framework, dialogue taxonomy, and release gates.",
    metrics: ["30+ hospitals", "500+ clinicians", "0.31% hallucination rate", "4.5/5 CSAT"],
    accent: "from-rose-500 to-pink-600",
    light: "bg-rose-50",
    tag_color: "text-rose-600",
  },
  {
    href: "/work/valence",
    tag: "Agent Marketplace",
    title: "Valence",
    description: "Marketplace where experts monetize what they know",
    detail:
      "Built the teach-test-publish loop for domain experts to ship AI agents. Owned product, front-end design, and supply curation from day one.",
    metrics: ["10+ self-built agents", "45–70 curated agents", "0→1 product build"],
    accent: "from-violet-500 to-indigo-600",
    light: "bg-violet-50",
    tag_color: "text-violet-600",
  },
  {
    href: "/work/repurpose",
    tag: "AI Workflow",
    title: "Repurpose",
    description: "AI content redistribution pipeline",
    detail:
      "Ingests long-form content and generates platform-native drafts across X, LinkedIn, and Xiaohongshu with per-account persona config. Built end to end.",
    metrics: ["Claude generation", "X + LinkedIn APIs", "Per-account personas"],
    accent: "from-emerald-500 to-teal-600",
    light: "bg-emerald-50",
    tag_color: "text-emerald-600",
  },
  {
    href: "/work/beigebook",
    tag: "LLM Research · ACM ICAIF",
    title: "Decoding the Beige Book",
    description: "LLM pipeline for macro risk signals",
    detail:
      "End-to-end text-to-signal system across 526 Fed Beige Books. Multi-model ensemble with LiRA prompting and temporal masking for recession nowcasting.",
    metrics: ["526 documents", "56K+ topic entries", "F1 0.89", "Oral presentation"],
    accent: "from-amber-500 to-yellow-500",
    light: "bg-amber-50",
    tag_color: "text-amber-600",
  },
];

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-20">
        <p className="font-[family-name:var(--font-libre)] text-sm tracking-widest text-gray-400 uppercase mb-6">
          Emma Sun
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] leading-tight mb-8">
          I build AI products for complex,
          <br className="hidden md:block" /> high-stakes workflows.
        </h1>
        <p className="font-[family-name:var(--font-libre)] text-lg text-gray-500 leading-relaxed max-w-2xl">
          My work sits at the intersection of product systems, LLM evaluation, workflow design,
          and domain-specific AI. Previously at JPMorgan and Commure. Now at Valence.
        </p>
      </section>

      {/* Selected Work */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="font-[family-name:var(--font-libre)] text-xs tracking-widest text-gray-400 uppercase mb-10">
          Selected Work
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block border border-gray-100 rounded-xl p-7 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              <div className={`inline-flex items-center px-2.5 py-1 rounded-full ${c.light} mb-5`}>
                <span className={`font-[family-name:var(--font-libre)] text-xs font-medium ${c.tag_color}`}>
                  {c.tag}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-2 group-hover:text-blue-600 transition-colors">
                {c.title}
              </h2>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-500 mb-4">
                {c.description}
              </p>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed mb-5">
                {c.detail}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="font-[family-name:var(--font-libre)] text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <p className="font-[family-name:var(--font-libre)] text-xs tracking-widest text-gray-400 uppercase mb-8">
          Writing
        </p>
        <a
          href="https://medium.com/@emmayisun/the-agentic-future-is-here-what-i-predicted-in-2024-and-what-actually-happened-d923e1b54af1"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-5"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mt-0.5">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 mb-1">Medium</p>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e] group-hover:underline">
              The Agentic Future Is Here: What I Predicted in 2024, and What Actually Happened
            </h3>
          </div>
        </a>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100">
        <p className="font-[family-name:var(--font-libre)] text-xs tracking-widest text-gray-400 uppercase mb-4">
          Get in Touch
        </p>
        <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 mb-8 max-w-lg">
          Open to conversations about AI product roles, agent infrastructure, and anything
          at the frontier of LLMs in practice.
        </p>
        <div className="flex flex-wrap gap-5 items-center">
          <a
            href="mailto:emmayisun@gmail.com"
            className="font-[family-name:var(--font-libre)] text-sm tracking-widest text-[#1a1a2e] border-b border-[#1a1a2e] pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            emmayisun@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/emmayisun"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-libre)] text-sm text-gray-500 hover:text-[#1a1a2e] transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/emma-devhub"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-libre)] text-sm text-gray-500 hover:text-[#1a1a2e] transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
