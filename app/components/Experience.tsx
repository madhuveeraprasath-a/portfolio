"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "Whatfix",
    role: "Software Engineer — E4",
    period: "Jul 2025 – Present",
    location: "Bengaluru",
    tag: "Current",
    tagColor: "bg-green-500/20 text-green-400 border-green-500/30",
    bullets: [
      "Built AI Popup and AI Video features for the Guidance pod, enabling AI-assisted in-app guidance experiences",
      "Led login page performance optimization — reduced FCP from 12–13s → ~2.5s (~5x faster); JS transfer cut from 23.4 MB → 6.1 MB (−74%)",
      "Built a Claude AI debugging agent — fetches Jira ticket details, scans codebase, and surfaces relevant files with suggested changes",
      "Used Chrome DevTools MCP for performance profiling; integrated Atlassian MCP into Claude agent for automated Jira context fetching",
      "Driving GWT → React migration — moving legacy blocker features to modern React architecture",
    ],
  },
  {
    company: "BeepKart",
    role: "Software Development Engineer 2",
    period: "Jan 2023 – Jun 2025",
    location: "Bengaluru",
    tag: "2.5 yrs",
    tagColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    bullets: [
      "Migrated entire website from PHP to Next.js — achieved ~10x faster page loads, reducing time-to-visible-UI from 5–7s to under 1s",
      "Built B2B mobile app from scratch using React Native, serving 50+ business users",
      "Designed and built custom CMS portal managing 100+ pages for dynamic blogs and SEO-optimized programmatic content",
      "Developed AI-powered bike consultant chatbot frontend with real-time WebSocket communication",
      "Won 2nd place in internal hackathon — built React tool generating SQL queries from natural language using AI",
      "Mentored 2 engineering interns through code reviews and technical guidance",
    ],
  },
  {
    company: "Relevel by Unacademy",
    role: "Software Engineer",
    period: "Jan 2021 – Jan 2023",
    location: "Bengaluru",
    tag: "2 yrs",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    bullets: [
      "Built first version of Relevel Course platform in under 8 hours — recognized by Unacademy CEO Gaurav Munjal",
      "Migrated entire frontend from Angular → React in 3 weeks while maintaining 2,000+ daily concurrent test takers with zero downtime",
      "Built async interview feature that saved 120 person-hours/month and eliminated third-party tool dependency",
      "Shipped full SaaS course platform in under 20 days — scheduling, video experience, payment integration",
      "Contributed to 80% of pages on the Relevel platform",
    ],
  },
  {
    company: "TapChief",
    role: "Software Engineer",
    period: "Nov 2019 – Dec 2020",
    location: "Bengaluru",
    tag: "Acquired by Unacademy",
    tagColor: "bg-slate-500/20 text-slate-400 border-slate-500/30",
    bullets: [
      "Built and owned full templatization layer — ensured 100% responsiveness across the entire application",
      "Built reusable UI component library in Angular across 4 apps: Web, Workspace, Business Home, and Agency",
    ],
  },
  {
    company: "Intrick Consulting",
    role: "Junior Software Engineer",
    period: "Jun 2019 – Nov 2019",
    location: "Bengaluru",
    tag: "Acquired by TapChief",
    tagColor: "bg-slate-500/20 text-slate-400 border-slate-500/30",
    bullets: [
      "Built responsive HTML/CSS templates using Bootstrap; created REST APIs using Python and Django REST Framework",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            entry.target.classList.remove("section-hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 max-w-6xl mx-auto px-6">
      <div className="reveal section-hidden mb-16">
        <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">Career</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        <div className="w-12 h-0.5 bg-orange-500 mt-4" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div key={i} className="reveal section-hidden relative sm:pl-20">
              {/* Dot */}
              <div className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-orange-500 border-2 border-orange-500/30 shadow-lg shadow-orange-500/30 -translate-x-1/2 hidden sm:block" />

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-white font-bold text-lg">{exp.company}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${exp.tagColor}`}>
                        {exp.tag}
                      </span>
                    </div>
                    <p className="text-orange-400 font-medium text-sm">{exp.role}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
                  </div>
                  <span className="text-slate-400 text-sm font-medium whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-orange-500 mt-1 flex-shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
