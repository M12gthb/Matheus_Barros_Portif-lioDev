"use client";
import React, { useState } from "react";
import useMedia from "use-media";
import { Menubar } from "@/components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiMenuFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineBiotech } from "react-icons/md";

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NavBar = () => {
  const isWide = useMedia({ minWidth: "1024px" });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      scrollToElement(id);
    }, 100);
  };

  if (isWide) {
    return (
      <Menubar className="border-none animate-slide-down flex flex-row gap-4 italic text-xl text-gradient h-[100%]">
        <button
          className="text-cyan-200 hover:inline-block hover:text-stroke flex flex-row gap-2 items-center"
          onClick={() => scrollToElement("about")}
        >
          About
          <IoMdInformationCircleOutline />
        </button>
        <button
          className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center"
          onClick={() => scrollToElement("techs")}
        >
          Techs
          <MdOutlineBiotech />
        </button>
        <button
          className="text-cyan-200 hover:inline-block hover:text-stroke flex flex-row gap-2 items-center"
          onClick={() => scrollToElement("projects")}
        >
          Projects
          <GoProjectSymlink />
        </button>
        <button
          className="text-cyan-200 hover:inline-block hover:text-stroke flex flex-row gap-2 items-center"
          onClick={() => scrollToElement("contacts")}
        >
          Contacts
          <RiContactsLine />
        </button>
      </Menubar>
    );
  } else {
    return (
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger className="bg-slate-900 h-12 w-12 flex flex-row items-center justify-center text-slate-700 rounded-[6px]">
          <RiMenuFill className="h-6 w-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-none flex flex-col w-[100vw] items-end gap-5 pt-6 pr-[10%] italic">
          <button
            className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center"
            onClick={() => handleMenuItemClick("about")}
          >
            About
            <IoMdInformationCircleOutline />
          </button>
          <button
            className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center"
            onClick={() => handleMenuItemClick("techs")}
          >
            Techs
            <MdOutlineBiotech />
          </button>
          <button
            className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center"
            onClick={() => handleMenuItemClick("projects")}
          >
            Projects
            <GoProjectSymlink />
          </button>
          <button className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center">
            Contacts
            <RiContactsLine />
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export default NavBar;
