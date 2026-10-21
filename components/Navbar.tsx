'use client';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
const menuVariants = {
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
} as const;
export default function Navbar() {
  const { scrollYProgress } = useScroll();

  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav
      id="nav"
      className="flex justify-between text-xl items-center fixed  h-16 w-full bg-[#131515]/80 backdrop-blur-md border-b border-white/10 z-50 "
    >
      <Image src={'/LoGO-white.png'} alt="" width={100} height={100} />
      <div className="hidden sm:flex md:flex justify-around w-150 font-bold text-white ">
        {navLinks.map((link, index) => {
          return (
            <a key={index} href={link.href}>
              {link.name}
            </a>
          );
        })}
        <Link href={'/contact'}>Contact</Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden md:hidden z-50 p-2 text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 flex flex-col justify-center items-center gap-8 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} //
                className="text-3xl font-semibold text-white hover:text-gray-400 transition"
              >
                {link.name}
              </a>
            ))}
            <Link className='text-3xl font-semibold text-white hover:text-gray-400 transition' href={'/contact'}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          backgroundColor: 'white',
        }}
      />
    </nav>
  );
}
