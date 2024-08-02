"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="flex items-center mt-8 gap-2 flex-col animate-slide-down pb-3"
    >
      <h1 className="text-3xl text-gray-300 font-bold">Contacts</h1>
      <p className="text-base text-gray-400">
        Contact me for more information :
      </p>
      <div className="mt-2 flex flex-col md:flex-row items-center gap-5">
        <button
          className="text-white cursor-pointer flex items-center flex-col gap-1"
          onClick={() => (window.location.href = "mailto:mat43214@gmail.com")}
        >
          <SiGmail className="text-white rounded-sm w-[150px] h-[120px] bg-red-800 hover:text-red-800 hover:bg-white" />
          E-mail
        </button>
        <button
          className="text-white cursor-pointer flex items-center flex-col gap-1"
          onClick={() =>
            (window.location.href =
              "https://api.whatsapp.com/send?phone=+55+88999999443&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os")
          }
        >
          <FaWhatsapp className="text-white rounded-sm w-[150px] h-[120px] bg-lime-600 hover:text-lime-600 hover:bg-white" />
          Whatsapp
        </button>
        <button
          className="text-white cursor-pointer flex items-center flex-col gap-1"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/matheus-barros-959532193/")
          }
        >
          <TfiLinkedin className="text-white rounded-sm w-[150px] h-[120px] bg-cyan-800 hover:text-cyan-800 hover:bg-white" />
          Linkedin
        </button>
        <button
          className="text-white cursor-pointer flex items-center flex-col gap-1"
          onClick={() =>
            (window.location.href = "https://www.instagram.com/mat_brd12/")
          }
        >
          <FaInstagram className="text-white rounded-sm w-[150px] h-[120px] bg-pink-600 hover:text-pink-600 hover:bg-white" />
          Instagram
        </button>
        <button
          className="text-white cursor-pointer flex items-center flex-col gap-1"
          onClick={() =>
            (window.location.href =
              "https://www.youtube.com/channel/UCrRzsaxqHwKwL3nNZqmtkeA")
          }
        >
          <FaYoutube className="text-white rounded-sm w-[150px] h-[120px] bg-red-600 hover:text-red-600 hover:bg-white" />
          Youtube
        </button>
      </div>
    </div>
  );
};

export default Contacts;
