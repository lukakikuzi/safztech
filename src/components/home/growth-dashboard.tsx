"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Eye,
  Users,
  Wallet,
} from "lucide-react";

const curve =
  "M 0 128 C 40 126, 58 108, 92 104 S 146 108, 178 88 S 238 56, 268 44 S 322 20, 350 12";

const kpis = [
  { Icon: Eye, label: "Traffic", spark: "0,16 8,13 16,14 24,9 32,10 40,4 48,2" },
  { Icon: Users, label: "Leads", spark: "0,17 8,15 16,12 24,13 32,7 40,5 48,2" },
  { Icon: Wallet, label: "Revenue", spark: "0,18 8,16 16,15 24,10 32,8 40,3 48,1" },
];

const months = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

function GrowthDashboard() {
  return (
    <div className="relative w-full max-w-md lg:ml-auto">
      <div
        aria-hidden
        className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full opacity-60"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-xl border border-white/15 bg-black/50 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(255,215,0,0.35)] overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <p className="text-heading text-xs tracking-[0.18em] uppercase">
              Growth Dashboard
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-green-400 border border-green-400/30 bg-green-400/10 rounded-full px-2.5 py-1">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-400" />
            </span>
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 p-5 pb-0">
          {kpis.map(({ Icon, label, spark }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-4 h-4 text-primary" />
                <span className="flex items-center text-green-400">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
              <p className="text-heading text-xs mb-2">{label}</p>
              <svg viewBox="0 0 48 20" className="w-full h-5" aria-hidden>
                <polyline
                  points={spark}
                  fill="none"
                  stroke="#ffd700"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="p-5 pt-4">
          <svg
            viewBox="0 0 370 150"
            className="w-full h-auto overflow-visible"
            role="img"
            aria-label="Illustration of a business growing steadily upward"
          >
            <defs>
              <linearGradient id="gd-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffd700" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
              </linearGradient>
              <filter id="gd-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {[30, 70, 110].map((y) => (
              <line
                key={y}
                x1="0"
                x2="370"
                y1={y}
                y2={y}
                stroke="white"
                strokeOpacity="0.07"
                strokeDasharray="3 5"
              />
            ))}

            <motion.path
              d={`${curve} L 350 150 L 0 150 Z`}
              fill="url(#gd-area)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            />
            <motion.path
              d={curve}
              fill="none"
              stroke="#ffd700"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#gd-glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
            />

            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <circle cx="350" cy="12" r="10" fill="#ffd700" fillOpacity="0.2">
                <animate
                  attributeName="r"
                  values="6;14;6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="350" cy="12" r="5" fill="#ffd700" />
            </motion.g>
          </svg>

          <div className="flex justify-between mt-2 text-[10px] tracking-widest uppercase text-paragraph">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GrowthDashboard;
