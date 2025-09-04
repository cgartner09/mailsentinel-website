"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// If NEXT_PUBLIC_APP_URL is set (e.g. https://app.mailsentinel.ai),
// CTAs will go there. Otherwise they smooth-scroll to #contact.
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "";

export default function Nav() {
  const handleSignup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (APP_URL) {
      e.preventDefault();
      const base = APP_URL.replace(/\/$/, "");
      window.location.href = `${base}/signup`;
      return;
    }
    // Fallback: smooth scroll to contact form
    const el = document.getElementById("contact");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/80 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/logo.svg" alt="MailSentinel.ai" width={40} height={40} />
          <span className="font-extrabold text-2xl text-white">MailSentinel.ai</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-300 hover:text-white">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>

          {/* Primary CTA → Sign Up Now */}
          <a
            href={APP_URL ? `${APP_URL.replace(/\/$/, "")}/signup` : "/#contact"}
            onClick={handleSignup}
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-2 border border-slate-600 hover:shadow font-semibold text-white"
            style={{ borderColor: "#0ea5e9", color: "#0ea5e9" }}
          >
            Sign Up Now <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}

