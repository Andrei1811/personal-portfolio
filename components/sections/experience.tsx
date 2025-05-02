"use client"

import { useState, useEffect } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function Experience() {
    const [mounted, setMounted] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    const experiences = [
        {
            title: "Digital Launch & Growth for Startups",
            location: "Romania, Sibiu",
            company: "Freelancing",
            period: "Apr 2025 - Present",
            description:
                "I help businesses grow online by developing modern, scalable web solutions and custom digital platforms tailored to their needs.",
            skills: [
                "Full-Stack Web Development",
                "API Integration & Development",
                "Responsive UI/UX Design",
                "Database Management",
                "Version Control",
            ],
        },
        {
            title: "Software Testing Engineer at ProIT - Partner of Audi",
            company: "ProIT",
            location: "Romania, Sibiu",
            period: "Sep 2023 - Mar 2025",
            description:
                "Department of Vehicle Motion Management. Responsibilities include testing software modules for autonomous driving.",
            skills: ["Jenkins", "Matlab", "Jira", "CANoe/CANalyzer", "Python"],
        },
        {
            title: "Computer Engineering in Industrial Applications Master's degree",
            company: "Lucian Blaga University",
            location: "Sibiu",
            period: "Jun 2024 - Present",
            description:
                "Developed responsive web applications using React and Node.js. Implemented RESTful APIs and contributed to the improvement of the user interface and experience.",
            skills: ["React", "Node.js", "REST API", "Git", "Next.js"],
        },
        {
            title: "Computer Science and Electrical Engineering College",
            company: "Transilvania University",
            location: "Brasov",
            period: "November 2020 - Apr 2024",
            description:
                "I am a Computer Science and Electrical Engineering graduate with a strong foundation in software development, systems design, and problem-solving.",
            skills: ["C++", "Python", "Java", "JavaScript", "Typescript"],
        },
    ]

    return (
        <section id="experience" className="py-20 relative scroll-mt-16" ref={ref}>
            <SectionHeading title="Experience" subtitle="My professional journey" />

            <div className="relative">
                {/* Timeline line - hidden on mobile, visible on md and up */}
                <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform translate-x-px"></div>

                {/* Mobile timeline line - visible only on mobile */}
                <div className="absolute md:hidden left-4 top-0 bottom-0 w-0.5 bg-gray-800"></div>

                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative mb-12 opacity-0 transition-all duration-1000",
                            mounted && inView && "opacity-100",
                            // Mobile: always full width with left padding
                            "pl-12 w-full",
                            // Desktop: alternating sides
                            index % 2 === 0
                                ? "md:pr-12 md:pl-0 md:text-right md:ml-0 md:mr-auto md:max-w-[calc(50%-32px)]"
                                : "md:pl-12 md:ml-auto md:mr-0 md:max-w-[calc(50%-32px)]",
                        )}
                        style={{
                            transitionDelay: mounted && inView ? `${index * 300}ms` : "0ms",
                        }}
                    >
                        {/* Timeline dot - positioned differently on mobile vs desktop */}
                        <div
                            className={cn(
                                "absolute top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900 z-10",
                                // Mobile: always on the left
                                "left-4 -translate-x-1/2",
                                // Desktop: alternating sides
                                index % 2 === 0 ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2",
                            )}
                        ></div>

                        <div
                            className={cn(
                                "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]",
                                mounted && inView && "transform translate-y-0",
                                "transform translate-y-4",
                                // Desktop animations only
                                mounted && inView && index % 2 === 0
                                    ? "md:transform md:translate-x-4"
                                    : mounted && inView
                                        ? "md:transform md:-translate-x-4"
                                        : "",
                            )}
                        >
                            <div className="flex flex-col text-left md:text-left">
                                <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                                <div className="flex items-center gap-2 text-gray-400 mt-1 mb-3">
                                    <Briefcase className="h-4 w-4 flex-shrink-0" />
                                    <span className="line-clamp-1">{exp.company}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-sm text-gray-400 mb-4">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4 flex-shrink-0" />
                                        <span>{exp.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4 flex-shrink-0" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {exp.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="text-xs bg-gray-800 text-blue-400 px-2 py-1 rounded-full border border-gray-700 mb-1"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
