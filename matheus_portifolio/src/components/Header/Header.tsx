"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../NavBar";

function Header() {
  return (
    <header className="h-[15vh] bg-slate-950 blue flex flex-row px-[10%] items-center justify-between">
      <Link href={"https://github.com/M12gthb"}>
        <Image
          src={"/Icon2.png"}
          width={70}
          height={70}
          alt=""
          className="cursor-pointer"
        />
      </Link>
      {/* <h1 className="inline-block text-gradient text-stroke ">
          Matheus Barros
        </h1> */}
      <NavBar />
    </header>
  );
}

export default Header;
