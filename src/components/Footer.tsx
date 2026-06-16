import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link
              href="https://www.linkedin.com/in/emmayisun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://medium.com/@emmayisun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              Medium
            </Link>
            <Link
              href="mailto:emmayisun@gmail.com"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              emmayisun@gmail.com
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Emma Sun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
