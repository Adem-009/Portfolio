'use client';
import { PinContainer } from './ui/3d-pin';
export default function Projects() {
  const MyProjects = [
    { mainTitle: 'Sweet Shop', image: '', desc: 'E-Commerce Page List', linkTitel: '/Sweet Shop', link: '/https://sweet-shop1-rho.vercel.app/' },
   
  ];
  return (
    <section
      id="projects"
      className="py-24 bg-[#131515] relative gap-5 px-6 md:px-12 flex flex-col items-center  "
    >
      <div>
        {' '}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 underline ">
          Projects
        </h1>
       
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-15">
        {MyProjects.map((project,index)=>{
          return(
            <PinContainer key={index}
          title={project.linkTitel}
          href={project.link}
          containerClassName="w-full flex items-center justify-center"
        >
          <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] p-4 rounded-2xl  hover:border-white/20 transition-all duration-300">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-white">
              {project.mainTitle}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-zinc-400">
                {project.desc}
              </span>
            </div>

            <div className="flex flex-1 w-full rounded-lg mt-4 bg-[#131515] border border-white/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </PinContainer>
          )
        })}
        
      </div>
    </section>
  );
}
