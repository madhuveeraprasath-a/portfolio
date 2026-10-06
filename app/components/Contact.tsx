export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <div className="w-12 h-0.5 bg-orange-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I&apos;m currently open to new opportunities. Whether you have a role, a project, or just want to connect — feel free to reach out!
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "✉", label: "Email", value: "madhuprasath.a@gmail.com", href: "mailto:madhuprasath.a@gmail.com" },
                { icon: "📱", label: "Phone", value: "+91-8668196805", href: "tel:+918668196805" },
                { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/madhuveeraprasath", href: "https://linkedin.com/in/madhuveeraprasath" },
                { icon: "💻", label: "GitHub", value: "github.com/madhuveeraprasath-a", href: "https://github.com/madhuveeraprasath-a" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-orange-500/40 hover:bg-white/8 transition-all duration-200 group"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                    <div className="text-slate-200 text-sm font-medium group-hover:text-orange-400 transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20">
              <span className="text-white font-bold text-xl">MA</span>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Madhuveeraprasath Anguraj</h3>
            <p className="text-orange-400 font-medium text-sm mb-1">Senior Frontend Engineer</p>
            <p className="text-slate-500 text-sm mb-6">Bengaluru, Karnataka, India</p>
            <a
              href="https://linkedin.com/in/madhuveeraprasath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
