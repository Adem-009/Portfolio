import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#131515] min-h-full relative  ">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
