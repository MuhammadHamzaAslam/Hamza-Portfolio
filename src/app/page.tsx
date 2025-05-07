"use client";

import type React from "react";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Settings,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import AboutScreen from "@/components/about-screen";
import ContactScreen from "@/components/contact-screen";
import { TiArrowRightThick } from "react-icons/ti";
import { useTheme } from "next-themes";
import me from "../../public/images/me.jpg";
import WorkScreen from "@/components/work-screen";
import BlogScreen from "@/components/blog-screen";

export default function HomePage() {
  const [activeScreen, setActiveScreen] = useState("home");
  const [animationOrigin, setAnimationOrigin] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();

  const handleTabClick = (screen: string, e: React.MouseEvent) => {
    if (isAnimating) return;

    // Get click position relative to viewport
    const x = e.clientX;
    const y = e.clientY;

    setAnimationOrigin({ x, y });
    setIsAnimating(true);

    // Delay the screen change to allow animation to start
    setTimeout(() => {
      setActiveScreen(screen);
    }, 300);

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex flex-col relative cursor-custom"
      ref={containerRef}
    >
      {/* Circular reveal animation overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{
              clipPath: `circle(0px at ${animationOrigin.x}px ${animationOrigin.y}px)`,
            }}
            animate={{
              clipPath: `circle(2000px at ${animationOrigin.x}px ${animationOrigin.y}px)`,
            }}
            exit={{
              clipPath: `circle(0px at ${animationOrigin.x}px ${animationOrigin.y}px)`,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence mode="wait">
        {activeScreen === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            {/* Mobile and medium layout (stacked) */}
            <div className="flex flex-col items-center px-4 py-8 md:py-12 lg:hidden">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#6957AF]">
                  <Image
                    src={me}
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="text-center max-w-md mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#6957AF] mb-2">
                  I&apos;MUHAMMAD HAMZA.
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                  WEB & MOBILE APP DEVELOPER
                </h2>
                <p className="text-[#666666] dark:text-white text-base md:text-lg mb-8">
                  I&apos;m a Pakistani based Web And Mobile App Developer
                  focused on crafting clean & user-friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me.
                </p>
                <div className="flex items-center justify-center mb-15">
                  <button
                    onClick={(e: any) => handleTabClick("about", e)}
                    className="button type-1 flex items-center rounded-full overflow-hidden  hover:bg-[#6957AF] border border-[#6957AF] transition-all duration-300 group"
                  >
                    <span
                      className={`font-medium text-sm px-6 py-3 ${
                        theme === "dark" ? "text-white" : "text-black"
                      } hover:text-white`}
                    >
                      More About Me
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
                      <TiArrowRightThick className="h-5 w-5" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="absolute top-6 right-6">
                <ThemeToggle />
              </div>
            </div>

            {/* Desktop layout (side by side) */}
            <div className="hidden lg:flex min-h-screen">
              {/* Left side with purple background and image */}
              <div className="w-[40%] relative overflow-hidden bg-[#6957AF]">
                {/* Right-angled triangle background */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-full h-full">
                    <div
                      className="w-full h-full bg-white dark:bg-[#09090B]"
                      style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                    ></div>
                  </div>
                </div>

                {/* Image container with rounded corners */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[80%] max-w-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src={me}
                      alt="Profile"
                      width={500}
                      height={600}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 cursor-pointer-hover"
                  >
                    <span className="sr-only">Settings</span>
                    <Settings className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Right side with content */}
              <div className="w-[60%] flex flex-col justify-center p-8 md:p-12 relative">
                <div className="absolute top-6 right-6">
                  <ThemeToggle />
                </div>

                {/* Desktop navigation */}
                <div className="flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-50">
                  {/* Home tab */}
                  <div className="group relative flex items-center justify-end">
                    <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                      <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                        HOME
                      </span>
                    </div>
                    <div
                      className="z-10 w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
                      onClick={(e) => handleTabClick("home", e)}
                    >
                      <Home className="h-5 w-5" />
                    </div>
                  </div>

                  {/* About tab */}
                  <div className="group relative flex items-center justify-end">
                    <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                      <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                        ABOUT
                      </span>
                    </div>
                    <div
                      className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
                      onClick={(e) => handleTabClick("about", e)}
                    >
                      <User className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Work tab */}
                  <div className="group relative flex items-center justify-end">
                    <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                      <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                        WORK
                      </span>
                    </div>
                    <div
                      className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
                      onClick={(e) => handleTabClick("work", e)}
                    >
                      <Briefcase className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Contact tab */}
                  <div className="group relative flex items-center justify-end">
                    <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                      <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                        CONTACT
                      </span>
                    </div>
                    <div
                      className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
                      onClick={(e) => handleTabClick("contact", e)}
                    >
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Chat tab */}
                  <div className="group relative flex items-center justify-end">
                    <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
                      <span className="pl-4 pr-16 font-medium whitespace-nowrap">
                        BLOGS
                      </span>
                    </div>
                    <div
                      className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
                      onClick={(e) => handleTabClick("chat", e)}
                    >
                      <BookOpen className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-1 bg-[#6957AF] dark:bg-purple-500"></div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6957AF] dark:text-purple-400">
                      I&apos;MUHAMMAD HAMZA.
                    </h1>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#666666] dark:text-white mb-6">
                    WEB & MOBILE APP DEVELOPER
                  </h2>
                  <p className="text-gray-600 dark:text-white text-lg mb-8">
                    I&apos;m a Pakistani based Web And Mobile App Developer
                    focused on crafting clean & user-friendly experiences, I am
                    passionate about building excellent software that improves
                    the lives of those around me.
                  </p>
                  <button
                    onClick={(e: any) => handleTabClick("about", e)}
                    className="button type-1 flex items-center rounded-full overflow-hidden  hover:bg-[#6957AF] border border-[#6957AF] transition-all duration-300 group"
                  >
                    <span
                      className={`font-medium text-sm px-6 py-3 ${
                        theme === "dark" ? "text-white" : "text-black"
                      } hover:text-white`}
                    >
                      More About Me
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
                      <TiArrowRightThick className="h-5 w-5" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50">
              <div
                className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
                onClick={(e) => handleTabClick("home", e)}
              >
                <Home className="h-5 w-5" />
              </div>
              <div
                className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
                onClick={(e) => handleTabClick("about", e)}
              >
                <User className="h-5 w-5" />
              </div>
              <div
                className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
                onClick={(e) => handleTabClick("work", e)}
              >
                <Briefcase className="h-5 w-5" />
              </div>
              <div
                className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
                onClick={(e) => handleTabClick("contact", e)}
              >
                <Mail className="h-5 w-5" />
              </div>
              <div
                className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
                onClick={(e) => handleTabClick("chat", e)}
              >
                <BookOpen className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        ) : activeScreen === "about" ? (
          <AboutScreen key="about" onTabClick={handleTabClick} />
        ) : activeScreen === "work" ? (
          <WorkScreen key="work" onTabClick={handleTabClick} />
        ) : activeScreen === "contact" ? (
          <ContactScreen key="contact" onTabClick={handleTabClick} />
        ) : (
          <BlogScreen key="blog" onTabClick={handleTabClick} />
          // <motion.div
          //   key="placeholder"
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   exit={{ opacity: 0 }}
          //   className="flex items-center justify-center min-h-screen bg-black text-white"
          // >
          //   <div className="text-center">
          //     <h2 className="text-3xl font-bold mb-4">
          //       {activeScreen.toUpperCase()} Page
          //     </h2>
          //     <p className="mb-6">This page is under construction</p>
          //     <Button
          //       className="bg-[#6957AF] hover:bg-[#5a4a9e] text-white cursor-pointer-hover"
          //       onClick={(e) => handleTabClick("home", e)}
          //     >
          //       Back to Home
          //     </Button>
          //   </div>
          // </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
