"use client";

import type React from "react";

import { useState, useEffect } from "react";
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
import ProjectModal, { type ProjectDetails } from "./project-modal";

interface Project extends ProjectDetails {
  id: number;
  title: string;
  category: "web" | "Mobile App";
  image: string;
  images?: string[];
  github?: string;
  link?: string;
  description?: string;
  skills?: string[];
}

interface WorkScreenProps {
  onTabClick?: (screen: string, e: React.MouseEvent) => void;
}

const WorkScreen = ({ onTabClick }: WorkScreenProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Voyyo",
      category: "Mobile App",
      image: "/projects/origami.jpg",
      images: [
        "/projects/origami.jpg",
        "/projects/lucky-cat.jpg",
        "/projects/hardware.jpg",
      ],
      github: "https://github.com",
      description:
        "A mobile app for travelers to discover local experiences and connect with locals. Features include interactive maps, real-time chat, and personalized recommendations.",
      skills: ["React Native", "Firebase", "Google Maps API", "Node.js"],
    },
    {
      id: 2,
      title: "Wravel",
      category: "Mobile App",
      image: "/projects/lucky-cat.jpg",
      images: [
        "/projects/lucky-cat.jpg",
        "/projects/paper-boat.jpg",
        "/projects/flower.jpg",
      ],
      github: "https://github.com",
      description:
        "A travel planning mobile application that helps users organize their trips, discover attractions, and share their experiences with friends and family.",
      skills: ["Flutter", "Dart", "Firebase", "RESTful APIs"],
    },
    {
      id: 3,
      title: "Learning Management System",
      category: "web",
      image:
        "https://res.cloudinary.com/durstxroh/image/upload/v1738266615/qgzeq3ispks3yelmabkm.png",
      images: [
        "https://res.cloudinary.com/durstxroh/image/upload/v1738266615/qgzeq3ispks3yelmabkm.png",
        "https://res.cloudinary.com/durstxroh/image/upload/v1738266833/me5wchetfviuhzvix3jc.png",
        "https://res.cloudinary.com/durstxroh/image/upload/v1738266775/khoy1rztqttzlgu457al.png",
      ],
      github:
        "https://github.com/MuhammadAhmadAslam/Saylani-Management-Systems",
      link: "https://saylani-management-system.vercel.app/",
      description:
        "A comprehensive learning management system for educational institutions. Features include course management, student enrollment, assignment submission, and progress tracking.",
      skills: [
        "React.js",
        "Javascript",
        "Tailwind CSS",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Shadcn UI",
      ],
    },
    {
      id: 4,
      title:
        "Dynamic E-Commerce Platform with Advanced Admin Panel & Real-Time Tracking",
      category: "web",
      image:
        "https://res.cloudinary.com/durstxroh/image/upload/v1738331715/ecommerce_xgx5fq.png",
      images: [
        "https://res.cloudinary.com/durstxroh/image/upload/v1738331715/ecommerce_xgx5fq.png",
        "https://res.cloudinary.com/durstxroh/image/upload/v1738331714/ecommerce3_u5ziws.png",
        "https://res.cloudinary.com/durstxroh/image/upload/v1738331727/ecommerce1_p3qjvo.png",
      ],
      github: "https://github.com/MuhammadAhmadAslam/POS-E-Commerce-Website",
      link: "https://e-commerce-xi-ebon.vercel.app/",
      description:
        "A full-featured e-commerce platform with an advanced admin panel, real-time order tracking, inventory management, and analytics dashboard.",
      skills: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Shadcn UI",
      ],
    },
    {
      id: 5,
      title: "WebGlowing: Your Ultimate Developer Tool Hub",
      category: "web",
      image:
        "https://res.cloudinary.com/durstxroh/image/upload/v1738332395/clpjk3hiym7xldinjvmm.png",
      images: [
        "https://res.cloudinary.com/durstxroh/image/upload/v1738332395/clpjk3hiym7xldinjvmm.png",
        "https://res.cloudinary.com/durstxroh/image/upload/v1738332394/o0fozk32d1goq4tyfqja.png",
        "https://res.cloudinary.com/durstxroh/image/upload/v1738332395/eppjtjvv0fqd2ui7vj1m.png",
      ],
      github: "https://github.com/MuhammadHamzaAslam/Web-Glowing",
      link: "webglowing.com",
      description:
        "A comprehensive collection of tools and resources for web developers. Features include code snippets, tutorials, and a community forum for developers to share knowledge.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    },
    {
      id: 6,
      title: "Patient Appointment Management System",
      category: "web",
      image:
        "https://res.cloudinary.com/diyujhtuc/image/upload/v1746707386/dos_rjn4mw.png",
      images: [
        "https://res.cloudinary.com/diyujhtuc/image/upload/v1746707386/dos_rjn4mw.png",
        "https://res.cloudinary.com/diyujhtuc/image/upload/v1746707386/dos2_hozpzj.png",
        "https://res.cloudinary.com/diyujhtuc/image/upload/v1746707385/dos3_iu2usv.png",
      ],
      github:
        "https://github.com/MuhammadHamzaAslam/Patient-Appointment-System",
      link: "https://patient-appointment-system-plum.vercel.app/",
      description:
        "A healthcare appointment scheduling system that allows patients to book appointments with doctors, manage their medical records, and receive reminders for upcoming appointments.",
      skills: ["Next.js" , "antd", "Node.js", "Express" , "Tailwind CSS", "MongoDB"],
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleProjectTouch = (project: Project) => {
    if (isTouchDevice) {
      if (hoveredProject === project.id) {
        handleProjectClick(project);
      } else {
        setHoveredProject(project.id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
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
              className="relative rounded-lg overflow-hidden aspect-[4/3] group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
              onTouchStart={() => handleProjectTouch(project)}
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

              {/* Hover Overlay - now works on touch too */}
              <div
                className={`absolute inset-0 bg-[#6957AF] flex flex-col items-center justify-center p-6 text-white transition-opacity duration-500 ${
                  hoveredProject === project.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div
                  className={`transform ${
                    hoveredProject === project.id
                      ? "translate-y-0"
                      : "translate-y-10 group-hover:translate-y-0"
                  } transition-transform duration-500`}
                >
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
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

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
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white"
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
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white"
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
          <div className="z-10 w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
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
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white"
            onClick={(e) => onTabClick && onTabClick("contact", e)}
          >
            <Mail className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-36">
            <span className="pl-4 pr-16 font-medium whitespace-nowrap">
              BLOG
            </span>
          </div>
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white"
            onClick={(e) => onTabClick && onTabClick("blog", e)}
          >
            <BookOpen className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50">
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white"
          onClick={(e) => onTabClick && onTabClick("home", e)}
        >
          <Home className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white"
          onClick={(e) => onTabClick && onTabClick("about", e)}
        >
          <User className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
          <Briefcase className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white"
          onClick={(e) => onTabClick && onTabClick("contact", e)}
        >
          <Mail className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white"
          onClick={(e) => onTabClick && onTabClick("blog", e)}
        >
          <BookOpen className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default WorkScreen;
