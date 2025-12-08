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
  const rawRotationRef = useRef(0)

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
      if (!discRef.current) return

      // If a swing animation is running, stop it so user control takes over
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
        setIsAnimating(false)
      }

      const rect = discRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate base target angle from center to mouse (-180 to 180)
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI)
      const targetBase = angle + 90

      setRotation((prev) => {
        const prevRaw = rawRotationRef.current || prev
        const prevMod = ((prevRaw % 360) + 360) % 360

        // Unwrap target so motion is continuous rather than flipping at 180°
        let delta = targetBase - prevMod
        if (delta > 180) delta -= 360
        if (delta < -180) delta += 360

        // Move a fraction toward the new angle for smooth motion
        const next = prevRaw + delta * 0.35
        rawRotationRef.current = next
        return next
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
