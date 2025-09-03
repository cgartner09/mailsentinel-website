export const metadata = {
  title: "MailSentinel.ai — AI Email Security",
  description: "AI-powered email threat protection for SMBs.",
  openGraph: {
    title: "MailSentinel.ai",
    description: "Block phishing & business email compromise with AI.",
    images: ["/og-image.png"]
  },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
