"use client";

const projects = [
  {
    title: "Claude AI Debugging Agent",
    tag: "AI Tool",
    tagColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    description:
      "Built an AI agent using Claude that fetches Jira ticket details, scans the codebase, and surfaces relevant files with suggested fixes — significantly reducing debug time for production issues.",
    tech: ["Claude AI", "Atlassian MCP", "TypeScript", "Jira API"],
    highlight: "Used at Whatfix in production",
    icon: "🤖",
  },
  {
    title: "Login Page Performance Optimization",
    tag: "Performance",
    tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
    description:
      "Identified and fixed a critical performance issue where 77 scripts were blocking the login form. Deferred 59 unnecessary scripts, achieving a 5x improvement in First Contentful Paint.",
    tech: ["Chrome DevTools MCP", "JavaScript", "Performance Analysis"],
    highlight: "FCP: 12–13s → 2.5s",
    icon: "⚡",
    metrics: [
      { label: "FCP Improvement", value: "~5x" },
      { label: "JS Transfer", value: "−74%" },
      { label: "Scripts Deferred", value: "59" },
    ],
  },
  {
    title: "HabitTrace",
    tag: "App Store",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    description:
      "Designed, developed, and deployed a productivity mobile app available on the iOS App Store. Helps users track and count daily routines, enhancing self-discipline and habit-building.",
    tech: ["React Native", "iOS", "App Store"],
    highlight: "Live on iOS App Store",
    icon: "📱",
  },
  {
    title: "SQL Query Generator (Hackathon)",
    tag: "Hackathon",
    tagColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    description:
      "Built a React-based frontend tool that generates SQL queries from natural language input using AI. Won 2nd place in BeepKart's internal hackathon.",
    tech: ["React.js", "AI/LLM", "SQL"],
    highlight: "🏆 2nd Place",
    icon: "🏆",
  },
  {
    title: "Cricket Finance App",
    tag: "In Development",
    tagColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    description:
      "Mobile app to manage team finances, track member contributions, and streamline fee collection for local cricket teams.",
    tech: ["React Native", "TypeScript"],
    highlight: "Coming Soon",
    icon: "🏏",
  },
  {
    title: "AI-Powered Bike Consultant Chatbot",
    tag: "BeepKart",
    tagColor: "bg-slate-500/20 text-slate-400 border-slate-500/30",
    description:
      "Built the frontend for an AI-powered bike consultant chatbot with real-time WebSocket communication for live user interaction at BeepKart.",
    tech: ["React.js", "WebSocket", "AI Integration"],
    highlight: "Real-time WebSocket",
    icon: "💬",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">Work</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects & Highlights</h2>
        <div className="w-12 h-0.5 bg-orange-500 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 hover:bg-white/8 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{project.icon}</span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${project.tagColor}`}>
                {project.tag}
              </span>
            </div>

            <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

            {project.metrics && (
              <div className="grid grid-cols-3 gap-2 mb-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-2 text-center">
                    <div className="text-orange-400 font-bold text-sm">{m.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                  {t}
                </span>
              ))}
            </div>

            <div className="text-xs font-semibold text-orange-500 mt-auto">{project.highlight}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
