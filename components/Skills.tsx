'use client';

import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { ReactNode } from 'react';
interface BentoCardProps {
  children: ReactNode;
  className?: string;
}
function BentoCard({ children, className = '' }:BentoCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);



  return (
    <div
      
      className={`group relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#131515] relative px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-4xl font-bold text-white uppercase underline tracking-tight  block mb-2">
            Skills
          </span>
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
            Technologies & Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[330px] lg:auto-rows-[200px]">
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                Core Stack
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                React & Next.js 
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                Building scalable, production-ready web applications with
                server-side rendering, routing, and clean architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                {
                  name: 'Next.js',
                  icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
                },
                {
                  name: 'React',
                  icon: 'https://cdn.simpleicons.org/react/61DAFB',
                },
                {
                  name: 'TypeScript',
                  icon: 'https://cdn.simpleicons.org/typescript/3178C6',
                },
                {
                  name: 'JavaScript',
                  icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-xs font-medium text-zinc-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                Styling & UI
              </span>
              <h3 className="text-xl font-bold text-white">Modern Styling</h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {[
                {
                  name: 'Tailwind CSS',
                  icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
                },
                {
                  name: 'HTML5',
                  icon: 'https://cdn.simpleicons.org/html5/E34F26',
                },
                {
                  name: 'CSS3',
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-xs font-medium text-zinc-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                Animations
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Motion</h3>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 w-fit">
              <Image
                src="https://cdn.simpleicons.org/framer/0055FF"
                alt="Framer Motion"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-sm font-medium text-zinc-200">
                Framer Motion
              </span>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                Workflow & Hosting
              </span>
              <h3 className="text-xl font-bold text-white">
                Tools & Deployment
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              {[
                { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
                {
                  name: 'GitHub',
                  icon: 'https://cdn.simpleicons.org/github/ffffff',
                },
                {
                  name: 'VS Code',
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
                },
                {
                  name: 'Vercel',
                  icon: 'https://cdn.simpleicons.org/vercel/ffffff',
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-xs font-medium text-zinc-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
