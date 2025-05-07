"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Home, User, Briefcase, Mail, BookOpen } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

interface BlogScreenProps {
  onTabClick?: (screen: string, e: React.MouseEvent) => void;
}

const BlogScreen = ({ onTabClick }: BlogScreenProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentQuote, setCurrentQuote] = useState(0);

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Own Your Audience by Creating an Email List",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://tunis-next.netlify.app/assets/img/blog/blog-post-1.jpg",
      date: "May 15, 2025",
      category: "Marketing",
    },
    {
      id: 2,
      title: "Top 10 Toolkits for Deep Learning in 2020",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://tunis-next.netlify.app/assets/img/blog/blog-post-2.jpg",
      date: "May 10, 2025",
      category: "Technology",
    },
    {
      id: 3,
      title: "Everything You Need to Know About Web Accessibility",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://tunis-next.netlify.app/assets/img/blog/blog-post-3.jpg",
      date: "May 5, 2025",
      category: "Development",
    },
    {
      id: 4,
      title: "How to Inject Humor & Comedy Into Your Brand",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://tunis-next.netlify.app/assets/img/blog/blog-post-4.jpg",
      date: "April 28, 2025",
      category: "Business",
    },
    {
      id: 5,
      title: "How to Build a Personal Brand as a Developer",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://cdn.ramseysolutions.net/media/blog/business/professional-growth/personal-brand.jpg",
      date: "April 20, 2025",
      category: "Career",
    },
    {
      id: 6,
      title: "The Importance of UI/UX in Modern Web Applications",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://tunis-next.netlify.app/assets/img/blog/blog-post-6.jpg",
      date: "April 15, 2025",
      category: "Design",
    },
  ];

  // Quotes data
  const quotes = [
    {
      text: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
      author: "Steve Jobs",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
  ];

  // Auto-rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden cursor-custom">
      {/* Main content container */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 pb-24 lg:pb-10">
        {/* MY BLOG Header */}
        <div className="flex justify-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold relative">
            <span className="text-[#6957AF]">
             MY BLOGS
            </span>
            {/* Text shadow effect */}
            <span
              className="absolute top-1 left-0 w-full text-transparent"
              style={{
                textShadow: "0 6px 10px rgba(139, 195, 74, 0.3)",
                WebkitTextStroke: "1px rgba(139, 195, 74, 0.2)",
                zIndex: -1,
              }}
            >
              MY BLOGS
            </span>
          </h1>
        </div>

        {/* Blog Posts Carousel */}
        <div
          className="relative overflow-hidden mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={carouselRef}
            className="flex gap-6 transition-transform duration-1000 ease-linear"
            style={{
              transform: `translateX(${isPaused ? "0" : "-100%"})`,
              animation: isPaused ? "none" : "carousel 30s linear infinite",
            }}
          >
            {/* First set of blog posts */}
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <BlogCard post={post} />
              </div>
            ))}

            {/* Duplicate set for seamless looping */}
            {blogPosts.map((post) => (
              <div
                key={`dup-${post.id}`}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {/* Quote of the Day */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-[#f5f5f5] to-[#e8f5e9] dark:from-[#1a1a1a] dark:to-[#1e3320] rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6957AF]/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6957AF]/10 rounded-full -ml-12 -mb-12"></div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#6957AF] relative z-10">
              Quote of the Day
            </h2>

            <div className="relative z-10">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-xl md:text-2xl italic mb-4 text-gray-700 dark:text-gray-300">
                  {quotes[currentQuote].text} 
                </blockquote>
                <cite className="text-right block text-lg text-[#6957AF] font-medium">
                  — {quotes[currentQuote].author}
                </cite>
              </motion.div>
            </div>

            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-[#6957AF]/10 dark:text-[#6957AF]/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-800">
          <p>
            © {new Date().getFullYear()} Muhammad Hamza. All Rights Reserved.
          </p>
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
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
            onClick={(e) => onTabClick && onTabClick("work", e)}
          >
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
              BLOG
            </span>
          </div>
          <div className="z-10 w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover">
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
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
          onClick={(e) => onTabClick && onTabClick("work", e)}
        >
          <Briefcase className="h-5 w-5" />
        </div>
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
          onClick={(e) => onTabClick && onTabClick("contact", e)}
        >
          <Mail className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover">
          <BookOpen className="h-5 w-5" />
        </div>
      </div>

      {/* Carousel animation */}
      <style jsx global>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ post }: { post: BlogPost }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      {/* Blog Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-[#6957AF] text-white text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.date}
          </span>
          <button className="text-[#6957AF] hover:text-[#689F38] font-medium text-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;
