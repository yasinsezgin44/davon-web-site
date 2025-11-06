"use client";

import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [circlePosition, setCirclePosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Update circle position with lag effect
      setTimeout(() => {
        setCirclePosition(newPosition);
      }, 25);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 150); // Reset after animation
    };

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <>
      {/* Inner red ball (cursor tip) */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-75 ease-out"
        style={{
          left: mousePosition.x - 5, // Position ball at actual cursor tip
          top: mousePosition.y - 5, // Position ball above the hotspot (inverse - at the top)
          transform: isClicking ? "scale(1.8)" : "scale(1)",
        }}
      >
        <div
          className="w-2 h-2 bg-red-500 rounded-full transition-all duration-150 ease-out"
          style={{
            boxShadow: isClicking
              ? "0 0 10px rgba(239, 68, 68, 0.9), 0 0 20px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.3)"
              : "0 0 6px rgba(239, 68, 68, 0.8), 0 0 12px rgba(239, 68, 68, 0.5), 0 0 18px rgba(239, 68, 68, 0.2)",
          }}
        />
      </div>

      {/* Outer red bounding circle (follows with lag) */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: circlePosition.x - 5 - 12, // Center the circle on cursor tip (x - 5)
          top: circlePosition.y - 5 - 12, // Center the circle on cursor tip (y - 5)
          transform: isClicking ? "scale(1.4)" : "scale(1.2)",
        }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 border-red-500 bg-transparent transition-all duration-300 ease-out"
          style={{
            boxShadow: isClicking
              ? "0 0 20px rgba(239, 68, 68, 0.7), inset 0 0 20px rgba(239, 68, 68, 0.3)"
              : "0 0 15px rgba(239, 68, 68, 0.5), inset 0 0 15px rgba(239, 68, 68, 0.2)",
          }}
        />
      </div>
    </>
  );
}
