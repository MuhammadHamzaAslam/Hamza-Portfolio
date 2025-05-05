"use client";

import React from "react";

interface CustomButtonProps {
  text: string;
  icon: React.ReactNode;
}

export default function CustomButton({ text, icon }: CustomButtonProps) {
  return (
    <button className="button type1 flex items-center justify-between px-4">
      <span className="btn-txt">{text || 'HELLo'}</span>
      <span className="rounded-full bg-[#6957AF] text-white w-10 h-10 flex items-center justify-center">
        {icon}
      </span>
    </button>
  );
}
