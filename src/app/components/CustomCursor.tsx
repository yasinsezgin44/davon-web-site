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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const devicePixelRatioRef = useRef<number>(1);
  const TRAIL_DURATION_MS = 500; // Total time for paint to fully fade
  const trailPointsRef = useRef<
    Array<{ x: number; y: number; t: number; r: number; clicking: boolean }>
  >([]);
  const lastSampleTimeRef = useRef<number>(0);
  const MIN_SAMPLE_MS = 40; // decrease frequency by sampling at most every 40ms
  const TRAIL_BASE_ALPHA = 0.35; // lower overall opacity for filled circles
  const DRAW_DELAY_MS = 80; // render dots only after they are at least this old

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let resizeCleanup: (() => void) | null = null;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    const setupCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      devicePixelRatioRef.current = dpr;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Size canvas for high-DPI displays
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctxRef.current = ctx;
      // Reset and scale to device pixels while drawing in CSS pixels
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Start clean
      ctx.clearRect(0, 0, width, height);
    };

    const onResize = () => {
      setupCanvas();
    };

    // Initial canvas setup and resize listener
    setupCanvas();
    window.addEventListener("resize", onResize);
    resizeCleanup = () => window.removeEventListener("resize", onResize);

    const animateCircle = (now: number) => {
      const ctx = ctxRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Compute frame delta (ms)
      const last = lastFrameTimeRef.current || now;
      const dt = Math.max(0, now - last);
      lastFrameTimeRef.current = now;

      // Smooth lerp animation for circle following - faster speed to keep ball inside circle
      // Smooth lerp animation for circle following - faster speed to keep ball inside circle
      const speed = 0.25;
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      circlePosition.current = { x: circleX, y: circleY };

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circleX - 20}px, ${
          circleY - 20
        }px, 0) ${isClickingRef.current ? "scale(1.4)" : "scale(1.2)"}`;
      }

      // Paint trail using time-based samples (guaranteed removal after TRAIL_DURATION_MS)
      if (ctx) {
        // Add current sample (match the size of the outer circle ring) with throttling
        if ((mouseX !== 0 || mouseY !== 0) && now - lastSampleTimeRef.current >= MIN_SAMPLE_MS) {
          const outerBaseRadius = 20; // w-10 => 40px diameter => 20px radius
          const scale = isClickingRef.current ? 1.4 : 1.2; // match CSS scale on the ring
          trailPointsRef.current.push({
            x: mouseX,
            y: mouseY,
            t: now,
            r: outerBaseRadius * scale,
            clicking: isClickingRef.current,
          });
          lastSampleTimeRef.current = now;
        }

        // Keep only points younger than TRAIL_DURATION_MS
        const cutoff = now - TRAIL_DURATION_MS;
        let writeIdx = 0;
        for (let i = 0; i < trailPointsRef.current.length; i++) {
          const p = trailPointsRef.current[i];
          if (p.t >= cutoff) {
            trailPointsRef.current[writeIdx++] = p;
          }
        }
        trailPointsRef.current.length = writeIdx;

        // Redraw the alive samples with alpha based on age; clear fully first
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < trailPointsRef.current.length; i++) {
          const p = trailPointsRef.current[i];
          const age = now - p.t;
          // Skip samples that are too new so nothing is drawn at the current hover location
          if (age < DRAW_DELAY_MS) continue;
          const life = Math.max(1, TRAIL_DURATION_MS - DRAW_DELAY_MS);
          const normalized = Math.max(0, 1 - (age - DRAW_DELAY_MS) / life);
          ctx.save();
          ctx.globalCompositeOperation = "source-over";
          ctx.fillStyle = `rgba(239, 68, 68, ${TRAIL_BASE_ALPHA * normalized})`;
          ctx.shadowColor = `rgba(239, 68, 68, ${0.45 * normalized})`;
          ctx.shadowBlur = p.clicking ? 16 : 12;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
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
      if (resizeCleanup) {
        resizeCleanup();
      }
    };
  }, []);

  return (
    <>
      {/* Fullscreen canvas for the paint trail */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
      />

      {/* Inner red ball (fixed to cursor) */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `translate3d(0, 0, 0) ${
            isClicking ? "scale(1.8)" : "scale(1)"
          }`,
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
          transform: `translate3d(${circlePosition.current.x - 20}px, ${
            circlePosition.current.y - 20
          }px, 0) scale(1.2)`,
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
