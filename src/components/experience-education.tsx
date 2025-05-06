"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  type: "education" | "experience";
  description: string;
}

const TimelineItem = ({
  year,
  title,
  company,
  type,
  description,
}: TimelineItemProps) => {
  const { theme } = useTheme();
  const Icon = type === "education" ? GraduationCap : Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex pb-12"
    >
      {/* Icon */}
      <div
        className="absolute left-0 w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white"
        style={{ zIndex: 2 }}
      >
        <Icon size={20} />
      </div>

      {/* Vertical line */}
      <div
        className="absolute left-6 top-10 bottom-0 w-px bg-gray-600"
        style={{ zIndex: 1 }}
      ></div>

      {/* Content */}
      <div className="ml-20">
        <div
          className={`text-sm font-medium mb-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {year}
        </div>
        <h3
          className={`text-xl font-bold mb-2 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {title}{" "}
          <span className="text-[#6957AF] font-normal">— {company}</span>
        </h3>
        <p
          className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ExperienceEducation = () => {
  const { theme } = useTheme();

  // const experienceItems = [
  //   {
  //     year: "2025 - PRESENT",
  //     title: "Matriculation",
  //     company: "K.M.A School",
  //     description: "Currently Doing Matriculation.",
  //   },
  // ];

  const educationItems = [
    {
      year: "2025-Present",
      title: "Matriculation",
      company: "K.M.A School",
      description:
        "Currently Doing Matriculation.",
    },
    {
      year: "2025",
      title: "Mern Stack Developer",
      company: "SMIT",
      description:
        "Certified Mern Stack Developer from Saylani Mass It Training.",
    },
    {
      year: "2025",
      title: "Javascript Essentials",
      company: "Cisco",
      description:
        "Certified Javascript Essentials from Cisco.",
    },
  ];

  return (
    <div className="mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-4xl font-bold mb-12 text-center uppercase ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        EXPERIENCE & EDUCATION
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* <div>
          {experienceItems.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              company={item.company}
              type="experience"
              description={item.description}
            />
          ))}
        </div> */}

        <div>
          {educationItems.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              company={item.company}
              type="education"
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
