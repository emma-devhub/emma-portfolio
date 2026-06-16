import Link from "next/link";

export default function SocGenPage() {
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
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg mb-6 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-500 mb-2">Soci&eacute;t&eacute; G&eacute;n&eacute;rale</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-4">
            Single-Dealer Platform
          </h1>
          <p className="font-[family-name:var(--font-libre)] text-lg text-gray-600">
            Building a trading platform from scratch to drive user growth and profitability
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
            <li>300% increase in active users</li>
            <li>Significantly uplifted profitability</li>
            <li>[Add more impact metrics]</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
