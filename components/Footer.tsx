export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-300">
        <div>
          <div className="font-bold text-xl" style={{ color: "#0ea5e9" }}>MailSentinel.ai</div>
          <p className="mt-2 text-gray-400">© {new Date().getFullYear()} MailSentinel.ai. All rights reserved.</p>
        </div>
        <div>
          <div className="font-semibold mb-2 text-white">Quick links</div>
          <ul className="space-y-1">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2 text-white">Support</div>
          <ul className="space-y-1">
            <li>Email: support@mailsentinel.ai</li>
            <li>Docs: Coming soon</li>
            <li>Status: 100% uptime</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
