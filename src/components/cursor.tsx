"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      if (innerRef.current) {
        gsap.set(innerRef.current, {
          x: mouse.current.x,
          y: mouse.current.y,
        });
      }

      if (outerRef.current) {
        gsap.to(outerRef.current, {
          duration: 0.3,
          x: mouse.current.x,
          y: mouse.current.y,
          ease: "power3.out",
        });
      }

      // Create bubble
      if (containerRef.current) {
        const bubble = document.createElement("div");
        bubble.className = "cursor-bubble";
        containerRef.current.appendChild(bubble);
        gsap.set(bubble, {
          x: mouse.current.x,
          y: mouse.current.y,
          scale: 0,
          opacity: 1,
        });
        gsap.to(bubble, {
          duration: 0.6,
          scale: 1.5,
          opacity: 0,
          ease: "power2.out",
          onComplete: () => bubble.remove(),
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
      <div ref={containerRef} className="cursor-bubble-container"></div>
    </>
  );
};

export default CustomCursor;
