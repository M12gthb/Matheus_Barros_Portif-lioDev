import About from "@/components/About";
import Projects from "@/components/Projects";
import Techs from "@/components/Techs";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-black min-h-[85vh]">
      <About />
      <Techs />
      <Projects />
    </main>
  );
}
