import React from "react";

export type DistantPlanetProps = {
  id: number;
  size: number;
  /** feTurbulence base frequency in a 100-unit box: low x + high y gives gas-giant bands. */
  freq: string;
  seed: number;
  /** Gold-family palette, one table per channel. */
  r: string;
  g: string;
  b: string;
  glow: string; // r,g,b of the atmosphere
  ring?: boolean;
};

// A small planet: noise texture mapped through a palette, lit from the top left with a dark
// far side, an atmosphere rim and an outer glow. Static SVG, so five of them cost nothing.
export default function DistantPlanet({ id, size, freq, seed, r, g, b, glow, ring }: DistantPlanetProps) {
  return (
    <span
      className="relative block rounded-full"
      style={{ width: size, height: size, boxShadow: `0 0 ${size * 0.55}px ${size * 0.08}px rgba(${glow},0.4)` }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" className="block">
        <defs>
          <filter id={`dp-t${id}`} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="4" seed={seed} />
            <feColorMatrix type="matrix" values="1 0 0 0 0  1 0 0 0 0  1 0 0 0 0  0 0 0 0 1" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues={r} />
              <feFuncG type="table" tableValues={g} />
              <feFuncB type="table" tableValues={b} />
            </feComponentTransfer>
          </filter>
          <clipPath id={`dp-c${id}`}>
            <circle cx="50" cy="50" r="50" />
          </clipPath>
          <radialGradient id={`dp-s${id}`} cx="32%" cy="28%" r="88%">
            <stop offset="0.35" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.88" />
          </radialGradient>
          <radialGradient id={`dp-r${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0.78" stopColor={`rgb(${glow})`} stopOpacity="0" />
            <stop offset="1" stopColor={`rgb(${glow})`} stopOpacity="0.6" />
          </radialGradient>
          <radialGradient id={`dp-h${id}`} cx="30%" cy="26%" r="30%">
            <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g clipPath={`url(#dp-c${id})`}>
          <rect width="100" height="100" fill="#000" filter={`url(#dp-t${id})`} />
          <circle cx="50" cy="50" r="50" fill={`url(#dp-s${id})`} />
          <circle cx="50" cy="50" r="50" fill={`url(#dp-h${id})`} />
          <circle cx="50" cy="50" r="50" fill={`url(#dp-r${id})`} />
        </g>
      </svg>
      {ring && (
        <span
          className="absolute left-1/2 top-1/2 h-[26%] w-[175%] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] rounded-[50%] border-2 border-[#ffd9a0]/45"
          style={{ boxShadow: `0 0 ${size * 0.12}px rgba(${glow},0.35)` }}
        />
      )}
    </span>
  );
}
