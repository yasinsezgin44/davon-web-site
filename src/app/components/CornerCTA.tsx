"use client";

import { useEffect, useState } from "react";

export default function CornerCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    try {
      const dismissed =
        typeof window !== "undefined" &&
        window.localStorage.getItem("cornerCtaDismissed");
      if (dismissed === "1") {
        setIsVisible(false);
      }
    } catch {
      // If localStorage is unavailable, fail open and show the CTA
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    try {
      window.localStorage.setItem("cornerCtaDismissed", "1");
    } catch {
      // Ignore storage errors
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 md:top-28 right-6 bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg z-40 max-w-xs opacity-90 hover:opacity-100 transition-all">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">
          Streamline Your Hospital Operations?
        </span>
        <a
          href="#contact"
          className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-red-50 transition-all text-center"
        >
          Get Started
        </a>
      </div>
      <button
        className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-6 h-6 text-xs hover:bg-gray-700 transition-colors"
        title="Close"
        aria-label="Close corner callout"
        onClick={handleClose}
        type="button"
      >
        ×
      </button>
    </div>
  );
}
