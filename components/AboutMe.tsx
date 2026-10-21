'use client';
import { CometCard } from '@/components/ui/comet-card';
export default function AboutMe() {
  return (
    <section
      id="about"
      className="h-[700px] sm:h-[810px] md:h-[480px] lg:h-[500px] flex flex-col lg:flex-row justify-around   items-center "
    >
      <div className="flex flex-col items-start md:items-start w-full max-w-150 gap-3 p-4   ">
        <h1 className="text-white text-5xl font-bold tracking-tight underline">
          About Me
        </h1>

        <div>
          <p className="text-white flex flex-col items-start text-start md:text-start text-xl font-normal">
            Hello! I&apos;m Adem, I build fast, responsive, and intuitive web
            interfaces that deliver exceptional user experiences. Specializing
            in converting design files into clean, functional React and Next.js
            code.
          </p>
        </div>
      </div>
      <div className="flex justify-center mr-1 ml-1 ">
        <CometCard className="bg-[#131515]/90 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col gap-5">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1.5">
                Developer Profile
              </span>
              <h3 className="text-2xl font-bold text-white mb-1">Adem</h3>
              <p className="text-sm text-zinc-400">Front-End Developer</p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs text-zinc-300 block mb-3 font-medium">
                Core Tech Stack:
              </span>

              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'Next.js',
                  'Tailwind',
                  'TypeScript',
                  'Figma to Code',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs bg-white/10 text-white rounded-lg border border-white/10 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CometCard>
      </div>
    </section>
  );
}
