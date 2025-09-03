"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/80 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand/logo.svg" alt="MailSentinel.ai" width={28} height={28} />
          <span className="font-bold text-lg text-white">MailSentinel.ai</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-300 hover:text-white">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          <a href="#contact"
             className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-slate-600 hover:shadow"
             style={{ color: "var(--brand)", borderColor: "#0ea5e9" }}>
            Book a demo <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
