"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Instantly move the inner dot
      if (innerRef.current) {
        gsap.set(innerRef.current, {
          x: mouse.current.x,
          y: mouse.current.y,
        });
      }

      // Smooth follow animation for outer circle
      if (outerRef.current) {
        gsap.to(outerRef.current, {
          duration: 0.3,
          x: mouse.current.x,
          y: mouse.current.y,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={outerRef} className="custom-cursor"></div>
      <div ref={innerRef} className="custom-cursor-dot"></div>
    </>
  );
};

export default CustomCursor;
