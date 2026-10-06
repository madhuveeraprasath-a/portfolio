export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 Madhuveeraprasath Anguraj. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/madhuveeraprasath" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-400 text-sm transition-colors">LinkedIn</a>
          <a href="https://github.com/madhuveeraprasath-a" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-400 text-sm transition-colors">GitHub</a>
          <a href="mailto:madhuprasath.a@gmail.com" className="text-slate-500 hover:text-orange-400 text-sm transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
