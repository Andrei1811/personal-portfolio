"use client"

import { useState } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  date: string
  techStack: string[]
  demoUrl?: string
  codeUrl?: string
  imageSrc?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  date,
  techStack,
  demoUrl,
  codeUrl,
  imageSrc,
  featured = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden group transition-all duration-500 h-full hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:-translate-y-2",
        featured ? "relative" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-blue-500/80 text-white text-xs font-bold px-2 py-1 rounded-full">
          Featured
        </div>
      )}

      {imageSrc && (
        <div className="w-full h-56 overflow-hidden relative">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 transition-opacity duration-500",
              isHovered && "opacity-70",
            )}
          ></div>
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={cn(
                "text-xs px-2 py-1 rounded-full transition-all duration-300",
                isHovered
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-gray-800 text-gray-300 border border-transparent",
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={cn("flex gap-4 transition-all duration-500", isHovered ? "opacity-100" : "opacity-60")}>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
              />
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
            >
              <Github size={16} />
              <span>View Code</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
              />
            </a>
          )}
        </div>

        <div
          className={cn(
            "h-1 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-700 transform origin-left mt-4",
            isHovered ? "scale-x-100" : "scale-x-0",
          )}
        ></div>
      </div>
    </div>
  )
}
