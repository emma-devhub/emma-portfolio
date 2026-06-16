import Link from "next/link";

const cases = [
  {
    href: "/work/chatgenet",
    tag: "AI Healthcare",
    title: "ChatGeneT",
    description: "AI patient simulator for clinical training",
    detail:
      "Multi-turn dialogue system deployed across 30+ hospitals. Built the eval framework, dialogue taxonomy, and release gates from scratch.",
    metrics: ["30+ hospitals", "500+ clinicians", "0.31% hallucination rate", "4.5/5 CSAT"],
    accent: "from-rose-500 to-pink-600",
    light: "bg-rose-50",
    tag_color: "text-rose-600",
  },
  {
    href: "/work/valence",
    tag: "Agent Marketplace",
    title: "Valence",
    description: "Expert-agent marketplace",
    detail:
      "Built the teach-test-publish loop for domain experts to ship AI agents. Owned product, front-end design, and supply from day one.",
    metrics: ["10+ self-built agents", "45–70 curated agents", "Chrome Store-style IA"],
    accent: "from-violet-500 to-indigo-600",
    light: "bg-violet-50",
    tag_color: "text-violet-600",
  },
  {
    href: "/work/repurpose",
    tag: "AI Workflow",
    title: "Repurpose",
    description: "AI content redistribution system",
    detail:
      "CLI that ingests long-form content and pushes platform-native variants to X, LinkedIn, and multiple 小红书 accounts, with per-account persona config.",
    metrics: ["Claude generation", "X + LinkedIn write APIs", "Playwright publishing", "Multi-account personas"],
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
      "End-to-end text-to-signal system on 526 Fed Beige Books. Multi-model ensemble with LiRA prompting and temporal masking for recession nowcasting.",
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
        <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 mb-6 max-w-lg">
          Open to conversations about AI product roles, agent infrastructure, and anything
          at the frontier of LLMs in practice.
        </p>
        <a
          href="mailto:emmayisun@gmail.com"
          className="font-[family-name:var(--font-libre)] text-sm tracking-widest text-[#1a1a2e] border-b border-[#1a1a2e] pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors"
        >
          emmayisun@gmail.com
        </a>
      </section>
    </div>
  );
}
