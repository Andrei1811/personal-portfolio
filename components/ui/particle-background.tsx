"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const width = window.innerWidth
        const height = window.innerHeight
        canvas.width = width
        canvas.height = height
        setDimensions({ width, height })

        // Reinitialize particles when resizing
        initParticles()
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles()
      animate()
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions])

  const initParticles = () => {
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 15000), 100)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: "#3b82f6", // Changed from teal to blue
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    particlesRef.current = particles
  }

  const animate = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x < 0 || particle.x > dimensions.width) {
        particle.speedX *= -1
      }

      if (particle.y < 0 || particle.y > dimensions.height) {
        particle.speedY *= -1
      }

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})` // Changed from teal to blue
      ctx.fill()

      // Draw connections
      connectParticles(particle, index, ctx)
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  const connectParticles = (particle: Particle, index: Particle[], ctx: CanvasRenderingContext2D) => {
    for (let i = index + 1; i < particlesRef.current.length; i++) {
      const particle2 = particlesRef.current[i]
      const distance = Math.sqrt(Math.pow(particle.x - particle2.x, 2) + Math.pow(particle.y - particle2.y, 2))

      if (distance < 120) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 120)})` // Changed from teal to blue
        ctx.lineWidth = 0.5
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(particle2.x, particle2.y)
        ctx.stroke()
      }
    }
  }

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40" style={{ pointerEvents: "none" }} />
}
