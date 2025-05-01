"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import AchievementCard from "@/components/ui/achievement-card"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function Achievements() {
  const [mounted, setMounted] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const achievements = [
    {
      icon: "🏆",
      title: "Smart India Hackathon 2024 – Semifinalist",
      description: "Recognized for innovative problem-solving approach",
    },
    {
      icon: "🥇",
      title: "Machine Learning Specialization – Coursera",
      description: "Completed comprehensive ML curriculum with distinction",
    },
    {
      icon: "💻",
      title: "Top Contributor – GSSoC 2024",
      description: "Recognized for significant open-source contributions",
    },
    {
      icon: "☁️",
      title: "Cleared NPTEL Cloud Computing Exam",
      description: "Demonstrated proficiency in cloud technologies",
    },
  ]

  
}
