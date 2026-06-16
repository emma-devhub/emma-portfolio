import Link from "next/link";
import Image from "next/image";

const loopSteps = [
  { label: "Expert\nTeaching", sub: "explain your method in chat" },
  { label: "Method\nCapture", sub: "judgment + taste encoded" },
  { label: "Agent\nDraft", sub: "Claude-powered agent built" },
  { label: "Test\nRun", sub: "iterate until ready" },
  { label: "Marketplace\nListing", sub: "published for others to hire" },
];

export default function ValencePage() {
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
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-violet-50 mb-5">
            <span className="font-[family-name:var(--font-libre)] text-xs font-medium text-violet-600">
              Agent Marketplace
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-4">
            Valence
          </h1>
          <p className="font-[family-name:var(--font-libre)] text-xl text-gray-500 leading-relaxed">
            Monetize what you know. Open a chat, explain how you do the work, and Valence
            builds an AI agent that captures your methods, your judgment, your taste.
          </p>
        </div>

        {/* Metadata bar */}
        <div className="flex flex-wrap gap-8 py-6 border-t border-b border-gray-100 mb-14">
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">Founding Product (COO)</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Scope</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">Product, design, front-end, marketing, supply</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Site</p>
            <a
              href="https://getvalence.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-libre)] text-sm text-blue-600 hover:underline"
            >
              getvalence.io
            </a>
          </div>
        </div>

        {/* Product screenshot */}
        <div className="mb-14 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <Image
            src="/projects/valence.png"
            alt="Valence agent marketplace — Browse agents built by domain experts"
            width={1400}
            height={820}
            className="w-full h-auto"
          />
          <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 text-center py-2 bg-gray-50">
            getvalence.io — agent marketplace
          </p>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">The Problem</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-4">
            Experts have workflows, judgment, and taste that are genuinely hard to productize.
            Most AI tools ask users to write system prompts, which requires knowing how to
            operationalize your expertise before you start. That is the hard part, and it goes
            unsupported.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed">
            At the same time, there is real demand for expert judgment delivered at AI speed.
            People want to hire the thinking of a great analyst, editor, or strategist, not just
            a capable language model. The missing piece: a loop that lets an expert teach an
            agent their method, validate it, and publish it for others to use.
          </p>
        </section>

        {/* Teach-Test-Publish loop diagram */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Teach-Test-Publish Loop</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-wrap gap-2 items-start">
              {loopSteps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-2">
                  <div className="border border-violet-200 bg-white rounded-lg px-3 py-2.5 min-w-[90px]">
                    <p className="font-[family-name:var(--font-libre)] text-xs font-semibold text-[#1a1a2e] whitespace-pre-line leading-tight mb-1">
                      {step.label}
                    </p>
                    <p className="font-[family-name:var(--font-libre)] text-[10px] text-gray-400 leading-tight">
                      {step.sub}
                    </p>
                  </div>
                  {i < loopSteps.length - 1 && (
                    <svg className="w-4 h-4 text-violet-200 mt-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">My Role</h2>
          <div className="space-y-6">
            <div className="pl-5 border-l-2 border-violet-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                Built the Core Product Loop (0 to 1)
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Drove the teach-test-publish build experience as the product owner and voice of
                the customer. Translated user needs from early interviews into the feature set.
                The core loop, where an expert teaches an agent through conversation and then
                publishes it, was the central product decision and I owned it end to end.
              </p>
            </div>

            <div className="pl-5 border-l-2 border-violet-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                Personally Built and Shipped Agents
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Authored more than 10 of the marketplace's live agents myself, hand-teaching
                each one rather than importing. This gave the marketplace real, working supply
                from day one and gave me direct signal on where the builder experience broke
                down. I also curated and onboarded 45 to 70 additional agents: researching,
                vetting, writing descriptions, and configuring them for the marketplace.
              </p>
            </div>

            <div className="pl-5 border-l-2 border-violet-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                Owned Front-End Design and Shipped It
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Redesigned the agent detail and explore pages using a Chrome Web Store-inspired
                layout. Unified the app header system, slimmed the build workbench, and shipped
                the front-end code directly via PRs to the production repo. Design handoff to
                someone else never happened: I designed it, coded it, and merged it.
              </p>
            </div>

            <div className="pl-5 border-l-2 border-violet-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                Product Marketing End to End
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Owned positioning, messaging, landing-page copy, GTM strategy, and customer
                interviews to define the ICP. Request and search signal from early users fed
                directly into roadmap prioritization.
              </p>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Where It Stands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { value: "10+", label: "agents I personally built" },
              { value: "45–70", label: "curated marketplace agents" },
              { value: "0→1", label: "product built from scratch" },
            ].map((stat) => (
              <div key={stat.label} className="bg-violet-50 rounded-xl p-5">
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

        {/* Technical insight */}
        <section className="mb-16 bg-gray-50 rounded-xl p-7">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e] mb-3">
            What this taught me about agent product design
          </h2>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed mb-3">
            The hardest thing about a marketplace for agent builders is supply quality. An agent
            detail page can look great with a bad agent behind it. Building agents myself was the
            only way to develop reliable taste for what made one worth publishing, and to catch
            where the teaching UX caused builders to give up before they shipped.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
            The information architecture decision that mattered most: treating agents as products
            with detail pages, not as chat interfaces. That framing changed how users evaluated
            trust, expected quality, and understood what they were hiring.
          </p>
        </section>

        {/* Nav */}
        <div className="border-t border-gray-100 pt-10 flex justify-between items-center">
          <Link
            href="/work/chatgenet"
            className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e] hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ChatGeneT
          </Link>
          <Link
            href="/work/repurpose"
            className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e] hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            Repurpose
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
