import Link from "next/link";

export default function JPMorganPage() {
  return (
    <div className="pt-24">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-[#1a1a2e] mb-8 font-[family-name:var(--font-libre)] text-sm transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-500 mb-2">JPMorgan</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-4">
            Audio-to-Signal AI Pipeline
          </h1>
          <p className="font-[family-name:var(--font-libre)] text-lg text-gray-600">
            Improving LLM fine-tuning precision through audio signal processing
          </p>
        </div>

        {/* Content Placeholder */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <p className="font-[family-name:var(--font-libre)] text-gray-500 mb-4">
              Project details coming soon...
            </p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-gray-400">
              Add your role description, challenges, solutions, and impact here.
            </p>
          </div>
        </div>

        {/* Role Section Placeholder */}
        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">My Role</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed">
            [Your role description will go here]
          </p>
        </section>

        {/* Impact Section Placeholder */}
        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Impact</h2>
          <ul className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed space-y-2">
            <li>Improved LLM fine-tuning precision by 30%</li>
            <li>Drove $5M in new revenue</li>
            <li>[Add more impact metrics]</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
