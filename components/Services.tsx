'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function Services() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const services = [
    {
      id: '01',
      title: 'Landing Page Development',
      description:
        'Crafting fast, high-converting, and pixel-perfect landing pages tailored to boost your business and engage users effectively.',
      
    },
    {
      id: '02',
      title: 'Figma to Code',
      description:
        'Translating your Figma or UI designs into clean, maintainable, and interactive React & Next.js code with zero compromises.',
      
    },
    {
      id: '03',
      title: 'Modern Web Applications',
      description:
        'Building scalable, dynamic, and responsive web applications using modern technologies and front-end best practices.',
     
    },
   
  ];
  return (
    <section
      ref={targetRef}
      id="services"
      className="relative h-[400vh] bg-[#131515]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-12">
        <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-12 max-w-7xl mx-auto">
          <div className="w-full md:w-1/3 z-10 shrink-0">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
              What I Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight underline text-white mb-4">
              Services
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed hidden md:block">
              Explore the specialized front-end and web development solutions I
              provide to turn your ideas into high-quality products.
            </p>
          </div>

          <div className="w-full md:w-[570px] lg:w-[710px] overflow-hidden">
            <motion.div style={{ x }} className="flex gap-3 pr-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-[200px] sm:w-[420px] md:w-[280px] lg:w-[450px] h-[360px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center gap-2 lg:gap-0 lg:justify-between md:gap-10 shrink-0 hover:border-white/20 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row  justify-between items-center">
                    <span className="text-xl font-mono font-bold text-white/20 group-hover:text-white/40 transition-colors">
                      {service.id}
                    </span>
                   
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl  font-bold text-white mb-3 group-hover:text-zinc-200">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
