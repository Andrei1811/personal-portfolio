"use client"

import { useState, useEffect } from "react"
import { Code, Server, Palette, Brain } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
          { name: "JavaScript", level: 80 },
          { name: "TypeScript", level: 90 },
          { name: "Java", level: 80 },
      ],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Technologies / Tools",
      skills: [
          { name: "Version Control: Git & GitHub", level: 90 },
          { name: "CI/CD (GitHub Actions, GitLab CI)", level: 90 },
          { name: "IDE/Editor: VS Code", level: 95 },
          { name: "REST API", level: 95 },
          { name: "Docker", level: 85 },
      ],
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Frameworks",
      skills: [
        { name: "React", level: 85 },
          { name: "Next.js", level: 90 },
          { name: "Vue.js", level: 95 },
          { name: "Node.js (Express/NestJS)", level: 85},
          { name: "FastAPI", level: 90 },
      ],
    },
    {
      icon: <Brain className="h-6 w-6" />,
        title: "Core Competencies",
      skills: [
          { name: "API Design & Integration", level: 90 },
          { name: "Database Management (SQL)", level: 95 },
          { name: "Code Versioning & Collaboration", level: 85 },
          { name: "Automated Testing & Debugging", level: 80},
          { name: "Cloud Services (AWS)", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative scroll-mt-16" ref={ref}>
      <SectionHeading title="Skills" subtitle="Technologies and abilities I've acquired" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-500 opacity-0 transform translate-y-8",
              mounted && inView && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted && inView ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-800/50 rounded-lg text-blue-400">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transform origin-left scale-x-0 transition-transform duration-1000"
                          style={{
                            transform: mounted && inView ? `scaleX(${skill.level / 100})` : "scaleX(0)",
                            transitionDelay: mounted && inView ? `${index * 100 + skillIndex * 200}ms` : "0ms",
                          }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
