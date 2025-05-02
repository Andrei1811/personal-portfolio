"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function Contact() {
    const [mounted, setMounted] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    const contactInfo = [
        {
            icon: <MapPin className="h-5 w-5 text-blue-400" />,
            label: "Location",
            value: "Romania, Sibiu",
        },
        {
            icon: <Phone className="h-5 w-5 text-blue-400" />,
            label: "Phone",
            value: "+40 758974735",
        },
        {
            icon: <Mail className="h-5 w-5 text-blue-400" />,
            label: "Email",
            value: "andreiraulea.18@yahoo.com",
        },
        {
            icon: <Linkedin className="h-5 w-5 text-blue-400" />,
            label: "LinkedIn",
            value: "linkedin.com/in/andrei-raulea",
            link: "https://www.linkedin.com/in/andrei-raulea-53528a255/",
        },
        {
            icon: <Github className="h-5 w-5 text-blue-400" />,
            label: "GitHub",
            value: "github.com/AndreiRaulea",
            link: "https://github.com/Andrei1811",
        },
    ]

    return (
        <section id="contact" className="py-20 relative scroll-mt-16" ref={ref}>
            <SectionHeading title="Contact Me" subtitle="Let's get in touch" />

            <div className="max-w-3xl mx-auto">
                <div
                    className={cn(
                        "opacity-0 transform translate-y-8 transition-all duration-1000",
                        mounted && inView && "opacity-100 translate-y-0",
                    )}
                >
                    <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 shadow-lg hover:border-blue-500/30 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-gray-200 mb-8 text-center">Contact Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/20 transition-colors duration-300"
                                    style={{
                                        transitionDelay: mounted && inView ? `${index * 100}ms` : "0ms",
                                    }}
                                >
                                    <div className="mt-1 p-2 bg-gray-800/50 rounded-full">{info.icon}</div>
                                    <div>
                                        <h4 className="text-sm text-gray-400 mb-1">{info.label}</h4>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-300 font-medium">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-400">
                                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                                creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Andrei Raulea. All rights reserved.</p>
            </div>
        </section>
    )
}
