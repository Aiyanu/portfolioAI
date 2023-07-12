import React, { useEffect, useState } from "react";
import Profile from "public/profile1.jpeg";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { rubik } from "@/app/layout";
import ThemeButton from "./ThemeButton";

export default function Header() {
  
  return (
    <header
      className={
        " flex items-center mt-8 flex-col md:flex-row justify-start gap-4 px-[10%]  " +
        rubik.className
      }
    >
      <div className="cursor-pointer flex md:justify-start items-center gap-8">
        <Link href={"/"}>
          <Image
            className="rounded-full"
            width={100}
            height={100}
            src={Profile}
            alt="profile"
          />
        </Link>
        <div>
          <h1 className=" text-4xl flex item-center gap-8">
            <Link href={"/"}>AIYANU</Link>
            {/* <ThemeButton/> */}
          </h1>
          <div className=" rounded-md w-9 h-2 bg-[#4B6CC1]" />
          <div className="lg:block hidden">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <Navbar />
      </div>
    </header>
  );
}
