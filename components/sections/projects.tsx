"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function Projects() {
    const [mounted, setMounted] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    const projects = [
        {
            title: "Online store for local business",
            date: "Apr 2025",
            description:
                "A cutting-edge digital storefront built on Next.js, designed to deliver blazing-fast performance, seamless UX, and effortless scalability for premium brands and retailers.",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostCSS", "Git"],
            demoUrl: "https://saculetul-fermecat.vercel.app/",
            codeUrl: "https://github.com/Andrei1811/saculetul-fermecat",
            imageSrc: "/images/saculetul-fermecat.png",
            featured: true,

        },
        {
            title: "Barber shop website for bookings",
            description: "A sophisticated digital showcase blending traditional barbering artistry with modern web elegance. Designed to reflect your shop's unique atmosphere while converting visitors into clients.",
            date: "Mai 2025",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Hooks"],
            demoUrl: "https://mihai-hanea.vercel.app/",
            codeUrl: "https://github.com/Andrei1811/barber-site",
            imageSrc: "/images/barber.png",
            featured: true,
        },
        {
            title: "Professional artist portfolio",
            description: "An immersive digital gallery designed to highlight your unique photographic style, from dramatic portraits to evocative landscapes.",
            date: "Apr 2025",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
            demoUrl: "https://professional-artist-portofolio.vercel.app/",
            codeUrl: "https://github.com/Andrei1811/Professional-artist-portofolio",
            imageSrc: "",
            featured: false,
        },
    ]

    return (
        <section id="projects" className="py-20 relative scroll-mt-16" ref={ref}>
            <SectionHeading title="Projects" subtitle="Some of my recent work" />

            <div className="grid md:grid-cols-2 gap-8">
                {projects
                    .filter((p) => p.featured)
                    .map((project, index) => (
                        <div
                            key={index}
                            className={cn(
                                "opacity-0 transform translate-y-8 transition-all duration-700",
                                mounted && inView && "opacity-100 translate-y-0",
                            )}
                            style={{
                                transitionDelay: mounted && inView ? `${index * 200}ms` : "0ms",
                            }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                date={project.date}
                                techStack={project.techStack}
                                demoUrl={project.demoUrl}
                                codeUrl={project.codeUrl}
                                imageSrc={project.imageSrc}
                                featured={project.featured}
                            />
                        </div>
                    ))}
            </div>

            <h3 className="text-xl font-medium text-gray-300 mt-16 mb-6">All Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={cn(
                            "opacity-0 transform translate-y-8 transition-all duration-700",
                            mounted && inView && "opacity-100 translate-y-0",
                        )}
                        style={{
                            transitionDelay: mounted && inView ? `${(index + 2) * 200}ms` : "0ms",
                        }}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            date={project.date}
                            techStack={project.techStack}
                            demoUrl={project.demoUrl}
                            codeUrl={project.codeUrl}
                            featured={false}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
