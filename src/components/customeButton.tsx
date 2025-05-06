"use client";

import React from "react";

interface CustomButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function CustomButton({
  text,
  icon,
  onClick,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className="button type1 flex items-center justify-between px-4 dark:text-white text-black"
    >
      <span className="btn-txt dark:text-white text-black">
        {text || "HELLo"}
      </span>
      <span className="rounded-full bg-[#6957AF] text-white w-10 h-10 flex items-center justify-center">
        {icon}
      </span>
    </button>
  );
}
