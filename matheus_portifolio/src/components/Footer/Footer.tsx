"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";

function Footer() {
  return (
    <footer className="min-h-[15vh]  py-2 gap-5 bg-slate-950 blue flex flex-col md:flex-row px-[10%] items-center md:justify-between w-[100%] z-50">
      <button
        className="text-white cursor-pointer flex items-center flex-warp gap-2"
        onClick={() =>
          (window.location.href =
            "https://api.whatsapp.com/send?phone=+55+88999999443&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os")
        }
      >
        <Avatar className="border-2 border-[#8a2dc9a3] w-[50px] h-[50px]">
          <AvatarImage src="/Avatar.jpg" />
          <AvatarFallback>Matheus Barros</AvatarFallback>
        </Avatar>
        +5588999999443
      </button>

      <ul className="flex items-center flex-col justify-center gap-2">
        <FaGithub
          onClick={() => (window.location.href = "https://github.com/M12gthb")}
          className="bg-white  w-[40px] h-[40px] rounded-full border-x-2 hover:border-black hover:bg-black hover:text-white border-white "
        />
      </ul>
    </footer>
  );
}

export default Footer;
