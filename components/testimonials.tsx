"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const successStories = [
  {
    id: 1,
    name: "Ananya R.",
    image: "👩‍⚕️",
    testimonial:
      "I finally understood how clinical trials work behind the scenes. Before joining the Clinical Data Management program, I had theoretical knowledge but lacked clarity on how data is actually handled in real studies. The training helped me understand EDC systems, data cleaning, query management, and overall CDM workflows in a very practical way. Step-by-step explanations and real examples gave me confidence and direction to pursue a career in Clinical Data Management.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Rahul S.",
    image: "👨‍💼",
    testimonial:
      "This course helped me find my voice as a medical writer. I always had an interest in medical writing, but I wasn't sure how to write as per industry standards. Through structured training and continuous feedback, I learned how to organize scientific content, maintain scientific accuracy, and write with clarity. The course helped me build confidence in my writing and gave me a clear path to move forward in medical writing.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha K.",
    image: "👩‍⚕️",
    testimonial:
      "I now understand drug safety beyond textbooks. Before this training, pharmacovigilance concepts felt complex and confusing. The program helped me clearly understand adverse event reporting, case processing, and safety documentation. The practical approach made learning easier and more meaningful. I now feel prepared to explore opportunities in drug safety and pharmacovigilance.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Vivek M.",
    image: "👨‍⚕️",
    testimonial:
      "Regulatory concepts finally made sense to me. Regulatory Affairs always seemed overwhelming, but this training broke everything down in a simple and structured manner. I learned about regulatory documentation, submission processes, and compliance requirements in an easy-to-follow way. The course gave me clarity and confidence to pursue opportunities in regulatory affairs.",
    rating: 4.9,
  },
]

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const positionRef = useRef(0)
  const isPausedRef = useRef(false)
  const isInteractingRef = useRef(false)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const cardWidthRef = useRef(0)
  const gapRef = useRef(24)
  const scrollSpeedRef = useRef(0.8) // pixels per frame - smooth train-like speed
  const prefersReducedMotionRef = useRef(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotionRef.current = mediaQuery.matches
    
    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Calculate card width
  const calculateCardWidth = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      // On mobile: full width minus padding, on desktop: 384px (w-96)
      const isMobile = containerWidth < 768
      cardWidthRef.current = isMobile ? containerWidth - 32 : 384
    }
  }, [])

  // Smooth infinite scroll animation
  useEffect(() => {
    if (!trackRef.current || prefersReducedMotionRef.current) return

    calculateCardWidth()
    
    let cardWidth = cardWidthRef.current
    let gap = gapRef.current
    let cardWidthWithGap = cardWidth + gap
    let totalOriginalWidth = successStories.length * cardWidthWithGap
    let resetPoint = totalOriginalWidth // Reset after one full set

    const animate = () => {
      if (!trackRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      // Recalculate dimensions if needed
      const currentCardWidth = cardWidthRef.current
      if (currentCardWidth !== cardWidth) {
        cardWidth = currentCardWidth
        gap = gapRef.current
        cardWidthWithGap = cardWidth + gap
        totalOriginalWidth = successStories.length * cardWidthWithGap
        resetPoint = totalOriginalWidth
      }

      if (!isPausedRef.current) {
        // Increment position
        positionRef.current += scrollSpeedRef.current

        // Reset position when we've scrolled past one set (seamless loop)
        // Since we have 3 sets, we can reset after the first set
        if (positionRef.current >= resetPoint) {
          positionRef.current -= resetPoint
        }
      }

      // Apply transform (always, even when paused, to maintain position)
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Handle window resize
    const handleResize = () => {
      calculateCardWidth()
    }

    window.addEventListener('resize', handleResize)
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [calculateCardWidth])

  // Pause on interaction
  const pauseAutoScroll = useCallback(() => {
    isPausedRef.current = true
    isInteractingRef.current = true
    
    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
  }, [])

  // Resume after interaction ends
  const resumeAutoScroll = useCallback(() => {
    isInteractingRef.current = false
    
    // Clear any existing timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
    
    // Resume after 1.5 seconds
    resumeTimeoutRef.current = setTimeout(() => {
      if (!isInteractingRef.current) {
        isPausedRef.current = false
      }
    }, 1500)
  }, [])

  // Manual navigation functions
  const scrollLeft = useCallback(() => {
    pauseAutoScroll()
    const cardWidth = cardWidthRef.current
    const gap = gapRef.current
    const cardWidthWithGap = cardWidth + gap
    
    positionRef.current -= cardWidthWithGap
    
    // Handle seamless loop reset
    const totalOriginalWidth = successStories.length * cardWidthWithGap
    if (positionRef.current < 0) {
      positionRef.current += totalOriginalWidth
    }
    
    if (trackRef.current) {
      // Add smooth transition for manual navigation
      trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
      
      // Remove transition after animation completes
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = prefersReducedMotionRef.current ? 'transform 0.3s ease-out' : 'none'
        }
      }, 500)
    }
    
    resumeAutoScroll()
  }, [pauseAutoScroll, resumeAutoScroll])

  const scrollRight = useCallback(() => {
    pauseAutoScroll()
    const cardWidth = cardWidthRef.current
    const gap = gapRef.current
    const cardWidthWithGap = cardWidth + gap
    
    positionRef.current += cardWidthWithGap
    
    // Handle seamless loop reset
    const totalOriginalWidth = successStories.length * cardWidthWithGap
    if (positionRef.current >= totalOriginalWidth) {
      positionRef.current -= totalOriginalWidth
    }
    
    if (trackRef.current) {
      // Add smooth transition for manual navigation
      trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
      
      // Remove transition after animation completes
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = prefersReducedMotionRef.current ? 'transform 0.3s ease-out' : 'none'
        }
      }, 500)
    }
    
    resumeAutoScroll()
  }, [pauseAutoScroll, resumeAutoScroll])

  // Handle manual scroll/drag
  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return

    let startX = 0
    let scrollLeft = 0
    let isDragging = false
    let lastTouchX = 0

    const handleMouseDown = (e: MouseEvent) => {
      pauseAutoScroll()
      isDragging = true
      startX = e.pageX - (containerRef.current?.offsetLeft || 0)
      scrollLeft = positionRef.current
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - (containerRef.current?.offsetLeft || 0)
      const walk = (x - startX) * 1.5 // Scroll speed multiplier
      positionRef.current = scrollLeft - walk
      
      // Handle seamless loop reset
      const cardWidth = cardWidthRef.current
      const gap = gapRef.current
      const cardWidthWithGap = cardWidth + gap
      const totalOriginalWidth = successStories.length * cardWidthWithGap
      
      if (positionRef.current >= totalOriginalWidth) {
        positionRef.current -= totalOriginalWidth
      } else if (positionRef.current < 0) {
        positionRef.current += totalOriginalWidth
      }
      
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
      }
    }

    const handleMouseUp = () => {
      isDragging = false
      resumeAutoScroll()
    }

    const handleMouseLeave = () => {
      isDragging = false
      resumeAutoScroll()
    }

    const handleTouchStart = (e: TouchEvent) => {
      pauseAutoScroll()
      lastTouchX = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX
      const diff = lastTouchX - touchX
      positionRef.current += diff * 1.5
      lastTouchX = touchX
      
      // Handle seamless loop reset
      const cardWidth = cardWidthRef.current
      const gap = gapRef.current
      const cardWidthWithGap = cardWidth + gap
      const totalOriginalWidth = successStories.length * cardWidthWithGap
      
      if (positionRef.current >= totalOriginalWidth) {
        positionRef.current -= totalOriginalWidth
      } else if (positionRef.current < 0) {
        positionRef.current += totalOriginalWidth
      }
      
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
      }
    }

    const handleTouchEnd = () => {
      resumeAutoScroll()
    }

    const handleWheel = (e: WheelEvent) => {
      pauseAutoScroll()
      positionRef.current += e.deltaY * 0.5
      
      // Handle seamless loop reset
      const cardWidth = cardWidthRef.current
      const gap = gapRef.current
      const cardWidthWithGap = cardWidth + gap
      const totalOriginalWidth = successStories.length * cardWidthWithGap
      
      if (positionRef.current >= totalOriginalWidth) {
        positionRef.current -= totalOriginalWidth
      } else if (positionRef.current < 0) {
        positionRef.current += totalOriginalWidth
      }
      
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
      }
      
      resumeAutoScroll()
    }

    const container = containerRef.current
    const track = trackRef.current

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('wheel', handleWheel, { passive: false })

    // Pause on hover
    const handleMouseEnter = () => {
      pauseAutoScroll()
    }

    const handleMouseLeaveContainer = () => {
      if (!isDragging) {
        resumeAutoScroll()
      }
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeaveContainer)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeaveContainer)
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [pauseAutoScroll, resumeAutoScroll])

  // Duplicate items for seamless infinite loop (3 sets for safety)
  const duplicatedStories = [...successStories, ...successStories, ...successStories]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8fafc] to-[#ffffff] relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#2ec4cc] to-transparent opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0b3c5d] to-transparent opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-[#2ec4cc]/10 to-[#0b3c5d]/10 rounded-full blur-3xl -z-10 animate-float-up"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] bg-clip-text text-transparent mb-3">
            Success Stories
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Real stories from our students who've gained clarity, confidence, and direction in their careers
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {/* Navigation Arrows - Desktop Only */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#2ec4cc]/30 text-[#0b3c5d] hover:bg-white hover:border-[#2ec4cc] hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-[#2ec4cc]" />
          </button>
          
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border-2 border-[#2ec4cc]/30 text-[#0b3c5d] hover:bg-white hover:border-[#2ec4cc] hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-[#2ec4cc]" />
          </button>

          {/* Testimonial Track */}
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{
              transform: 'translateX(0)',
              transition: prefersReducedMotionRef.current ? 'transform 0.3s ease-out' : 'none',
            }}
          >
            {duplicatedStories.map((story, index) => {
              const originalIndex = index % successStories.length
              return (
                <div
                  key={`story-${index}`}
                  className="flex-shrink-0 w-full md:w-96 group"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    perspective: '1000px',
                  }}
                >
                  <div className="h-full relative group">
                    {/* Premium gradient border background */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0b3c5d] via-[#2ec4cc] to-[#0b3c5d] rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Card content */}
                    <div className="relative h-full bg-gradient-to-br from-white via-[#f8fafc] to-[#f0f4f8] rounded-2xl p-8 transition-all duration-300 border shadow-lg border-[#e2e8f0] hover:shadow-2xl hover:border-[#2ec4cc] hover:-translate-y-1">
                      {/* Subtle inner gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2ec4cc]/5 via-transparent to-[#0b3c5d]/5 pointer-events-none"></div>

                      <div className="relative z-10">
                        {/* Star Rating */}
                        <div className="flex gap-1.5 mb-5">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => {
                              const starValue = story.rating - i
                              const isFullStar = starValue >= 1
                              const isPartialStar = starValue > 0 && starValue < 1
                              
                              return (
                                <div key={i} className="relative inline-block">
                                  {/* Empty star background */}
                                  <Star
                                    size={20}
                                    strokeWidth={2}
                                    className="text-[#cbd5e1] group-hover:scale-125 transition-transform duration-300"
                                  />
                                  {/* Filled star overlay */}
                                  {isFullStar ? (
                                    <Star
                                      size={20}
                                      strokeWidth={2}
                                      className="absolute top-0 left-0 fill-[#2ec4cc] text-[#2ec4cc] stroke-[#2ec4cc] group-hover:scale-125 transition-transform duration-300"
                                    />
                                  ) : isPartialStar ? (
                                    <div
                                      className="absolute top-0 left-0 overflow-hidden"
                                      style={{ width: `${starValue * 100}%` }}
                                    >
                                      <Star
                                        size={20}
                                        strokeWidth={2}
                                        className="fill-[#2ec4cc] text-[#2ec4cc] stroke-[#2ec4cc] group-hover:scale-125 transition-transform duration-300"
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              )
                            })}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-[#1e293b] text-base leading-relaxed mb-6 font-medium">
                          "{story.testimonial}"
                        </p>

                        {/* Gradient Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-[#2ec4cc]/50 to-transparent mb-6"></div>

                        {/* Student Info */}
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b3c5d] to-[#2ec4cc] flex items-center justify-center text-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                            {story.image}
                          </div>
                          <div>
                            <p className="font-semibold text-[#0b3c5d]">{story.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {[
            { stat: "1000+", label: "Graduates Placed" },
            { stat: "100+", label: "Hiring Partners" },
            { stat: "99%", label: "Placement Rate" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group text-center p-5 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0b3c5d]/20 via-[#2ec4cc]/20 to-[#0b3c5d]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="relative bg-gradient-to-br from-white to-[#f8fafc] border border-[#e2e8f0] rounded-lg p-5 group-hover:border-[#2ec4cc]/50">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#0b3c5d] to-[#2ec4cc] bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  {item.stat}
                </p>
                <p className="text-sm text-[#64748b] font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
