"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device supports hover / is not pure touch
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);

    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Event delegation for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest(
        "button, a, input, textarea, [data-cursor-interactive], [role='button']"
      );

      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute("data-cursor-text");
        if (text) {
          setHoverText(text);
        } else {
          setHoverText("");
        }
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Primary smooth trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center transition-opacity duration-300"
        style={{
          boxShadow: isHovered
            ? "0 0 20px rgba(200, 117, 72, 0.4)"
            : "none",
        }}
        animate={{
          x: mousePosition.x - (isHovered ? (hoverText ? 40 : 28) : 12),
          y: mousePosition.y - (isHovered ? (hoverText ? 40 : 28) : 12),
          width: isHovered ? (hoverText ? 80 : 56) : 24,
          height: isHovered ? (hoverText ? 80 : 56) : 24,
          backgroundColor: isHovered
            ? hoverText
              ? "#121214"
              : "rgba(200, 117, 72, 0.15)"
            : "rgba(18, 18, 20, 0.05)",
          borderColor: isHovered
            ? hoverText
              ? "#C87548"
              : "#C87548"
            : "rgba(18, 18, 20, 0.4)",
          borderWidth: 1.5,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {hoverText && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white select-none pointer-events-none text-center px-1 leading-tight">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Tiny sharp center point */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-[#C87548]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isHovered && hoverText ? 0 : 1,
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 800,
        }}
      />
    </>
  );
}
