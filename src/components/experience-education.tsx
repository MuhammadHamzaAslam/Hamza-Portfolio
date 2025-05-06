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

  const experienceItems = [
    {
      year: "2018 - PRESENT",
      title: "WEB DEVELOPER",
      company: "ENVATO",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
    },
    {
      year: "2013 - 2018",
      title: "UI/UX DESIGNER",
      company: "THEMEFOREST",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
    },
    {
      year: "2005 - 2013",
      title: "CONSULTANT",
      company: "VIDEOHIVE",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
    },
  ];

  const educationItems = [
    {
      year: "2015",
      title: "ENGINEER DEGREE",
      company: "OXFORD UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
    },
    {
      year: "2012",
      title: "MASTER DEGREE",
      company: "KIEV UNIVERSITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
    },
    {
      year: "2009",
      title: "BACHELOR DEGREE",
      company: "TUNIS HIGH SCHOOL",
      description:
        "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
    },
  ];

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
        EXPERIENCE & EDUCATION
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div>
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
        </div>

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
