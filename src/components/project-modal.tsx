"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  X,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectDetails {
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

interface ProjectModalProps {
  project: ProjectDetails | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close modal when Escape key is pressed
  useEffect(() => {
    setIsMounted(true);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!project || !isMounted) return null;

  // Prepare images array
  const allImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-2xl ${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          } shadow-2xl`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Project image carousel */}
          <div className="relative w-full h-64 md:h-80">
            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows - only show if more than one image */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image indicator dots */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "bg-white w-4"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-[#6957AF] rounded-full">
                {project.category}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Project details */}
          <div className="p-6">
            {/* Skills */}
            {project.skills && project.skills.length > 0 && (
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === "dark"
                          ? "bg-gray-800 text-gray-200"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {project.description && (
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  About This Project
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 mt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#6957AF] text-white hover:bg-[#5a4a9e] transition-colors"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
