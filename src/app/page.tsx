"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
