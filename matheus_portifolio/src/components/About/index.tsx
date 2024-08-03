"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Techs from "../Techs";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <>
      <section
        id="about"
        className="w-full md:h-[65vh] italic text-3xl md:text-5xl flex flex-col md:items-center justify-center gap-5 p-2 md:pt-[200px] pt-[180px]"
      >
        <Avatar className="border-2 border-[#8a2dc9a3] w-[100px] h-[100px]">
          <AvatarImage src="/Avatar.jpg" />
          <AvatarFallback>Matheus Barros</AvatarFallback>
        </Avatar>
        <h1 className="text-gray-400 animate-slide-down">Hello, my name is</h1>
        <span className="flex md:justify-center items-center md:w-[500px] text-gradient text-stroke animate-slide-right-left">
          Matheus Barros
        </span>
        <h1 className="text-cyan-600 animate-slide-left-rigth">
          Desenvolvedor web Full Stack
        </h1>
        <div className="flex items-center gap-3">
          <a
            href="/Matheus Barros Rodrigues Currículo - V5.pdf"
            download="CV-Matheus-Barros.pdf"
            className="text-cyan-500 text-xs w-[140px] py-[10px] rounded-full border-4 border-violet-950 flex items-center justify-center"
          >
            Download resume
          </a>
          <a
            href="https://github.com/M12gthb/Matheus_Barros_Portif-lioDev"
            className="bg-white rounded-full flex"
          >
            <FaGithub className="bg-white h-9 w-9 rounded-full border-x-2 hover:border-black hover:bg-black hover:text-white border-white " />
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
