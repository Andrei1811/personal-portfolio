"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor, Computer Science",
      image: "/placeholder.svg?height=80&width=80",
      text: "Ayush is an exceptional student with remarkable problem-solving abilities. His dedication to learning and applying new technologies sets him apart from his peers.",
    },
    {
      name: "Priya Sharma",
      role: "Senior Developer, TechInnovate",
      image: "/placeholder.svg?height=80&width=80",
      text: "Working with Ayush was a pleasure. His attention to detail and ability to quickly grasp complex concepts made him an invaluable team member during his internship.",
    },
    {
      name: "Vikram Singh",
      role: "Project Lead, CodeCraft",
      image: "/placeholder.svg?height=80&width=80",
      text: "Ayush demonstrated exceptional skills in both frontend and backend development. His contributions to our projects were significant and showed his versatility as a developer.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 relative scroll-mt-16" ref={ref}>
      <SectionHeading title="Testimonials" subtitle="What people say about me" />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-1000",
              mounted && inView && "opacity-100 translate-y-0",
            )}
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 md:p-10 relative">
              <Quote className="absolute top-6 left-6 text-teal-500/20 h-20 w-20" />

              <div className="relative z-10">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-teal-500 mb-4">
                    <img
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-teal-400">{testimonials[activeIndex].name}</h3>
                    <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg text-center italic leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-teal-400 scale-125" : "bg-gray-600 hover:bg-gray-500",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
