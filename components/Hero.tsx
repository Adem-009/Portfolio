'use client';
import { KineticText } from '@/components/ui/kinetic-text';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col gap-1 w-full  overflow-hidden relative justify-center min-h-screen  h-[800px] md:h-[100vh]  "
    >
      <h1 className="text-7xl sm:text-8xl md:text-[150px] lg:text-[200px] mb-0 my-10 leading-none flex  justify-center text-white font-bold">
        I&apos;m Adem
      </h1>
      <div className="flex flex-col items-center  ">
        <KineticText
          className="text-3xl md:text-5xl lg:text-7xl  mt-0   text-white font-semibold"
          text="Front-End Developer"
        />
        <div className="flex flex-col md:flex-row  justify-center items-center md:justify-center  lg:flex-row  gap-10 my-5 w-full max-w-3xl">
          <a href="#projects" className="w-full max-w-70">
            {' '}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white  text-black font-bold text-xl cursor-pointer rounded-lg p-3 flex  w-full justify-between items-center  max-w-70"
            >
              Explore Projects
            </motion.button>
          </a>
          <a
            href="https://github.com/Adem-009"
            className=" w-full max-w-70  md:max-w-40"
            target='_blank'
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xl cursor-pointer rounded-lg p-3 flex  w-full justify-between items-center max-w-70  md:max-w-40 "
            >
              GitHub
              <Image
                src="/github-logo.png"
                alt=""
                width={30}
                height={30}
                className=""
              />
            </motion.button>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/adem-benyoucef-478645445/" className='max-w-70 md:max-w-40 w-full'>
            {' '}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xl cursor-pointer rounded-lg p-3 flex  w-full justify-between items-center max-w-70 md:max-w-40"
            >
              LinkedIn
              <Image
                src="/Linkde-icon.png"
                alt=""
                width={30}
                height={30}
                className=""
              />
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}
