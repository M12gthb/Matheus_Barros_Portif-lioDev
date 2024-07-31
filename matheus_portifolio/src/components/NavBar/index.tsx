"use client";
import React from "react";
import useMedia from "use-media";
import { Menubar } from "@/components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";

const NavBar = () => {
  const isWide = useMedia({ minWidth: "1024px" });

  if (isWide) {
    return (
      <Menubar className="border-none animate-slide-down flex flex-row gap-4 italic text-xl text-gradient ">
        <button className="text-cyan-200 hover:inline-block hover:text-stroke flex flex-row gap-2 items-center">
          About
          <IoMdInformationCircleOutline />
        </button>
        <Link
          className="text-cyan-200 hover:inline-block hover:text-stroke flex flex-row gap-2 items-center"
          href={""}
        >
          Techs
          <MdOutlineIndeterminateCheckBox />
        </Link>
        <button className="text-cyan-200 hover:inline-block hover:text-stroke flex flex-row gap-2 items-center">
          Projects
          <GoProjectSymlink />
        </button>
        <button className="text-cyan-200 hover:inline-block hover:text-stroke flex flex-row gap-2 items-center">
          Contact
          <RiContactsLine />
        </button>
        <button className="text-cyan-200 hover:inline-block hover:text-stroke flex flex-row gap-2 items-center">
          Social Media
          <IoShareSocialOutline />
        </button>
      </Menubar>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-slate-900 h-12 w-12 flex flex-row items-center justify-center text-slate-700 rounded-[6px]">
          <RiMenuFill className="h-6 w-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-none flex flex-col w-[100vw] items-end gap-5 pt-6 pr-[10%] italic">
          <button className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center">
            About
            <IoMdInformationCircleOutline />
          </button>
          <button className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center">
            Techs
            <MdOutlineIndeterminateCheckBox />
          </button>
          <button className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center">
            Projects
            <GoProjectSymlink />
          </button>
          <button className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center">
            Contacts
            <RiContactsLine />
          </button>
          <button className="text-cyan-200 hover:inline-block hover:text-stroke animate-slide-right-left flex flex-row gap-3 items-center justify-center">
            Social Media
            <IoShareSocialOutline />
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

export default NavBar;
