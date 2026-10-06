export default function About() {
  return (
    <section id="about" className="py-24 bg-white/3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <div className="w-12 h-0.5 bg-orange-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-5">
            <p className="text-slate-300 text-lg leading-relaxed">
              Hey! I&apos;m <span className="text-white font-semibold">Madhuveeraprasath</span>, a Senior Frontend Engineer based in <span className="text-orange-400">Bengaluru, India</span>. I build fast, scalable web and mobile products that users love.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Over the past 5+ years I&apos;ve worked across SaaS, EdTech and B2B startups — from building platforms from scratch to migrating legacy codebases to modern stacks. I care deeply about performance, clean code, and shipping things that actually make a difference.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Outside of work I&apos;m passionate about AI tools and how they can make engineering teams faster. I&apos;ve built a Claude-based debugging agent that I use daily — and I&apos;m always exploring what&apos;s next.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me playing cricket 🏏 or working on side projects like <span className="text-orange-400">HabitTrace</span>, my productivity app on the App Store.
            </p>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🎓", title: "Education", desc: "M.Sc. Computer Science\nPSG College of Arts & Science, 2019" },
              { icon: "📍", title: "Location", desc: "Bengaluru, Karnataka\nIndia" },
              { icon: "💼", title: "Current Role", desc: "Software Engineer — E4\nWhatfix" },
              { icon: "📱", title: "App Store", desc: "HabitTrace\nPublished on iOS App Store" },
              { icon: "🤖", title: "AI Enthusiast", desc: "Building Claude agents\n& MCP integrations" },
              { icon: "🏏", title: "Beyond Code", desc: "Cricket lover\n& side project builder" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
