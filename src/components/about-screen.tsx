"use client";

import type React from "react";

import { useTheme } from "next-themes";
import PersonalInfo from "./personal-info";
import StatBoxes from "./stat-boxes";
import SkillsCarousel from "./skills-carousel";
import ExperienceEducation from "./experience-education";
import { Home, User, Briefcase, Mail, MessageSquare } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const AboutScreen = ({
  onTabClick,
}: {
  onTabClick?: (screen: string, e: React.MouseEvent) => void;
}) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      {/* Main content container */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 pb-24 lg:pb-10">
        {/* ABOUT ME Header */}
        <div className="flex justify-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold relative">
            <span className="text-[#333333] absolute -left-14 top-0">R</span>
            <span className="text-black dark:text-white">ABOUT </span>
            <span className="text-[#6957AF]">
              ME
              <span className="text-[#333333] absolute -right-14 top-0">E</span>
            </span>
            {/* Text shadow effect */}
            <span
              className="absolute top-1 left-0 w-full text-transparent"
              style={{
                textShadow: "0 6px 10px rgba(105, 87, 175, 0.7)",
                WebkitTextStroke: "1px rgba(105, 87, 175, 0.3)",
                zIndex: -1,
              }}
            >
              ABOUT ME
            </span>
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Personal Info Section */}
          <div className="lg:col-span-1">
            <PersonalInfo />
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-2">
            <StatBoxes />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 dark:bg-gray-800 my-16"></div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-12 text-center text-black dark:text-white">
            MY SKILLS
          </h2>
          <SkillsCarousel />
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 dark:bg-gray-800 my-16"></div>

        {/* Experience & Education Section */}
        <ExperienceEducation />
      </div>

      {/* Theme toggle button */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Side navigation - desktop only */}
      <div className="hidden lg:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              HOME
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer"
            onClick={(e) => onTabClick && onTabClick("home", e)}
          >
            <Home className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              ABOUT
            </span>
          </div>
          <div className="z-10 w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer">
            <User className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              WORK
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer"
            onClick={(e) => onTabClick && onTabClick("work", e)}
          >
            <Briefcase className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              CONTACT
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer"
            onClick={(e) => onTabClick && onTabClick("contact", e)}
          >
            <Mail className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              CHAT
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer"
            onClick={(e) => onTabClick && onTabClick("chat", e)}
          >
            <MessageSquare className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50">
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer"
          onClick={(e) => onTabClick && onTabClick("home", e)}
        >
          <Home className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer">
          <User className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer"
          onClick={(e) => onTabClick && onTabClick("work", e)}
        >
          <Briefcase className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer"
          onClick={(e) => onTabClick && onTabClick("contact", e)}
        >
          <Mail className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer"
          onClick={(e) => onTabClick && onTabClick("chat", e)}
        >
          <MessageSquare className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
