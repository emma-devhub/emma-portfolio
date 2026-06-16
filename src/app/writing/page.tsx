import Link from "next/link";

// Sample articles data - replace with your actual Medium articles
const articles = [
  {
    id: 1,
    title: "The Art of Product Discovery: A Framework for PMs",
    description:
      "A comprehensive guide to conducting effective product discovery sessions, including techniques for user interviews, problem framing, and solution validation.",
    category: "Product Strategy",
    date: "January 2024",
    readTime: "8 min read",
    mediumUrl: "https://medium.com/@emmayisun",
  },
  {
    id: 2,
    title: "Case Study: How We Increased User Retention by 40%",
    description:
      "A deep dive into the strategies and experiments that helped our team significantly improve user retention, including cohort analysis and feature optimization.",
    category: "Case Study",
    date: "December 2023",
    readTime: "12 min read",
    mediumUrl: "https://medium.com/@emmayisun",
  },
  {
    id: 3,
    title: "The Rise of AI in Product Management",
    description:
      "Exploring how artificial intelligence is transforming the product management landscape, from automated analytics to AI-powered user research tools.",
    category: "Tech Trends",
    date: "November 2023",
    readTime: "6 min read",
    mediumUrl: "https://medium.com/@emmayisun",
  },
  {
    id: 4,
    title: "Building Products for the Next Billion Users",
    description:
      "Insights on designing and building products for emerging markets, focusing on accessibility, localization, and offline-first experiences.",
    category: "Product Strategy",
    date: "October 2023",
    readTime: "10 min read",
    mediumUrl: "https://medium.com/@emmayisun",
  },
  {
    id: 5,
    title: "Product Analysis: What Makes Notion So Sticky?",
    description:
      "A detailed analysis of Notion's product strategy, examining their approach to user engagement, network effects, and the freemium model.",
    category: "Product Analysis",
    date: "September 2023",
    readTime: "15 min read",
    mediumUrl: "https://medium.com/@emmayisun",
  },
];

const categories = ["All", "Product Strategy", "Case Study", "Tech Trends", "Product Analysis"];

export default function WritingPage() {
  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Header */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-6 text-center">
          Writing
        </h1>
        <p className="font-[family-name:var(--font-libre)] text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Thoughts on product management, technology trends, and building great products.
          All articles are published on{" "}
          <Link
            href="https://medium.com/@emmayisun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Medium
          </Link>
          .
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                category === "All"
                  ? "bg-[#1a1a2e] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <article className="p-6 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-400">{article.date}</span>
                  <span className="text-sm text-gray-400">&middot;</span>
                  <span className="text-sm text-gray-400">{article.readTime}</span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#1a1a2e] mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                <p className="font-[family-name:var(--font-libre)] text-gray-600 leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-4 text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                  Read on Medium &rarr;
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA to Medium */}
        <div className="text-center mt-16">
          <Link
            href="https://medium.com/@emmayisun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a1a2e] text-white px-8 py-3 text-sm tracking-widest hover:bg-[#2a2a4e] transition-colors"
          >
            VIEW ALL ON MEDIUM
          </Link>
        </div>
      </div>
    </div>
  );
}
