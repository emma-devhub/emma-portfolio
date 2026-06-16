import Link from "next/link";
import Image from "next/image";

const pipelineSteps = [
  { label: "526 Beige\nBooks", sub: "1983–2024, 8× per year" },
  { label: "Paragraph\nRouting", sub: "topic taxonomy classification" },
  { label: "Multi-model\nScoring", sub: "GPT-4 · Claude · Gemini · FinBERT" },
  { label: "Time-series\nFeatures", sub: "topic-aligned sentiment scores" },
  { label: "Recession\nNowcasting", sub: "vs. NBER recession dates" },
];

export default function BeigeBookPage() {
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
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 mb-5">
            <span className="font-[family-name:var(--font-libre)] text-xs font-medium text-amber-600">
              LLM Research · ACM ICAIF Oral Presentation
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-4">
            Decoding the Beige Book
          </h1>
          <p className="font-[family-name:var(--font-libre)] text-xl text-gray-500 leading-relaxed">
            End-to-end LLM pipeline for transforming Fed narratives into
            structured recession risk signals.
          </p>
        </div>

        {/* Metadata bar */}
        <div className="flex flex-wrap gap-8 py-6 border-t border-b border-gray-100 mb-14">
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Published</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">ACM ICAIF 2025 (Oral)</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Data</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">526 Beige Books, 56K+ topic entries</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Peak F1</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">0.89 (recession nowcasting)</p>
          </div>
        </div>

        {/* Research chart */}
        <div className="mb-14 rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-[#FAFAF8]">
          <Image
            src="/projects/beigebook.png"
            alt="LLM sentiment signal from Beige Book text vs. NBER recession dates, 1983–2024"
            width={1482}
            height={809}
            className="w-full h-auto"
          />
          <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 text-center py-2 bg-gray-50">
            LLM sentiment signal vs. NBER recessions — illustrative of pipeline output
          </p>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">The Problem</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-4">
            The Federal Reserve publishes the Beige Book eight times per year: a qualitative,
            regional summary of economic conditions gathered from business contacts, economists,
            and market experts. It contains high-signal information about the direction of the
            economy, but it is unstructured, long-form text.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed">
            Existing macro datasets rarely convert Beige Book narratives into structured,
            topic-level signals with explicit temporal controls, making it difficult to use
            the text as a real-time leading indicator. The research question: can an LLM-based
            pipeline read this text and generate economic risk signals that predict recessions
            with meaningful accuracy?
          </p>
        </section>

        {/* Pipeline diagram */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Text-to-Signal Pipeline</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-wrap gap-2 items-start">
              {pipelineSteps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-2">
                  <div className="border border-amber-200 bg-white rounded-lg px-3 py-2.5 min-w-[90px]">
                    <p className="font-[family-name:var(--font-libre)] text-xs font-semibold text-[#1a1a2e] whitespace-pre-line leading-tight mb-1">
                      {step.label}
                    </p>
                    <p className="font-[family-name:var(--font-libre)] text-[10px] text-gray-400 leading-tight">
                      {step.sub}
                    </p>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <svg className="w-4 h-4 text-amber-200 mt-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Methodology</h2>
          <div className="space-y-5">
            {[
              {
                step: "01",
                title: "Topic taxonomy design",
                detail:
                  "Defined a paragraph-level topic taxonomy across economic sectors: labor markets, consumer spending, manufacturing, real estate, and financial conditions. Each paragraph in each Beige Book routes to a topic category with standardized ground-truth annotation guidelines.",
              },
              {
                step: "02",
                title: "LiRA-style prompting with majority voting",
                detail:
                  "Used a multi-model ensemble with LiRA-style prompting across GPT-4, Claude, Gemini, FinBERT, and Mistral. Disagreements between models resolved by majority vote, reducing single-model bias and improving consistency across the corpus.",
              },
              {
                step: "03",
                title: "Temporal masking",
                detail:
                  "A critical design constraint: the pipeline cannot see future Beige Books when scoring a given publication date. Temporal masking enforced this throughout, ensuring signals are genuinely predictive rather than retrospectively fit.",
              },
              {
                step: "04",
                title: "Recession nowcasting",
                detail:
                  "Topic-aligned sentiment scores become time-series features fed into a nowcasting model, evaluated against NBER recession dates with multiple forecast horizons.",
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

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "0.89", label: "peak F1, recession nowcasting" },
              { value: "526", label: "Beige Books processed" },
              { value: "56K+", label: "topic-level entries" },
              { value: "Oral", label: "ACM ICAIF 2025" },
            ].map((stat) => (
              <div key={stat.label} className="bg-amber-50 rounded-xl p-5">
                <p className="font-[family-name:var(--font-playfair)] text-3xl text-[#1a1a2e] mb-1">
                  {stat.value}
                </p>
                <p className="font-[family-name:var(--font-libre)] text-xs text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Connection to product work */}
        <section className="mb-16 bg-gray-50 rounded-xl p-7">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e] mb-3">
            Why this connects to product work
          </h2>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed mb-3">
            The core challenge here was identical to ChatGeneT: you have to define ground-truth
            standards before you can evaluate model outputs. The topic taxonomy and annotation
            guidelines served the same function as the dialogue taxonomy in ChatGeneT, providing
            a structured framework that lets you measure whether the model is doing what you want.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
            Temporal masking was the most important technical decision. Leaking future information
            into historical predictions is easy to do accidentally and makes results look far
            better than they are. Enforcing the constraint carefully was the difference between
            a result that holds up and one that would not survive peer review.
          </p>
        </section>

        {/* Nav */}
        <div className="border-t border-gray-100 pt-10 flex justify-between items-center">
          <Link
            href="/work/repurpose"
            className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e] hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Repurpose
          </Link>
          <Link
            href="/work/chatgenet"
            className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e] hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            ChatGeneT
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
