import React from "react";
import { techsItens } from "@/app/data/techsItens";
import Image from "next/image";

function Techs() {
  return (
    <ul
      id="techs"
      className="h-[120px]  md:h-[200px] md:pt-[100px] overflow-x-scroll md:overflow-x-hidden w-[100%] flex items-center gap-6"
    >
      {techsItens.map((element, index) => (
        <li
          key={index}
          className="image-shadow animate-float flex items-center flex-col relative group min-w-[50px]"
        >
          <p className="text-gray-200 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full mb-2">
            {element.name}
          </p>
          <Image
            width={100}
            height={200}
            src={element.href}
            alt={element.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default Techs;
