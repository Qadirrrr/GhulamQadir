import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);

  const mouseX = useSpring(0, { stiffness: 350, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 350, damping: 25 });

  const ringX = useSpring(0, { stiffness: 150, damping: 20 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;
      
      mouseX.set(clientX);
      mouseY.set(clientY);
      ringX.set(clientX);
      ringY.set(clientY);

      const computedStyle = window.getComputedStyle(target);
      setIsPointer(
        computedStyle.cursor === "pointer" ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.magnetic')
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999]">
      {/* Magnetic Outer Ring */}
      <motion.div
        className="absolute w-12 h-12 rounded-full border border-[#915eff]/50 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          borderColor: isPointer ? "rgba(145, 94, 255, 1)" : "rgba(145, 94, 255, 0.3)",
          borderWidth: isClicking ? 4 : 1,
        }}
      />
      
      {/* Inner Dynamic Dot */}
      <motion.div
        className="absolute w-3 h-3 bg-[#2dd4bf] rounded-full shadow-[0_0_15px_#2dd4bf]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : (isPointer ? 0.8 : 1),
          backgroundColor: isPointer ? "#915eff" : "#2dd4bf",
        }}
      />

      {/* Trailing Glow */}
      <motion.div
        className="absolute w-64 h-64 bg-[#915eff]/10 blur-[80px] rounded-full -z-10"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
};

export default CustomCursor;
