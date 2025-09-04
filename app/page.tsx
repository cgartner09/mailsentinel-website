"use client";

import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {
  Phone, Mail, MapPin, CheckCircle2,
  ShieldCheck, Lock, Bell, ChevronRight,
} from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "";

const BRAND = {
  name: "MailSentinel.ai",
  tagline: "AI-powered email security for all inboxes.",
  phone: "(555) 987-6543",
  email: "support@mailsentinel.ai",
  address: "Portland, OR",
  primary: "#0ea5e9",
  accent: "#22c55e",
};

const FEATURES = [
  { title: "AI Threat Detection", desc: "Block phishing, malware, spoofing & anomalies in real-time.", icon: ShieldCheck },
  { title: "Quarantine & Review", desc: "Auto-quarantine with audit trail & one-click release.", icon: CheckCircle2 },
  { title: "Live Inbox Monitoring", desc: "Gmail & Outlook integrations with least-privilege scopes.", icon: Bell },
  { title: "Encryption & 2FA", desc: "Admin dashboard secured with encryption and two-factor auth.", icon: Lock },
];

const PRICING = [
  { name: "Starter",  price: "$10/mo",  features: ["Up to 3 inboxes", "AI phishing & malware detection", "Basic quarantine & alerts"] },
  { name: "Pro",      price: "$25/mo", features: ["Up to 50 mailboxes", "Advanced AI + anomaly detection", "Slack & Email alerts", "API access"] },
  { name: "Business", price: "$299/mo", features: ["Up to 300 mailboxes", "All Pro features", "SAML SSO, RBAC", "Priority support"] },
];

export default function Page() {
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goSignup = (plan?: string) => {
    if (APP_URL) {
      const base = APP_URL.replace(/\/$/, "");
      const url = new URL(`${base}/signup`);
      if (plan) url.searchParams.set("plan", plan.toLowerCase());
      window.location.href = url.toString();
      return;
    }
    smoothScroll("contact");
  };

  return (
    <div className="min-h-screen w-full bg-slate-900 text-white">
      <Nav />

      {/* Success banner */}
      {typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).get("sent") === "1" && (
          <div className="bg-green-600/20 border border-green-700 text-green-200 text-sm px-4 py-3 text-center">
            Thanks—your request was sent! We’ll reach out shortly.
          </div>
        )}

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
              Stop phishing and business email compromise before it reaches your team. Fast setup, transparent controls, and protection that learns from every threat.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={APP_URL ? `${APP_URL.replace(/\/$/, "")}/signup` : "/#contact"}
                onClick={(e) => { e.preventDefault(); goSignup(); }}
                className="px-6 py-3 rounded-2xl shadow font-semibold text-white"
                style={{ background: BRAND.primary }}
              >
                Sign Up Now
              </a>
              <a
                href="/#features"
                onClick={(e) => { e.preventDefault(); smoothScroll("features"); }}
                className="px-6 py-3 rounded-2xl border border-slate-600 hover:shadow font-semibold"
              >
                See features
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-gray-300">
              <div className="flex -space-x-2">
                <img src="https://picsum.photos/100?random=1" className="h-8 w-8 rounded-full border-2 border-white" alt="customer" />
                <img src="https://picsum.photos/100?random=2" className="h-8 w-8 rounded-full border-2 border-white" alt="customer" />
                <img src="https://picsum.photos/100?random=3" className="h-8 w-8 rounded-full border-2 border-white" alt="customer" />
              </div>
              <span>Protecting 5,000+ mailboxes</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="aspect-[4/3] bg-slate-800 border border-slate-700 rounded-3xl shadow p-3">
              <img src="https://picsum.photos/1200/800?random=10" alt="Email security dashboard" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">What you get</h2>
          <a
            href={APP_URL ? `${APP_URL.replace(/\/$/, "")}/signup` : "/#contact"}
            onClick={(e) => { e.preventDefault(); goSignup(); }}
            className="hidden md:inline-flex text-sm font-semibold"
            style={{ color: BRAND.primary }}
          >
            Ready to start? Sign Up Now
          </a>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-sm hover:shadow-md">
              <f.icon className="h-6 w-6" style={{ color: BRAND.accent }} />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-300">{f.desc}</p>
              <a
                href={APP_URL ? `${APP_URL.replace(/\/$/, "")}/signup` : "/#contact"}
                onClick={(e) => { e.preventDefault(); goSignup(); }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: BRAND.primary }}
              >
                Learn more <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Simple, transparent pricing</h2>
          <p className="mt-2 text-center text-gray-300">14-day free trial on all plans. Cancel anytime.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-3xl border ${i===1?'border-slate-400':'border-slate-700'} bg-slate-900 p-6 shadow flex flex-col`}>
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-3xl font-bold mb-4">{p.price}</p>
                <ul className="space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="h-4 w-4" style={{ color: BRAND.accent }} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL ? `${APP_URL.replace(/\/$/, "")}/signup` : "/#contact"}
                  onClick={(e) => { e.preventDefault(); goSignup(p.name); }}
                  className="mt-6 inline-block text-center rounded-2xl px-4 py-2 font-semibold text-white"
                  style={{ background: BRAND.primary }}
                >
                  Sign Up Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-slate-800 border border-slate-700 rounded-3xl shadow p-3 order-last md:order-first flex items-center justify-center">
            {/* Permanent switch to brand logo */}
            <img src="/brand/logo.svg" alt="MailSentinel Logo" className="h-40 w-auto" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">About {BRAND.name}</h2>
            <p className="mt-4 text-gray-300">
              {BRAND.name} helps SMBs block phishing, malware, and impersonation with AI. Deploy in minutes, keep control with clear quarantine workflows, and meet security best practices without an enterprise price tag.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" style={{ color: BRAND.accent }} />Gmail & Outlook ready</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" style={{ color: BRAND.accent }} />Real-time AI detection</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" style={{ color: BRAND.accent }} />Quarantine + audit trail</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" style={{ color: BRAND.accent }} />Encryption & 2FA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact (unchanged) */}
      <section id="contact" className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get started</h2>
            <p className="mt-3 text-gray-300">Prefer a guided setup? Send us a note and we’ll reach out.</p>
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" />{BRAND.phone}</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" />{BRAND.email}</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{BRAND.address}</div>
            </div>
          </div>

          <form className="bg-slate-800 text-white rounded-3xl p-6 shadow space-y-4" method="POST" action="/api/contact">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Business Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white" placeholder="name@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Company</label>
              <input name="company" required className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-white" placeholder="Your business name" />
            </div>
            <button type="submit" className="w-full rounded-2xl px-4 py-3 font-semibold text-white" style={{ background: BRAND.primary }}>
              Send message
            </button>
            <p className="text-xs text-gray-400">We usually reply within one business day.</p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

