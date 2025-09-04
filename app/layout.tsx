import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mailsentinel.ai"), // update if previewing on vercel.app
  title: {
    default: "MailSentinel.ai — AI-powered email security for all inboxes.",
    template: "%s — MailSentinel.ai",
  },
  description:
    "Stop phishing, malware, and BEC before it hits your team. Fast setup, real-time AI detection, quarantine workflows, and clear audit trails.",
  keywords: [
    "email security",
    "phishing protection",
    "BEC",
    "malware",
    "Gmail security",
    "Outlook security",
    "SMB",
  ],
  authors: [{ name: "MailSentinel.ai", url: "https://mailsentinel.ai" }],
  creator: "MailSentinel.ai",
  publisher: "MailSentinel.ai",
  applicationName: "MailSentinel.ai",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  // 👇 Open Graph (LinkedIn, Facebook, Slack, Teams, etc.)
  openGraph: {
    type: "website",
    url: "https://mailsentinel.ai",
    siteName: "MailSentinel.ai",
    title: "MailSentinel.ai — AI-powered email security for all inboxes.",
    description:
      "Fast setup, real-time AI threat detection, quarantine & audit trail. Built for SMBs.",
    images: [
      {
        url: "/og.png", // 1200×630
        width: 1200,
        height: 630,
        alt: "MailSentinel.ai — AI-powered email security for all inboxes.",
      },
    ],
    locale: "en_US",
  },

  // 👇 X (Twitter) Card
  twitter: {
    card: "summary_large_image",
    title: "MailSentinel.ai — AI-powered email security for all inboxes.",
    description:
      "Stop phishing and BEC before it reaches your team. Real-time AI detection and simple controls.",
    images: ["/og.png"],
    creator: "@MailSentinelAI", // optional: update if you have an X handle
    site: "@MailSentinelAI",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },

  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
