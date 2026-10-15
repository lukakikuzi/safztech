"use client";

import { useEffect, useRef } from "react";

// Only the top cap of the planet is ever on screen, so the shader draws just that slice.
const CAP = 440; // css px
const VISIBLE = 280; // css px of the planet that rises above the hero's bottom edge
const D = "min(1700px, 140vw)"; // planet diameter

const VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";

// Domain-warped fbm gives the flowing lava marble. The field is rotated around the cursor
// (a stir that eases back out), and the cursor doubles as the light source.
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_res;uniform float u_d;uniform float u_time;uniform vec2 u_mouse;uniform float u_hover;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.02+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  float R=u_d*.5;
  vec2 fc=gl_FragCoord.xy;
  vec2 p=vec2((fc.x-u_res.x*.5)/R,1.-(u_res.y-fc.y)/R);
  float r=length(p);
  if(r>1.){gl_FragColor=vec4(0.);return;}
  float z=sqrt(max(0.,1.-r*r));
  vec2 q=p*(1.+(1.-z)*.55)*2.4;
  float t=u_time*.035;
  vec2 m=u_mouse*2.4;
  vec2 d=q-m;
  float f=exp(-dot(d,d)*.35)*u_hover;
  float ang=f*3.2;
  q=m+mat2(cos(ang),-sin(ang),sin(ang),cos(ang))*d;
  vec2 w1=vec2(fbm(q+t),fbm(q+vec2(5.2,1.3)-t));
  vec2 w2=vec2(fbm(q+3.*w1+vec2(1.7,9.2)+t*1.3),fbm(q+3.*w1+vec2(8.3,2.8)-t*1.1));
  float n=fbm(q+4.*w2);
  float v=.5+.5*sin(n*11.+w2.x*5.);
  vec3 deep=vec3(.62,.2,0.),orange=vec3(1.,.5,0.),gold=vec3(1.,.78,.08),pale=vec3(1.,.94,.55);
  vec3 col=mix(deep,orange,smoothstep(.2,.7,n));
  col=mix(col,gold,smoothstep(.55,.95,v)*.8);
  col=mix(col,pale,smoothstep(.85,1.,v*n*1.6)*.7);
  col*=mix(.5,1.12,n);
  vec3 L=normalize(vec3(mix(vec2(-.35,.8),u_mouse,u_hover*.9),.75));
  col*=.22+.85*clamp(dot(vec3(p,z),L),0.,1.);
  col+=vec3(1.,.62,.12)*exp(-length(p-vec2(0.,.62))*2.6)*.4;
  col+=vec3(1.,.72,.2)*pow(1.-z,2.4)*.85;
  float a=smoothstep(1.,.992,r);
  gl_FragColor=vec4(min(col,1.)*a,a);
}`;

export default function HeroPlanet() {
  const host = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = cv.current;
    const box = host.current;
    if (!canvas || !box) return;
    const gl = canvas.getContext("webgl", { premultipliedAlpha: true, antialias: false });
    if (!gl) return; // the CSS gradient on the host stays as the fallback

    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = U("u_res"), uD = U("u_d"), uTime = U("u_time"), uMouse = U("u_mouse"), uHover = U("u_hover");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    let diameter = 0;
    const resize = () => {
      const w = box.getBoundingClientRect().width;
      diameter = w;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(CAP * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);

    let mx = -0.35, my = 0.8, tx = mx, ty = my;
    let hover = 0, hoverTarget = 0, stir = 0, idle = 0;
    const onMove = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (r.top + r.width / 2 - e.clientY) / (r.width / 2);
      const cx = Math.max(-1, Math.min(1, nx));
      const cy = Math.max(0.3, Math.min(1, ny));
      stir += Math.hypot(cx - tx, cy - ty);
      tx = cx;
      ty = cy;
      hoverTarget = 1;
      clearTimeout(idle);
      idle = window.setTimeout(() => (hoverTarget = 0), 2500);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    let visible = true;
    const t0 = performance.now();
    const draw = (now: number) => {
      mx += (tx - mx) * 0.07;
      my += (ty - my) * 0.07;
      hover += (hoverTarget - hover) * 0.05;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uD, diameter * dpr);
      gl.uniform1f(uTime, (now - t0) / 1000 + stir * 3);
      gl.uniform2f(uMouse, mx, my);
      gl.uniform1f(uHover, hover);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible && !reduce) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    });
    io.observe(box);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idle);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={host}
      aria-hidden
      className="intro-planet pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_6%,#ffb300,#c24a00_30%,#1a0a00_70%)] shadow-[0_0_70px_8px_rgba(255,140,0,0.55),0_0_190px_30px_rgba(255,110,0,0.22)]"
      style={{ width: D, aspectRatio: "1", bottom: `calc(${VISIBLE}px - ${D})` }}
    >
      <canvas ref={cv} className="absolute left-0 top-0 w-full" style={{ height: CAP }} />
    </div>
  );
}
