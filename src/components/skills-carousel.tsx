"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

// Define the skills with their logos
const skills = [
  {
    name: "Next.JS",
    logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    name: "Express.JS",
    logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    name: "Github",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "React.js",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "React Native",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Javascrpit",
    logo: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://www.svgrepo.com/show/353498/bootstrap.svg",
  },
  {
    name: "Vercel",
    logo: "https://www.svgrepo.com/show/354512/vercel.svg",
  },
  {
    name: "MUI",
    logo: "https://www.svgrepo.com/show/306383/material-ui.svg",
  },
];

const SkillsCarousel = () => {
  const { theme } = useTheme();
  const [isPaused, setIsPaused] = useState(false);

  // Function to handle mouse enter/leave
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Duplicate the skills array to create a seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex gap-6 marquee-container"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="flex-shrink-0 w-[180px]">
            <div
              className={`rounded-lg p-6 flex flex-col items-center justify-center h-[180px] transition-all duration-300 hover:shadow-lg ${
                theme === "dark"
                  ? "bg-[#111111] hover:bg-[#1a1a1a]"
                  : "bg-[#f5f5f5] hover:bg-[#ebebeb]"
              }`}
              style={{
                boxShadow:
                  theme === "dark"
                    ? "0 8px 15px rgba(0, 0, 0, 0.2)"
                    : "0 8px 15px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg?height=64&width=64";
                  }}
                />
              </div>
              <h3
                className={`text-center font-medium ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-container {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              -${skills.length * 196}px
            ); /* Width of each item (180px) + gap (16px) */
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsCarousel;
