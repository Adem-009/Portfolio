'use client';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full bg-[#131515] border-t border-white/10 py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-emerald-400 transition-colors"
          >
            Portfolio<span className="text-emerald-400">.</span>
          </Link>
          <p className="text-zinc-400 text-sm mt-1">Frontend Developer</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <a
            href="https://github.com/Adem-009"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adem-benyoucef-478645445/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
         
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-zinc-500">
        © 2026 All rights reserved. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
