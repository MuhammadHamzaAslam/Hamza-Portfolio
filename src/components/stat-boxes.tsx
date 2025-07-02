"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const StatBox = ({ number, text }: { number: string; text: string }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg p-6 flex flex-col items-center justify-center h-full ${
        theme === "dark" ? "bg-[#111111]" : "bg-[#f5f5f5]"
      }`}
      style={{
        boxShadow:
          theme === "dark"
            ? "0 8px 15px rgba(0, 0, 0, 0.2)"
            : "0 8px 15px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="text-5xl font-extrabold text-[#6957AF] mb-2 flex items-baseline">
        {number}
        <span className="text-[#6957AF] text-3xl ml-1">+</span>
      </div>
      <div
        className={`text-sm font-medium text-center tracking-wide ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
};

const StatBoxes = () => {
  const stats = [
    { number: "6", text: "MONTHS OF EXPERIENCE" },
    { number: "10", text: "COMPLETED PROJECTS" },
    { number: "2", text: "HAPPY CUSTOMERS" },
    { number: "2", text: "AWARDS WON" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <StatBox key={index} number={stat.number} text={stat.text} />
      ))}
    </div>
  );
};

export default StatBoxes;
