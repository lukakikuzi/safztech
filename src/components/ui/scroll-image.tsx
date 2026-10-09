"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ScrollImageProps {
  img: StaticImageData;
  alt: string;
  className?: string;
}

function ScrollImage({ img, alt, className = "" }: ScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const measure = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return;
    setDistance(
      Math.max(0, imageRef.current.offsetHeight - containerRef.current.clientHeight),
    );
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={measure}
      className={`aspect-video rounded-lg overflow-hidden border border-border relative ${className}`}
    >
      <motion.div
        ref={imageRef}
        whileHover={{ y: -distance }}
        transition={{
          duration: Math.min(Math.max(distance / 300, 2), 12),
          ease: "easeInOut",
        }}
        className="w-full absolute inset-x-0 top-0"
      >
        <Image
          src={img}
          alt={alt}
          onLoad={measure}
          className="w-full h-auto block"
        />
      </motion.div>
    </div>
  );
}

export default ScrollImage;
