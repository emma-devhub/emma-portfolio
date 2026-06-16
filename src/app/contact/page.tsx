import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Header */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1a1a2e] mb-6 text-center">
          Get in Touch
        </h1>
        <p className="font-[family-name:var(--font-libre)] text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new opportunities, collaborations,
          or just having a chat about product management and technology.
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Email */}
          <Link
            href="mailto:emmayisun@gmail.com"
            className="group p-8 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1a1a2e] mb-2">
              Email Me
            </h3>
            <p className="text-gray-600 text-sm">emmayisun@gmail.com</p>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/emmayisun"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1a1a2e] mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-600 text-sm">Connect with me</p>
          </Link>

          {/* Medium */}
          <Link
            href="https://medium.com/@emmayisun"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1a1a2e] mb-2">
              Medium
            </h3>
            <p className="text-gray-600 text-sm">Read my articles</p>
          </Link>

          {/* Download CV */}
          <Link
            href="/Emma_Sun_Resume.pdf"
            className="group p-8 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1a1a2e] mb-2">
              Download CV
            </h3>
            <p className="text-gray-600 text-sm">Get my resume</p>
          </Link>
        </div>

        {/* Additional Message */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-libre)] text-gray-600 leading-relaxed">
            Whether you want to discuss a potential opportunity, collaborate on a project,
            or simply chat about product management, I&apos;d love to hear from you.
            I typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
