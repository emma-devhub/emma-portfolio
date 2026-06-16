import Link from "next/link";

export default function ChatGeneTPage() {
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
          <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-rose-50 mb-5">
            <span className="font-[family-name:var(--font-libre)] text-xs font-medium text-rose-600">
              AI Healthcare
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-4">
            ChatGeneT
          </h1>
          <p className="font-[family-name:var(--font-libre)] text-xl text-gray-500">
            AI patient simulator for standardized clinical training
          </p>
        </div>

        {/* Metadata bar */}
        <div className="flex flex-wrap gap-8 py-6 border-t border-b border-gray-100 mb-14">
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Role</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">Product, Eval, QA</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Context</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">0 to 1 build, China hospital network</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Outcome</p>
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">30+ hospitals, 500+ clinicians</p>
          </div>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">The Problem</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-4">
            Junior clinicians in China lack access to standardized, repeatable consultation practice.
            Supervised clinical rotations are inconsistent: patient availability varies, feedback quality
            depends entirely on the attending physician, and trainees rarely get to practice rare or
            high-stakes presentations before seeing them on the ward.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed">
            Medical schools needed a system that could simulate realistic patient encounters at scale,
            assess trainee performance objectively, and maintain clinical accuracy without hallucination.
          </p>
        </section>

        {/* Product */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">What We Built</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-4">
            ChatGeneT is a multi-turn AI patient simulation system. A trainee enters a clinical scenario,
            takes a history, examines the simulated patient, and orders investigations, all through
            natural conversation. The system evaluates clinical reasoning in real time and generates a
            structured assessment at the end of each session.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed">
            The core challenge was making the AI behave like a patient, not a doctor. It needed to
            volunteer only what a real patient would volunteer, respond to clinical probe questions
            accurately, and stay in character under adversarial prompting.
          </p>
        </section>

        {/* My Role */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">My Role</h2>
          <div className="space-y-6">
            <div className="pl-5 border-l-2 border-rose-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                Dialogue Taxonomy and SFT Data Protocol
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Defined the end-to-end data protocol for synthetic supervised fine-tuning datasets.
                Built the dialogue taxonomy that classified patient utterances across symptom types,
                affect, and clinical specificity. This taxonomy became the ground-truth framework
                for both training data curation and model evaluation.
              </p>
            </div>

            <div className="pl-5 border-l-2 border-rose-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                Eval Framework and Release Gates
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Built the evaluation framework from scratch. Defined metrics for hallucination rate,
                anthropomorphism score, and clinical accuracy. Established release gates: models did
                not ship until they cleared defined thresholds on each metric across a held-out case set.
                Ran failure mode analysis sessions with the ML team to diagnose regressions before each release.
              </p>
            </div>

            <div className="pl-5 border-l-2 border-rose-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                Annotation and UAT Workflows
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Operationalized the annotation pipeline and user acceptance testing workflows.
                Coordinated with clinical advisors to validate case accuracy and with hospital
                administrators to structure the deployment rollout across sites.
              </p>
            </div>

            <div className="pl-5 border-l-2 border-rose-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                QA and Deployment
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Owned QA across the deployment pipeline. Defined what constituted a production-ready
                session, built the regression suite, and managed the rollout to hospital partners.
              </p>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "30+", label: "hospitals deployed" },
              { value: "500+", label: "junior doctors trained" },
              { value: "0.31%", label: "hallucination rate" },
              { value: "4.5/5", label: "CSAT score" },
            ].map((stat) => (
              <div key={stat.label} className="bg-rose-50 rounded-xl p-5">
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

        {/* Why this is hard */}
        <section className="mb-16 bg-gray-50 rounded-xl p-7">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e] mb-3">
            What made this technically interesting
          </h2>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed mb-3">
            The hardest problem was not making the model medically accurate. It was making the model
            behave like a patient rather than a medical expert. LLMs default to being helpful and
            informative. Patients are not. They underreport symptoms, use lay terminology, and give
            incomplete histories.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
            The 0.31% hallucination rate reflects how tightly we constrained the output distribution.
            Every clinical fact in a session had to be traceable to the case specification. The eval
            framework caught model drift that would otherwise have slipped through to production.
          </p>
        </section>

        {/* Nav */}
        <div className="border-t border-gray-100 pt-10 flex justify-between items-center">
          <span className="font-[family-name:var(--font-libre)] text-sm text-gray-400">Next project</span>
          <Link
            href="/work/valence"
            className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e] hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            Valence
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
