// app/page.tsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, ChevronRight, ShieldCheck, Lock } from "lucide-react";

const BRAND = {
  name: "MailSentinel.ai",
  tagline: "AI-powered email security for all inboxes.",
  phone: "(555) 987-6543",
  email: "support@mailsentinel.ai",
  address: "Portland, OR",
  primary: "#0ea5e9",
  accent: "#22c55e",
};

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.mailsentinel.ai";

const SERVICES = [
  { title: "AI Threat Detection", desc: "Scan incoming emails in real time with AI to block phishing and malware.", icon: ShieldCheck },
  { title: "Quarantine & Alerts", desc: "Automatically quarantine suspicious emails and notify your team instantly.", icon: Lock },
  { title: "Encryption & 2FA", desc: "Protect your inbox with end-to-end encryption and two-factor authentication.", icon: CheckCircle2 },
];

const PRICING = [
  { tier: "Starter", price: "$10/mo", features: ["Up to 3 inboxes", "AI phishing & malware detection", "Basic quarantine & alerts"], plan: "starter" },
  { tier: "Pro", price: "$25/mo", features: ["Up to 50 mailboxes", "Advanced threat detection", "Slack/Email alerts", "Encryption & 2FA"], plan: "pro" },
  { tier: "Business", price: "$299/mo", features: ["Unlimited mailboxes", "Full AI detection suite", "Quarantine + audit trail", "CLI, API & Dashboard"], plan: "business" },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-white">
      {/* Top Bar */}
      <div className="w-full bg-slate-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:opacity-90">
              <Phone className="h-4 w-4" /> {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:opacity-90">
              <Mail className="h-4 w-4" /> {BRAND.email}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 opacity-90">
            <MapPin className="h-4 w-4" /> {BRAND.address}
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/80 border-b border-slate-700">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-extrabold text-2xl" style={{ color: BRAND.primary }}>
            MailSentinel.ai
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white text-gray-300">Features</a>
            <a href="#pricing" className="hover:text-white text-gray-300">Pricing</a>
            <a href="#about" className="hover:text-white text-gray-300">About</a>
            <a href="#testimonials" className="hover:text-white text-gray-300">Reviews</a>
            <a href={`${APP_URL}/login`} className="hover:text-white text-gray-300">Log in</a>
            <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border font-semibold"
               style={{ color: BRAND.primary, borderColor: BRAND.primary }}>
              Sign Up Now <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20" style={{ background: BRAND.primary }} />
          <div className="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20" style={{ background: BRAND.accent }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{BRAND.tagline}</h1>
            <p className="mt-4 text-lg text-gray-300">
              Stop phishing and BEC before it reaches your team. Fast setup, clear controls, and protection that learns from every threat.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={`${APP_URL}/signup`} className="px-6 py-3 rounded-2xl shadow font-semibold text-white" style={{ background: BRAND.primary }}>
                Sign Up Now
              </a>
              <a href="#services" className="px-6 py-3 rounded-2xl border border-slate-500 hover:shadow font-semibold">See features</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="aspect-[4/3] bg-slate-800 border border-slate-700 rounded-3xl shadow p-3">
              <img src="https://picsum.photos/seed/mailsentinel-hero/1200/800" alt="Email security dashboard" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
          <a href={`${APP_URL}/signup`} className="hidden md:inline-flex text-sm font-semibold" style={{ color: BRAND.primary }}>
            Start free trial
          </a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-sm hover:shadow-md">
              <s.icon className="h-6 w-6" style={{ color: BRAND.accent }} />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-300">{s.desc}</p>
              <a href={`${APP_URL}/signup`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: BRAND.primary }}>
                Get started <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Pricing</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <motion.div key={p.tier} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow hover:shadow-md flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{p.tier}</h3>
                <p className="text-3xl font-bold mb-4">{p.price}</p>
                <ul className="space-y-2 flex-1">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4" style={{ color: BRAND.accent }} /> {f}
                    </li>
                  ))}
                </ul>
                <a href={`${APP_URL}/signup?plan=${p.plan}`} className="mt-6 inline-block text-center rounded-2xl px-4 py-2 font-semibold text-white" style={{ background: BRAND.primary }}>
                  Choose {p.tier}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Testimonials / Contact ... (unchanged) */}
      {/* Keep your existing sections here */}
    </div>
  );
}
