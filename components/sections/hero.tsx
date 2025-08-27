"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    const [typedText, setTypedText] = useState("")
    const [showPhone, setShowPhone] = useState(false)
    const roles = ["Software Engineer", "Software tester", "Problem Solver", "Tech Enthusiast", "Web developer"]
    const roleIndex = useRef(0)
    const charIndex = useRef(0)
    const isDeleting = useRef(false)
    const typingSpeed = useRef(100)

    useEffect(() => {
        setMounted(true)

        const typeText = () => {
            const currentRole = roles[roleIndex.current]

            if (isDeleting.current) {
                setTypedText(currentRole.substring(0, charIndex.current - 1))
                charIndex.current -= 1
                typingSpeed.current = 50
            } else {
                setTypedText(currentRole.substring(0, charIndex.current + 1))
                charIndex.current += 1
                typingSpeed.current = 100
            }

            if (!isDeleting.current && charIndex.current === currentRole.length) {
                // Pause at the end of typing
                isDeleting.current = true
                typingSpeed.current = 1500
            } else if (isDeleting.current && charIndex.current === 0) {
                isDeleting.current = false
                roleIndex.current = (roleIndex.current + 1) % roles.length
                typingSpeed.current = 500
            }
        }

        const typingInterval = setInterval(typeText, typingSpeed.current)
        return () => clearInterval(typingInterval)
    }, [])

    const handlePhoneClick = () => {
        setShowPhone(!showPhone)
    }

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative pt-16" id="hero">
            {/* Animated background glow */}
            <div
                className={cn(
                    "absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] opacity-0 transition-opacity duration-1000",
                    mounted && "opacity-40",
                )}
            ></div>

            <div
                className={cn(
                    "text-center space-y-8 max-w-4xl px-4 opacity-0 transform translate-y-8 transition-all duration-1000",
                    mounted && "opacity-100 translate-y-0",
                )}
            >
                <div className="mb-2 text-blue-400 font-medium tracking-wider">WELCOME TO MY PORTFOLIO</div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                        Andrei Raulea
                    </span>
                </h1>
                <div className="h-12">
                    <p className="text-xl md:text-3xl text-gray-300 font-light">
                        I am a <span className="text-blue-400 font-medium">{typedText}</span>
                        <span className="animate-blink">|</span>
                    </p>
                </div>
                <div className="pt-8 flex flex-wrap gap-4 justify-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium px-8 py-6 rounded-full hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 text-lg"
                    >
                        <Link href="#projects">View Projects</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="bg-gray-800/50 text-blue-400 border border-blue-500/30 font-medium px-8 py-6 rounded-full hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 text-lg"
                    >
                        <a href="/files/Andrei_Raulea_CV (5).pdf" download>
                            <span className="mr-2">📄</span> Download CV
                        </a>
                    </Button>
                </div>

                <div className="flex justify-center gap-6 pt-8">
                    <a
                        href="https://github.com/Andrei1811"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/andrei-raulea-53528a255/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <button
                        onClick={handlePhoneClick}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 relative"
                    >
                        {showPhone ? (
                            <span className="text-blue-400 font-medium">+40 758 974 735</span>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Link href="#about" aria-label="Scroll to About section">
                    <ArrowDown className="text-blue-400 h-8 w-8" />
                </Link>
            </div>
        </section>
    )
}