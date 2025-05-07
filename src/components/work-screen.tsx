"use client";

import type React from "react";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import {
  Github,
  ExternalLink,
  Home,
  User,
  Briefcase,
  Mail,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: "web" | "Mobile App";
  image: string;
  github?: string;
  link?: string;
}

interface WorkScreenProps {
  onTabClick?: (screen: string, e: React.MouseEvent) => void;
}

const WorkScreen = ({ onTabClick }: WorkScreenProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  console.log(hoveredProject);

  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: "Voyyo",
      category: "Mobile App",
      image: "/projects/origami.jpg",
      github: "https://github.com",
    },
    {
      id: 2,
      title: "Wravel",
      category: "Mobile App",
      image: "/projects/lucky-cat.jpg",
      github: "https://github.com",
    },
    {
      id: 3,
      title: "Learning Management System",
      category: "web",
      image:
        "https://res.cloudinary.com/durstxroh/image/upload/v1738266615/qgzeq3ispks3yelmabkm.png",
      github:
        "https://github.com/MuhammadAhmadAslam/Saylani-Management-Systems",
      link: "https://saylani-management-system.vercel.app/",
    },
    {
      id: 4,
      title:
        "Dynamic E-Commerce Platform with Advanced Admin Panel & Real-Time Tracking",
      category: "web",
      image:
        "https://res.cloudinary.com/durstxroh/image/upload/v1738331715/ecommerce_xgx5fq.png",
      github: "https://github.com/MuhammadAhmadAslam/POS-E-Commerce-Website",
      link: "https://e-commerce-xi-ebon.vercel.app/",
    },
    {
      id: 5,
      title: "WebGlowing: Your Ultimate Developer Tool Hub",
      category: "web",
      image:
        "https://res.cloudinary.com/durstxroh/image/upload/v1738332395/clpjk3hiym7xldinjvmm.png",
      github: "https://github.com/MuhammadHamzaAslam/Web-Glowing",
      link: "webglowing.com",
    },
    {
      id: 6,
      title: "Patient Appointment Management System",
      category: "web",
      image: "/projects/flower.jpg",
      github:
        "https://github.com/MuhammadHamzaAslam/Patient-Appointment-System",
      link: "https://patient-appointment-system-plum.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden cursor-custom">
      {/* Main content container */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 pb-24 lg:pb-10">
        {/* MY PORTFOLIO Header */}
        <div className="flex justify-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold relative">
            <span className="text-black dark:text-white">MY </span>
            <span className="text-[#6957AF]">PORTFOLIO</span>
            {/* Text shadow effect */}
            <span
              className="absolute top-1 left-0 w-full text-transparent"
              style={{
                textShadow: "0 6px 10px rgba(105, 87, 175, 0.7)",
                WebkitTextStroke: "1px rgba(105, 87, 175, 0.3)",
                zIndex: -1,
              }}
            >
              MY PORTFOLIO
            </span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-lg overflow-hidden aspect-[4/3] group cursor-pointer-hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="w-full h-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#6957AF] flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {project.title}
                  </h3>
                  <div className="flex space-x-4 justify-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Theme toggle button */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Side navigation - desktop only */}
      <div className="hidden lg:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-36">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              HOME
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
            onClick={(e) => onTabClick && onTabClick("home", e)}
          >
            <Home className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-36">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              ABOUT
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
            onClick={(e) => onTabClick && onTabClick("about", e)}
          >
            <User className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-36">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              WORK
            </span>
          </div>
          <div className="z-10 w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover">
            <Briefcase className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-36">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              CONTACT
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
            onClick={(e) => onTabClick && onTabClick("contact", e)}
          >
            <Mail className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-36">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              BLOGS
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
            onClick={(e) => onTabClick && onTabClick("chat", e)}
          >
            <BookOpen className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50">
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
          onClick={(e) => onTabClick && onTabClick("home", e)}
        >
          <Home className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
          onClick={(e) => onTabClick && onTabClick("about", e)}
        >
          <User className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover">
          <Briefcase className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
          onClick={(e) => onTabClick && onTabClick("contact", e)}
        >
          <Mail className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
          onClick={(e) => onTabClick && onTabClick("chat", e)}
        >
          <BookOpen className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default WorkScreen;
