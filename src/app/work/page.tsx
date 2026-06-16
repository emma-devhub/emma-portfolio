import Image from "next/image";
import Link from "next/link";

// Work Experience
const workExperience = [
  {
    id: 1,
    company: "Commure",
    role: "Product Manager, AI-Powered Enterprise Platforms",
    period: "Oct 2023 – April 2024",
    location: "San Francisco, CA",
    description: "Enterprise AI, Series D Unicorn",
    highlights: [
      {
        title: "AI-to-Billing",
        content:
          "Fine-tuned LLMs on 3 years of historical claims data to auto-generate CPT/ICD codes with medical necessity evidence, facilitating human-in-the-loop review workflow. Scaled to 150+ healthcare organizations, driving 20% revenue increase and 25% reduction in denials.",
      },
      {
        title: "Customer Health Scoring",
        content:
          "Led development of ML-driven customer health scoring system, enabling operations teams to proactively rescue at-risk enterprise accounts. Reduced customer churn by 50% and closed $2M in revenue gaps.",
      },
    ],
    tags: ["LLM Fine-tuning", "Healthcare AI", "Enterprise SaaS"],
    image: "/projects/commure.jpg",
  },
  {
    id: 2,
    company: "JPMorgan Securities",
    role: "Product Manager & AI Strategy, Research Portal",
    period: "Sep 2021 – Sep 2023",
    location: "New York, NY & San Francisco, CA",
    description: "",
    highlights: [
      {
        title: "Audio-to-Signal AI Pipeline",
        content:
          "Launched a new monetizable data stream by leading the build-out of an end-to-end audio-to-signal AI pipeline, improving LLM fine-tuning precision by 30% and driving $5M increase in revenue.",
      },
      {
        title: "Trade Recommendation Engine",
        content:
          "Led data strategy for trade-recommendation engine, defining ground-truth standards and operationalizing labeling workflows across large-scale unstructured client conversations. Increased trading volume by 30% and profit by 45%.",
      },
    ],
    tags: ["NLP", "Trading Systems", "Data Strategy"],
    image: "/projects/jpmorgan.jpg",
  },
  {
    id: 3,
    company: "Société Générale",
    role: "Product Manager, Trading Platform & Algorithms",
    period: "Feb 2019 – July 2021",
    location: "New York, NY",
    description: "",
    highlights: [
      {
        title: "Single-Dealer Platform Growth",
        content:
          "Spearheaded product growth through user research and high-impact feature launches, driving 300% increase in active users, 170% growth in trading flow, and 120% uplift in profitability.",
      },
      {
        title: "ECN/API Integration Expansion",
        content:
          "Led integration expansion through cost-benefit analysis and pre-launch client validation, increasing total sales by 30%.",
      },
    ],
    tags: ["Trading Platforms", "User Research", "API Integration"],
    image: "/projects/socgen.jpg",
  },
];

// AI Projects
const aiProjects = [
  {
    id: 4,
    title: "ChatGeneT",
    subtitle: "AI Patient Simulator for Medical Training",
    period: "May 2025 – Nov 2025",
    description:
      "Developed an AI-driven 'Patient Simulator' Agent deployed across 30+ hospitals, utilizing realistic multi-turn dialogue to standardize training and assessment for junior doctors.",
    highlights: [
      "Defined end-to-end data protocols and dialogue taxonomies for high-quality synthetic SFT datasets",
      "Achieved 0.31% hallucination rate and 0.87 anthropomorphism score through rigorous model optimization",
      "Established release gates and failure mode analysis with ML teams; operationalized annotation and UAT workflows",
      "CSAT of 4.5/5, supporting 500+ junior doctors in standardized onboarding training",
    ],
    tags: ["LLM Fine-tuning", "Healthcare AI", "Data Annotation", "Model Evaluation"],
    image: "/projects/chatgenet.jpg",
  },
  {
    id: 5,
    title: "Decoding the Beige Book",
    subtitle: "ACM ICAIF '25, Oral Presentation",
    period: "Nov 2024 – April 2025",
    description:
      "Developed an end-to-end 'text-to-signal' LLM pipeline utilizing 526 Beige Book documents and over 56,000 topic entries to transform unstructured narratives into real-time economic risk signals.",
    highlights: [
      "Converted complex long-form narratives into topic-aligned time-series features for risk scoring and recession forecasting",
      "Designed topic taxonomy and implemented paragraph-level routing with standardized ground-truth guidelines",
      "Leveraged multi-model approach (GPT/Claude/Gemini/FinBERT/Mistral) with LiRA-style prompting and majority voting",
      "Achieved peak F1 score of 0.89 in recession nowcasting",
    ],
    tags: ["NLP", "Economic Analysis", "Multi-Model", "Prompt Engineering"],
    image: "/projects/beigebook.jpg",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-24">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Page Header */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-6 text-center">
          My Work
        </h1>
        <p className="font-[family-name:var(--font-libre)] text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Building AI-powered products that drive real business impact across healthcare,
          finance, and enterprise platforms.
        </p>

        {/* Work Experience Section */}
        <section className="mb-24">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#1a1a2e] mb-12">
            Work Experience
          </h2>

          <div className="space-y-16">
            {workExperience.map((work, index) => (
              <div
                key={work.id}
                className="grid md:grid-cols-5 gap-8 items-start pb-16 border-b border-gray-100 last:border-b-0"
              >
                {/* Left: Image placeholder */}
                <div className="md:col-span-2 relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center p-4">
                      <div className="text-4xl font-bold text-gray-200 mb-2">
                        {work.company.charAt(0)}
                      </div>
                      <p className="text-xs text-gray-300">{work.image}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-3">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#1a1a2e]">
                      {work.company}
                    </h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                      {work.period}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-1">{work.role}</p>
                  {work.description && (
                    <p className="text-sm text-gray-500 mb-4">{work.description}</p>
                  )}
                  <p className="text-sm text-gray-400 mb-4">{work.location}</p>

                  <div className="space-y-4 mb-4">
                    {work.highlights.map((highlight, idx) => (
                      <div key={idx}>
                        <p className="font-semibold text-[#1a1a2e] text-sm mb-1">
                          {highlight.title}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {highlight.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Projects Section */}
        <section>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#1a1a2e] mb-12">
            AI Projects
          </h2>

          <div className="space-y-16">
            {aiProjects.map((project, index) => (
              <div
                key={project.id}
                className="grid md:grid-cols-5 gap-8 items-start pb-16 border-b border-gray-100 last:border-b-0"
              >
                {/* Left: Image placeholder */}
                <div className="md:col-span-2 relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-blue-200 mb-2">
                        {project.title.split(" ")[0]}
                      </div>
                      <p className="text-xs text-gray-400">{project.image}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-3">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#1a1a2e]">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-4">{project.subtitle}</p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 text-sm leading-relaxed flex items-start"
                      >
                        <span className="text-blue-600 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
