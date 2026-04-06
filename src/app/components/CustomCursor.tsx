import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springConfig = { stiffness: 200, damping: 22, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const el = e.target as Element;
      setIsHovering(
        !!el.closest(
          'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
        )
      );
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <div className="pointer-events-none select-none">
      {/* Precise centre dot — mix-blend-difference inverts colour on light/dark */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-difference bg-[#f5f4f0]"
        style={{
          width: 7,
          height: 7,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Soft trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid rgba(245,244,240,0.5)",
        }}
        animate={{
          width: isHovering ? 52 : 38,
          height: isHovering ? 52 : 38,
          opacity: isVisible ? (isHovering ? 0.9 : 0.5) : 0,
          backgroundColor: isHovering
            ? "rgba(245,244,240,0.06)"
            : "rgba(245,244,240,0)",
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      />
    </div>
  );
}