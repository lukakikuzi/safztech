"use client";

import React from "react";

interface HeroScrollButtonProps {
  target: string;
  className?: string;
  children: React.ReactNode;
}

function HeroScrollButton({ target, className, children }: HeroScrollButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })}
    >
      {children}
    </button>
  );
}

export default HeroScrollButton;
