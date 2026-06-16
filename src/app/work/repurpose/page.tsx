import Link from "next/link";

const pipelineSteps = [
  { label: "Long-form\nContent", sub: "YouTube / Substack URL" },
  { label: "Extraction", sub: "transcript or scrape" },
  { label: "Platform\nVariants", sub: "Claude generates per-account drafts" },
  { label: "Image\nGeneration", sub: "visuals for image-first platforms" },
  { label: "Publishing", sub: "APIs + browser automation" },
];

export default function RepurposePage() {
  return (
    <div className="pt-24">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-[#1a1a2e] mb-12 font-[family-name:var(--font-libre)] text-sm transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 mb-5">
            <span className="font-[family-name:var(--font-libre)] text-xs font-medium text-emerald-600">
              AI Workflow
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-4">
            Repurpose
          </h1>
          <p className="font-[family-name:var(--font-libre)] text-xl text-gray-500 leading-relaxed">
            AI content redistribution: from long-form to platform-native, with per-account
            persona config across every channel.
          </p>
        </div>

        {/* Metadata bar */}
        <div className="flex flex-wrap gap-8 py-6 border-t border-b border-gray-100 mb-14">
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">Sole builder, full product definition</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Stack</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">Claude, X API, LinkedIn API, browser automation</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Type</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">Production CLI tool</p>
          </div>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">The Problem</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-4">
            Long-form expert content, a podcast, a Substack post, a YouTube video, is hard to
            distribute repeatedly across channels. Manually cutting platform-native posts from
            a 60-minute episode is time-consuming and most people do it once or not at all.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed">
            Each platform has different format constraints, audience expectations, and tonal norms.
            A post that works on LinkedIn reads wrong on X and does not translate at all to
            Xiaohongshu. When you are managing multiple accounts, each with its own persona and
            audience, the combinatorics become unworkable manually.
          </p>
        </section>

        {/* Pipeline diagram */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Distribution Pipeline</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-wrap gap-2 items-start">
              {pipelineSteps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-2">
                  <div className="border border-emerald-200 bg-white rounded-lg px-3 py-2.5 min-w-[90px]">
                    <p className="font-[family-name:var(--font-libre)] text-xs font-semibold text-[#1a1a2e] whitespace-pre-line leading-tight mb-1">
                      {step.label}
                    </p>
                    <p className="font-[family-name:var(--font-libre)] text-[10px] text-gray-400 leading-tight">
                      {step.sub}
                    </p>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <svg className="w-4 h-4 text-emerald-200 mt-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">How It Works</h2>
          <div className="space-y-5">
            {[
              {
                step: "01",
                title: "Ingest",
                detail:
                  "Accepts a YouTube URL or Substack link. Extracts transcript via YouTube API or scrapes Substack post content.",
              },
              {
                step: "02",
                title: "Generate",
                detail:
                  "Claude generates platform-native variants for each target account. Each account has a persona config: voice, preferred topics, tone, and format constraints for the platform.",
              },
              {
                step: "03",
                title: "Image generation",
                detail:
                  "For image-first platforms like Xiaohongshu, generates relevant visuals based on post content so each draft is ready to publish as-is.",
              },
              {
                step: "04",
                title: "Publish",
                detail:
                  "X and LinkedIn use official write APIs. Platforms without mature publishing APIs use browser automation to complete the workflow.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-5">
                <span className="font-[family-name:var(--font-playfair)] text-2xl text-gray-200 leading-tight mt-0.5 flex-shrink-0 w-8">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-1">
                    {s.title}
                  </h3>
                  <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why I built it */}
        <section className="mb-16 bg-gray-50 rounded-xl p-7">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e] mb-3">
            Why I built this
          </h2>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed mb-3">
            Valence needed real-world content as supply for the marketplace and as signal for
            what agents could do. I built Repurpose to solve that problem operationally, and
            to prove out the agent workflow patterns I was designing into Valence.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
            The per-account persona config was the most interesting design decision. Rather than
            one voice applied across all accounts, each account has a config that captures its
            distinct angle on the same content. That required thinking carefully about what makes
            a voice consistent and what makes the same voice read differently across platforms.
          </p>
        </section>

        {/* Links */}
        <section className="mb-16">
          <a
            href="https://github.com/Kuzphi/MarketingAgent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e] border border-gray-200 rounded-lg px-4 py-2.5 hover:border-gray-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            github.com/Kuzphi/MarketingAgent
          </a>
        </section>

        {/* Nav */}
        <div className="border-t border-gray-100 pt-10 flex justify-between items-center">
          <Link
            href="/work/valence"
            className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e] hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Valence
          </Link>
          <Link
            href="/work/beigebook"
            className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e] hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            Beige Book
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
