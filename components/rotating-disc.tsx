"use client"

import type React from "react"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"

interface RotatingDiscProps {
  src: string
  alt: string
  className?: string
}

export function RotatingDisc({ src, alt, className = "" }: RotatingDiscProps) {
  const discRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const animationRef = useRef<number | null>(null)

  const animateSwing = useCallback((targetAngle: number, initialVelocity: number) => {
    setIsAnimating(true)
    let currentRotation = targetAngle
    let velocity = initialVelocity
    const damping = 0.92
    const stiffness = 0.15

    const animate = () => {
      // Spring physics: F = -kx - cv
      const restAngle = targetAngle
      const displacement = currentRotation - restAngle
      const springForce = -stiffness * displacement
      const dampingForce = -damping * velocity * 0.1

      velocity += springForce + dampingForce
      currentRotation += velocity

      setRotation(currentRotation)

      // Stop when movement is negligible
      if (Math.abs(velocity) > 0.01 || Math.abs(displacement) > 0.1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setRotation(restAngle)
        setIsAnimating(false)
      }
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    animationRef.current = requestAnimationFrame(animate)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!discRef.current || isAnimating) return

      const rect = discRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate target angle from center to mouse
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI)
      const target = angle + 90

      // Rotate towards target using shortest path to avoid big jumps
      setRotation((prev) => {
        const normalizedPrev = ((prev % 360) + 360) % 360
        const normalizedTarget = ((target % 360) + 360) % 360
        let delta = normalizedTarget - normalizedPrev

        if (delta > 180) delta -= 360
        if (delta < -180) delta += 360

        return normalizedPrev + delta * 0.2
      })
    },
    [isAnimating],
  )

  const handleMouseLeave = useCallback(() => {
    const currentAngle = rotation
    animateSwing(currentAngle, 8) // Start with some velocity for swing effect
  }, [rotation, animateSwing])

  return (
    <div
      ref={discRef}
      className={`cursor-pointer select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="will-change-transform"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isAnimating ? "none" : "transform 0.1s ease-out",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={400}
          height={400}
          className="w-full h-auto pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  )
}
