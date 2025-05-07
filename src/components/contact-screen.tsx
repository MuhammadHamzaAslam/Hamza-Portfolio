"use client";

import type React from "react";

import { useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";
import {
  Home,
  User,
  Briefcase,
  Mail,
  MessageSquare,
  Send,
  BookOpen,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

interface ContactScreenProps {
  onTabClick?: (screen: string, e: React.MouseEvent) => void;
}

const ContactScreen = ({ onTabClick }: ContactScreenProps) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden cursor-custom">
      <div className="max-w-[1400px] mx-auto px-6 py-10 pb-24 lg:pb-10">
        {/* GET IN TOUCH Header */}
        <div className="flex justify-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold relative">
            <span className="text-black dark:text-white">GET IN </span>
            <span className="text-[#6957AF]">TOUCH</span>
            {/* Text shadow effect */}
            <span
              className="absolute top-1 left-0 w-full text-transparent"
              style={{
                textShadow: "0 6px 10px rgba(105, 87, 175, 0.7)",
                WebkitTextStroke: "1px rgba(105, 87, 175, 0.3)",
                zIndex: -1,
              }}
            >
              GET IN TOUCH
            </span>
          </h1>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#666666] dark:text-white mb-6">
              DON&apos;T BE SHY !
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            {/* Mail Me */}
            <div className="flex items-start mb-8">
              <div className="w-12 h-12 rounded-md bg-[#6957AF] flex items-center justify-center text-white mr-4">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#6957AF] mb-1">
                  MAIL ME
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  hamzaaslam19087@gmail.com
                </p>
              </div>
            </div>

            {/* Call Me */}
            <div className="flex items-start mb-12">
              <div className="w-12 h-12 rounded-md bg-[#6957AF] flex items-center justify-center text-white mr-4">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#6957AF] mb-1">
                  CALL ME
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  +92 3172772879
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#6957AF] hover:text-white transition-colors"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#6957AF] hover:text-white transition-colors"
              >
                <FaLinkedin size={16} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#6957AF] hover:text-white transition-colors"
              >
                <FaInstagram size={16} />
              </Link>
            </div>
          </div>

          {/* <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#6957AF]"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR EMAIL"
                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#6957AF]"
                    required
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[#6957AF]">
                    <Mail size={18} />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="YOUR SUBJECT"
                  className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#6957AF]"
                  required
                />
              </div>

              <div className="mb-8">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="YOUR MESSAGE"
                  rows={6}
                  className="w-full px-6 py-4 rounded-3xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#6957AF] resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center md:justify-start">
                <button className="button type-1 flex items-center rounded-full overflow-hidden hover:bg-[#6957AF] border border-[#6957AF] transition-all duration-300 group">
                  <span
                    className={`font-medium text-sm px-6 py-3 ${
                      theme === "dark" ? "text-white" : "text-black"
                    } hover:text-white`}
                  >
                    More About Me
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
                    <Send className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </form>
          </div> */}
          <div>
            {submitStatus === "success" ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-4">
                  Thank you for your message. I&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="YOUR NAME"
                      className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#6957AF]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="YOUR EMAIL"
                      className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#6957AF]"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="YOUR SUBJECT"
                    className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#6957AF]"
                    required
                  />
                </div>

                <div className="mb-8">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="YOUR MESSAGE"
                    rows={6}
                    className="w-full px-6 py-4 rounded-3xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#6957AF] resize-none"
                    required
                  ></textarea>
                </div>

                {submitStatus === "error" && (
                  <div className="mb-6 text-red-500 dark:text-red-400">
                    There was an error sending your message. Please try again.
                  </div>
                )}

                <div className="flex justify-center md:justify-start">
                  {/* <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center space-x-2 px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 hover:border-[#6957AF] transition-colors cursor-pointer-hover disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="font-medium">
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
                      <Send size={18} />
                    </div>
                  </button> */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button type-1 flex items-center rounded-full overflow-hidden hover:bg-[#6957AF] border border-[#6957AF] transition-all duration-300 group"
                  >
                    <span
                      className={`font-medium text-sm px-6 py-3 ${
                        theme === "dark" ? "text-white" : "text-black"
                      } hover:text-white`}
                    >
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
                      <Send className="h-5 w-5" />
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
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
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
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
          <div
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
            onClick={(e) => onTabClick && onTabClick("about", e)}
          >
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
            className="z-10 w-12 h-12 rounded-full bg-[#1e1e24] group-hover:bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover"
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
          <div className="z-10 w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover">
            <Mail className="h-5 w-5" />
          </div>
        </div>
        <div className="group relative flex items-center justify-end">
          <div className="absolute right-0 h-12 overflow-hidden flex items-center transition-all duration-300 rounded-full bg-[#6957AF] text-white opacity-0 group-hover:opacity-100 group-hover:w-32">
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
        <div
          className="w-12 h-12 rounded-full bg-[#1e1e24] flex items-center justify-center text-white cursor-pointer-hover"
          onClick={(e) => onTabClick && onTabClick("work", e)}
        >
          <Briefcase className="h-5 w-5" />
        </div>
        <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white cursor-pointer-hover">
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

export default ContactScreen;
