"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const PersonalInfo = () => {
  const { theme } = useTheme();

  // Personal info data
  const infoItems = [
    { label: "First Name", value: "Muhammad" },
    { label: "Address", value: "F.B Area" },
    { label: "Last Name", value: "Hamza" },
    { label: "Phone", value: "+92 3172772879" },
    { label: "Age", value: "15 Years" },
    { label: "Email", value: "hamzaaslam19087" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Freelance", value: "Available" },
    { label: "Languages", value: "Urdu, English" },
  ];

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-2xl font-bold mb-8 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        PERSONAL INFOS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
        {infoItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          >
            <span
              className={`text-sm font-medium ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {item.label} :{" "}
            </span>
            <span
              className={`font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-10"
      >
        <button className="button type-1 flex items-center rounded-full overflow-hidden  hover:bg-[#6957AF] border border-[#6957AF] transition-all duration-300 group">
          <span
            className={`font-medium text-sm px-6 py-3 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            DOWNLOAD CV
          </span>
          <div className="w-12 h-12 rounded-full bg-[#6957AF] flex items-center justify-center text-white">
            <Download className="h-5 w-5" />
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default PersonalInfo;
