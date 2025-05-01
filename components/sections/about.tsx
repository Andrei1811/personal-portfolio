"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Code, Briefcase, GraduationCap, MapPin } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [mounted, setMounted] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickFacts = [
    {
      icon: <Code className="h-5 w-5 text-blue-400" />,
      title: "Software Engineer",
      description: "Passionate about clean code and innovative solutions",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-blue-400" />,
      title: "Startup scaler",
      description: "Building intelligent systems for startups and busnisses",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-blue-400" />,
      title: "Continuous Learner",
      description: "Always expanding knowledge and skills",
    },
    {
      icon: <MapPin className="h-5 w-5 text-blue-400" />,
      title: "Romania, Sibiu",
      description: "Based in Romania",
    },
  ]

  return (
    <section id="about" className="py-20 relative scroll-mt-16" ref={ref}>
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div
          className={cn(
            "relative opacity-0 transform -translate-x-8 transition-all duration-1000",
            mounted && inView && "opacity-100 translate-x-0",
          )}
        >
                  <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: '3 / 4' }}>

            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-blue-300/20 rounded-2xl -rotate-6 transform scale-95 animate-pulse"></div>
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800/50"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl group">
              <Image
                src="/images/profile.png"
                alt="Ayush Raj Jha"
                width={400}
                height={400}
                className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "space-y-6 opacity-0 transform translate-x-8 transition-all duration-1000 delay-300",
            mounted && inView && "opacity-100 translate-x-0",
          )}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 shadow-lg hover:border-blue-500/30 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed">
                          With 2+ years of experience as a Test Engineer at ProIT, I've built a strong foundation in software testing, quality assurance, and automation.
                          Proficient in C++, Python, Java, Angular, React and SQL, I've contributed to high-impact projects
                          by improving testing processes and ensuring software reliability.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
                          Driven by curiosity and continuous learning, I stay ahead of emerging technologies to deliver smarter, more efficient solutions. I'm especially passionate about helping startups and businesses scale by building robust, user-focused digital experiences.
            </p>

            <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
              <p className="text-blue-400 italic">
                "I believe that technology should be accessible, intuitive, and impactful. My goal is to create
                solutions that not only solve problems but also enhance user experiences."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{fact.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-200">{fact.title}</h3>
                    <p className="text-sm text-gray-400">{fact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
