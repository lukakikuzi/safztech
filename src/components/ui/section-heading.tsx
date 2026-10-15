import React from "react";

interface SectionHeadingProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  /** On gold bands the text colours flip to black. */
  tone?: "dark" | "gold";
  className?: string;
}

function SectionHeading({ title, children, tone = "dark", className = "" }: SectionHeadingProps) {
  const gold = tone === "gold";
  return (
    <div className={`max-w-3xl mb-8 sm:mb-12 lg:mb-16 ${className}`}>
      <h2
        className={`font-poppins font-extrabold tracking-tight leading-[1.05] text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl ${
          gold ? "text-primary-foreground" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-4 text-base leading-relaxed sm:mt-5 sm:text-lg max-w-2xl ${
            gold ? "text-primary-foreground/75" : "text-paragraph"
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
