"use client";

import type { ReactNode, CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type RevealTag = "div" | "section" | "article" | "header" | "footer";

interface RevealOnScrollProps {
  /**
   * HTML tag to render as the wrapper.
   * Defaults to "div".
   */
  as?: RevealTag;
  /** Child content to animate into view. */
  children: ReactNode;
  /** Additional Tailwind/utility classes. */
  className?: string;
  /**
   * Optional delay in seconds before the reveal animation starts
   * once the element has entered the viewport.
   */
  delay?: number;
}

/**
 * Simple intersection-observer based scroll reveal wrapper.
 * Fades and slides content up the first time it enters the viewport.
 */
export function RevealOnScroll({
  as = "div",
  children,
  className = "",
  delay = 0,
}: Readonly<RevealOnScrollProps>) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const Tag = as;

  const baseClasses =
    "transition-all duration-1000 will-change-transform will-change-opacity";
  const hiddenClasses = "opacity-0 translate-y-8";
  const visibleClasses = "opacity-100 translate-y-0";

  const style: CSSProperties =
    isVisible && delay > 0 ? { transitionDelay: `${delay}s` } : {};

  return (
    <Tag
      ref={ref as unknown as React.RefObject<HTMLElement>["current"]}
      className={`${baseClasses} ${
        isVisible ? visibleClasses : hiddenClasses
      } ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}





