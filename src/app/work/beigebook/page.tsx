import Link from "next/link";

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
          <p className="font-[family-name:var(--font-libre)] text-xl text-gray-500">
            End-to-end LLM pipeline for transforming Fed narratives into recession risk signals
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

        {/* Problem */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">The Problem</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-4">
            The Federal Reserve publishes the Beige Book eight times per year: a qualitative, regional
            summary of economic conditions gathered from business contacts, economists, and market experts.
            It contains high-signal information about the direction of the economy, but it is unstructured,
            long-form text. No one has built a reliable system to transform it into quantitative signals
            in real time.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed">
            The research question: can an LLM-based pipeline read Beige Book text and generate economic
            risk indicators that predict recessions as accurately, or better than, traditional models?
            And can it do so without leaking future information through the temporal structure of the task?
          </p>
        </section>

        {/* Pipeline */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">The Pipeline</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-6">
            The system converts 526 Beige Book documents into paragraph-level topic-aligned time-series
            features, which are then fed into a recession nowcasting model.
          </p>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Topic taxonomy design",
                detail:
                  "Defined a paragraph-level topic taxonomy covering economic sectors: labor markets, consumer spending, manufacturing, real estate, financial conditions, and more. Each paragraph in each Beige Book routes to a topic category.",
              },
              {
                step: "02",
                title: "LiRA-style prompting with majority voting",
                detail:
                  "Used a multi-model ensemble (GPT-4, Claude, Gemini, FinBERT, Mistral) with LiRA-style prompting. Disagreements between models were resolved by majority vote, reducing single-model bias and improving consistency.",
              },
              {
                step: "03",
                title: "Temporal masking",
                detail:
                  "A key design constraint: the model cannot see future Beige Books when scoring a given publication date. Temporal masking enforced this throughout the pipeline, ensuring the signals are genuinely predictive rather than retrospectively fit.",
              },
              {
                step: "04",
                title: "Nowcasting",
                detail:
                  "Topic-aligned sentiment scores become time-series features fed into a recession nowcasting model, evaluated against NBER recession dates.",
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
              { value: "Oral", label: "ACM ICAIF 2025 presentation" },
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

        {/* Why this matters */}
        <section className="mb-16 bg-gray-50 rounded-xl p-7">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e] mb-3">
            Why this research connects to product work
          </h2>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed mb-3">
            The core challenge here was identical to what I faced in ChatGeneT: you have to define
            ground-truth standards before you can evaluate model outputs. The topic taxonomy and
            annotation guidelines for the Beige Book pipeline served the same function as the
            dialogue taxonomy in ChatGeneT, providing a structured framework that lets you measure
            whether the model is doing what you want.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
            The temporal masking design was the most important technical decision. Leaking future
            information into historical predictions is easy to do accidentally and makes results
            look much better than they are. Enforcing the constraint carefully was the difference
            between a result that holds up and one that would not survive peer review.
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
