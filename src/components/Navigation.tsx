"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "ABOUT" },
    { href: "/work", label: "WORK" },
    { href: "/writing", label: "WRITING" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left - Name/Logo */}
        <Link
          href="/"
          className="text-xl font-[family-name:var(--font-playfair)] text-[#1a1a2e] hover:text-blue-600 transition-colors"
        >
          Emma Sun
        </Link>

        {/* Right - Navigation Links */}
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest transition-colors hover:text-blue-600 ${
                pathname === link.href ? "text-blue-600" : "text-[#1a1a2e]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
