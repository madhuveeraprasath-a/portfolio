"use client";

const skillGroups = [
  {
    title: "Frontend",
    icon: "⚛️",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "React Native", icon: "📱" },
      { name: "TypeScript", icon: "𝗧𝗦" },
      { name: "JavaScript", icon: "𝗝𝗦" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
    ],
  },
  {
    title: "UI Libraries",
    icon: "🎨",
    skills: [
      { name: "Material UI", icon: "🅼" },
      { name: "Ant Design", icon: "🐜" },
      { name: "Bootstrap", icon: "🅱" },
      { name: "Redux", icon: "🔄" },
      { name: "jQuery", icon: "💲" },
    ],
  },
  {
    title: "Backend & Tools",
    icon: "⚙️",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Django REST", icon: "🟢" },
      { name: "WebSocket", icon: "🔌" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Git", icon: "📦" },
      { name: "Angular", icon: "🔺" },
    ],
  },
  {
    title: "AI Tools",
    icon: "🤖",
    skills: [
      { name: "Claude AI", icon: "🤖" },
      { name: "Agent Builder", icon: "⚡" },
      { name: "GitHub Copilot", icon: "🐙" },
      { name: "ChatGPT", icon: "💬" },
      { name: "Google Gemini", icon: "♊" },
      { name: "Chrome MCP", icon: "🔍" },
      { name: "Atlassian MCP", icon: "🔷" },
      { name: "Prompt Eng.", icon: "✍️" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          <div className="w-12 h-0.5 bg-orange-500 mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-semibold text-base">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/8 border border-white/10 px-3 py-1.5 rounded-lg group-hover:border-orange-500/20 transition-colors duration-300"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
