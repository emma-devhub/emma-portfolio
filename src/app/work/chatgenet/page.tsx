import Link from "next/link";
import Image from "next/image";

const pipelineSteps = [
  { label: "Case\nSpecification", sub: "patient record + scenario" },
  { label: "Multi-turn\nDialogue", sub: "trainee ↔ patient agent" },
  { label: "Clinical\nActions", sub: "questions, orders, DDx" },
  { label: "Eval\nFramework", sub: "taxonomy-grounded scoring" },
  { label: "Score\nReport", sub: "structured feedback" },
  { label: "Release\nGate", sub: "threshold check before deploy" },
];

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
          <p className="font-[family-name:var(--font-libre)] text-xl text-gray-500 leading-relaxed">
            Realistic multi-turn consultations so junior clinicians can practice the hardest
            part of medicine: asking the right questions.
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
            <p className="font-[family-name:var(--font-libre)] text-sm text-[#1a1a2e]">0 to 1, hospital-based clinical training</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 uppercase tracking-widest mb-1">Site</p>
            <a
              href="https://www.getchatgenet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-libre)] text-sm text-blue-600 hover:underline"
            >
              getchatgenet.com
            </a>
          </div>
        </div>

        {/* Product screenshot */}
        <div className="mb-14 rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
          <Image
            src="/projects/chatgenet.png"
            alt="ChatGeneT patient simulation interface — multi-turn dialogue between clinician and AI patient"
            width={720}
            height={784}
            className="w-full h-auto"
          />
          <p className="font-[family-name:var(--font-libre)] text-xs text-gray-400 text-center py-2">
            Live simulation session — Simulated Patient · Case #2471
          </p>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">The Problem</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-4">
            Junior clinicians lack access to standardized, repeatable consultation practice.
            Clinical rotations are inconsistent: patient availability varies, feedback quality
            depends on the attending physician, and trainees rarely encounter rare or
            high-stakes presentations before seeing them for real.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed">
            Clinical training programs needed a system that could simulate realistic patient
            encounters at scale, generate structured training feedback, and maintain
            factual accuracy across every session.
          </p>
        </section>

        {/* Product */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-4">What We Built</h2>
          <p className="font-[family-name:var(--font-libre)] text-base text-gray-600 leading-relaxed mb-6">
            ChatGeneT is a multi-turn AI patient simulation system. A trainee enters a clinical
            scenario, takes a history, examines the simulated patient, and orders investigations,
            all through natural conversation. The system generates structured training feedback
            at the end of each session.
          </p>

          {/* Patient behavior callouts from official site */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "Leads with the chief complaint", sub: "not a tidy symptom list" },
              { label: "Shows emotion and asks questions", sub: "bidirectional conversation" },
              { label: "Can hesitate or decline to answer", sub: "like a real patient" },
              { label: "Stays faithful to the medical record", sub: "on every turn" },
            ].map((b) => (
              <div key={b.label} className="bg-rose-50 rounded-lg p-4">
                <p className="font-[family-name:var(--font-libre)] text-sm font-medium text-[#1a1a2e] mb-1">{b.label}</p>
                <p className="font-[family-name:var(--font-libre)] text-xs text-gray-500">{b.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pipeline Diagram */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Simulation + Eval Pipeline</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-wrap gap-2 items-start">
              {pipelineSteps.map((step, i) => (
                <div key={step.label} className="flex items-start gap-2">
                  <div className="flex flex-col items-center">
                    <div className="border border-rose-200 bg-white rounded-lg px-3 py-2.5 min-w-[90px]">
                      <p className="font-[family-name:var(--font-libre)] text-xs font-semibold text-[#1a1a2e] whitespace-pre-line leading-tight mb-1">
                        {step.label}
                      </p>
                      <p className="font-[family-name:var(--font-libre)] text-[10px] text-gray-400 leading-tight">
                        {step.sub}
                      </p>
                    </div>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <svg className="w-4 h-4 text-rose-200 mt-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                anthropomorphism score, and factual consistency. Established release gates: models
                did not ship until they cleared defined thresholds across a held-out case set.
                Ran failure mode analysis with the ML team before each release.
              </p>
            </div>

            <div className="pl-5 border-l-2 border-rose-200">
              <h3 className="font-[family-name:var(--font-libre)] text-sm font-semibold text-[#1a1a2e] mb-2">
                Annotation, UAT, and Deployment
              </h3>
              <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
                Operationalized the annotation pipeline and user acceptance testing workflows.
                Coordinated with clinical advisors to validate case accuracy and with hospital
                training administrators to structure the deployment rollout.
              </p>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a1a2e] mb-6">Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "30+", label: "hospital deployments" },
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

        {/* Technical insight */}
        <section className="mb-16 bg-gray-50 rounded-xl p-7">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg text-[#1a1a2e] mb-3">
            The core technical problem
          </h2>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed mb-3">
            The hardest problem was not medical factuality. It was patient-role fidelity.
            LLMs default to being helpful and informative. Patients are not. They underreport
            symptoms, use lay terminology, show hesitation, and give incomplete histories.
          </p>
          <p className="font-[family-name:var(--font-libre)] text-sm text-gray-600 leading-relaxed">
            The 0.31% hallucination rate reflects how tightly we constrained the output
            distribution. Every clinical fact in a session had to be traceable to the case
            specification. The anthropomorphism score (0.87) measured how consistently the
            model behaved like a patient rather than a clinical reference.
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
