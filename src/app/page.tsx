import Link from "next/link";
import Image from "next/image";

const cases = [
  {
    href: "/work/chatgenet",
    liveUrl: "https://www.getchatgenet.com",
    tag: "AI Healthcare",
    tagColor: "text-rose-600 bg-rose-50",
    title: "ChatGeneT",
    description: "AI patient simulator for clinical training",
    image: "/projects/chatgenet.png",
    imageAlt: "ChatGeneT patient simulation interface",
    imageBg: "bg-white",
    metrics: ["30+ hospitals", "500+ clinicians", "0.31% hallucination rate"],
    links: [
      { label: "Live site", url: "https://www.getchatgenet.com", external: true },
      { label: "Case study", url: "/work/chatgenet", external: false },
    ],
  },
  {
    href: "/work/valence",
    liveUrl: "https://getvalence.io",
    tag: "Agent Marketplace",
    tagColor: "text-violet-600 bg-violet-50",
    title: "Valence",
    description: "Marketplace where experts monetize what they know",
    image: "/projects/valence.png",
    imageAlt: "Valence agent marketplace",
    imageBg: "bg-gray-50",
    metrics: ["10+ self-built agents", "45–70 curated", "0→1 product"],
    links: [
      { label: "Live site", url: "https://getvalence.io", external: true },
      { label: "Case study", url: "/work/valence", external: false },
    ],
  },
  {
    href: "/work/repurpose",
    liveUrl: null,
    tag: "AI Workflow",
    tagColor: "text-emerald-600 bg-emerald-50",
    title: "Repurpose",
    description: "AI content redistribution pipeline",
    image: "/projects/repurpose.png",
    imageAlt: "Repurpose content redistribution pipeline diagram",
    imageBg: "bg-[#0f1117]",
    metrics: ["Multi-platform drafting", "Distribution workflow", "Audience-aware personas"],
    links: [
      { label: "GitHub", url: "https://github.com/emma-devhub", external: true },
      { label: "Case study", url: "/work/repurpose", external: false },
    ],
  },
  {
    href: "/work/beigebook",
    liveUrl: null,
    tag: "LLM Research · ACM ICAIF",
    tagColor: "text-amber-600 bg-amber-50",
    title: "Decoding the Beige Book",
    description: "LLM pipeline for macro recession signals",
    image: "/projects/beigebook.png",
    imageAlt: "LLM sentiment signal vs NBER recessions chart",
    imageBg: "bg-[#FAFAF8]",
    metrics: ["526 documents", "F1 0.89", "Oral presentation"],
    links: [
      { label: "Case study", url: "/work/beigebook", external: false },
    ],
  },
];

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] leading-tight mb-6">
          I build AI products for complex,
          <br className="hidden md:block" /> high-stakes workflows.
        </h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            "$1M angel-backed · Co-founded Valence & ChatGeneT",
            "30+ hospitals · 500+ clinicians · 4.5/5 CSAT",
            "MS CS @ Georgia Tech · ACM ICAIF oral",
          ].map((chip) => (
            <span
              key={chip}
              className="font-[family-name:var(--font-libre)] text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* Product gallery */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {cases.map((c) => (
            <div key={c.title} className="group">
              {/* Image */}
              <Link href={c.href} className={`block relative overflow-hidden rounded-xl ${c.imageBg}`} style={{ aspectRatio: "4/3" }}>
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  className={`object-cover ${c.imagePos ?? "object-top"} group-hover:scale-[1.02] transition-transform duration-300`}
                />
              </Link>

              {/* Caption */}
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e]">
                    {c.title}
                  </h2>
                  <p className="font-[family-name:var(--font-libre)] text-sm text-gray-400 mt-0.5">
                    {c.description}
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0 pt-0.5">
                  {c.links.map((l) =>
                    l.external ? (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-[family-name:var(--font-libre)] text-xs text-gray-400 hover:text-[#1a1a2e] transition-colors"
                      >
                        {l.label} ↗
                      </a>
                    ) : (
                      <Link
                        key={l.label}
                        href={l.url}
                        className="font-[family-name:var(--font-libre)] text-xs text-gray-400 hover:text-[#1a1a2e] transition-colors"
                      >
                        {l.label} →
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="max-w-5xl mx-auto px-6 py-14 border-t border-gray-100">
        <p className="font-[family-name:var(--font-libre)] text-xs tracking-widest text-gray-400 uppercase mb-6">
          Writing
        </p>
        <a
          href="https://medium.com/@emmayisun/the-agentic-future-is-here-what-i-predicted-in-2024-and-what-actually-happened-d923e1b54af1"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center mt-0.5">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 mb-0.5">Medium</p>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e] group-hover:underline">
              The Agentic Future Is Here: What I Predicted in 2024, and What Actually Happened
            </h3>
          </div>
        </a>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-14 border-t border-gray-100">
        <p className="font-[family-name:var(--font-libre)] text-xs tracking-widest text-gray-400 uppercase mb-4">
          Get in Touch
        </p>
        <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 mb-6 max-w-lg">
          Open to AI product, founder-in-residence, and product-engineering roles
          building LLM systems for complex workflows.
        </p>
        <div className="flex flex-wrap gap-4 items-center mb-5">
          <a
            href="/emma-sun-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-libre)] text-sm font-medium bg-[#1a1a2e] text-white px-5 py-2.5 rounded-full hover:bg-[#2d2d4e] transition-colors flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
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
