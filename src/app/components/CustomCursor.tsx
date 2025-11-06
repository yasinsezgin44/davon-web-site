"use client";

import { useEffect, useRef, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [isClicking, setIsClicking] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const circlePosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const isClickingRef = useRef(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    const animateCircle = () => {
      // Smooth lerp animation for circle following - faster speed to keep ball inside circle
      const speed = 0.25;
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      circlePosition.current = { x: circleX, y: circleY };

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleX - 20}px, ${circleY - 20}px, 0) ${isClickingRef.current ? "scale(1.4)" : "scale(1.2)"}`;
      }

      animationRef.current = requestAnimationFrame(animateCircle);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      isClickingRef.current = true;
      setTimeout(() => {
        setIsClicking(false);
        isClickingRef.current = false;
      }, 150);
    };

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);

    // Start animation loop
    animationRef.current = requestAnimationFrame(animateCircle);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Inner red ball (fixed to cursor) */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `translate3d(0, 0, 0) ${isClicking ? "scale(1.8)" : "scale(1)"}`,
          transition: isClicking ? "transform 0.15s ease-out" : "none",
        }}
      >
        <div
          className="w-2 h-2 bg-red-500 rounded-full"
          style={{
            boxShadow: isClicking
              ? "0 0 10px rgba(239, 68, 68, 0.9), 0 0 20px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.3)"
              : "0 0 6px rgba(239, 68, 68, 0.8), 0 0 12px rgba(239, 68, 68, 0.5), 0 0 18px rgba(239, 68, 68, 0.2)",
            transition: "box-shadow 0.15s ease-out",
          }}
        />
      </div>

      {/* Outer red bounding circle (smooth following) */}
      <div
        ref={circleRef}
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          transform: `translate3d(${circlePosition.current.x - 20}px, ${circlePosition.current.y - 20}px, 0) scale(1.2)`,
        }}
      >
        <div
          className="w-10 h-10 rounded-full border-2 border-red-500 bg-transparent"
          style={{
            boxShadow: isClicking
              ? "0 0 20px rgba(239, 68, 68, 0.7), inset 0 0 20px rgba(239, 68, 68, 0.3)"
              : "0 0 15px rgba(239, 68, 68, 0.5), inset 0 0 15px rgba(239, 68, 68, 0.2)",
            transition: "box-shadow 0.15s ease-out",
          }}
        />
      </div>
    </>
  );
}
