"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Skill component with circular progress and logo
const SkillProgress = ({
  skill,
  percentage,
  logo,
}: {
  skill: string;
  percentage: number;
  logo: string;
}) => {
  const { theme } = useTheme();
  const circumference = 2 * Math.PI * 45; // 45 is the radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-4"
    >
      <div className="relative flex items-center justify-center w-32 h-32">
        {/* Background circle */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke={theme === "dark" ? "#333" : "#eee"}
            strokeWidth="10"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#6957AF"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              transition: "stroke-dashoffset 1s ease-in-out",
            }}
          />
        </svg>

        {/* Logo and percentage */}
        <div className="absolute flex flex-col items-center justify-center">
          <img
            src={logo}
            alt={skill}
            className="w-10 h-10 mb-1 object-contain"
          />
          <span
            className={`text-xl font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {percentage}%
          </span>
        </div>
      </div>
      <h3
        className={`mt-4 font-semibold uppercase ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {skill}
      </h3>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { theme } = useTheme();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Skills data with logos
  const skills = [
    { name: "HTML", percentage: 25, logo: "/icons/html.png" },
    { name: "JAVASCRIPT", percentage: 89, logo: "/icons/javascript.png" },
    { name: "CSS", percentage: 70, logo: "/icons/css.png" },
    { name: "PHP", percentage: 66, logo: "/icons/php.png" },
    { name: "WORDPRESS", percentage: 95, logo: "/icons/wordpress.png" },
    { name: "JQUERY", percentage: 50, logo: "/icons/jquery.png" },
    { name: "ANGULAR", percentage: 65, logo: "/icons/angular.png" },
    { name: "REACT", percentage: 45, logo: "/icons/react.png" },
  ];

  const checkScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => slider.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 320; // Roughly the width of 2 skills
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-2xl font-bold mb-12 text-center uppercase ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        MY SKILLS
      </motion.h2>

      <div className="relative">
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#6957AF] flex items-center justify-center text-white shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Skills slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto hide-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={checkScroll}
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex-shrink-0 w-40 md:w-48">
              <SkillProgress
                skill={skill.name}
                percentage={skill.percentage}
                logo={skill.logo}
              />
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#6957AF] flex items-center justify-center text-white shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
