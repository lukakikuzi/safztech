"use client";

import { useState } from "react";

const techCategories = [
  {
    label: "Frontend",
    stack: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    label: "Backend",
    stack: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel"],
  },
  {
    label: "Database",
    stack: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
  },
  {
    label: "Cloud",
    stack: ["AWS", "Google Cloud", "Azure", "Vercel", "Docker", "Kubernetes"],
  },
  {
    label: "UI UX Design",
    stack: ["Figma", "Adobe XD", "Sketch", "Framer", "Material UI", "Tailwind CSS"],
  },
  {
    label: "CMS",
    stack: ["WordPress", "Webflow", "Shopify", "Contentful", "Sanity", "Strapi"],
  },
];

function TechStackTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {techCategories.map((category, index) => (
          <button
            key={category.label}
            onClick={() => setActiveIndex(index)}
            className={`px-5 py-2.5 text-sm font-semibold tracking-wide uppercase border transition-colors ${
              activeIndex === index
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-paragraph hover:border-primary/50 hover:text-heading"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div className="flex flex-wrap justify-center gap-3">
        {techCategories[activeIndex].stack.map((tech) => (
          <span
            key={tech}
            className="border border-border bg-card text-foreground text-sm px-5 py-2.5 hover:border-primary/50 hover:text-heading transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechStackTabs;
