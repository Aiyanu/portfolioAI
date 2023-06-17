import React from "react";
import Profile from "public/profile.jpg"
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "600", subsets: ["latin"] });

export default function Header() {
    return (
      <header className={" flex items-center ml-8 w-full mt-8 "+rubik.className}>
        <div className="cursor-pointer mr-10">
          <Link href={"/"}>
            <Image className="rounded-full" width={100} height={100} src={Profile} alt="profile"></Image>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-4xl">AIYANU</h1>
          <div className=" rounded-md w-9 h-2 bg-[#4B6CC1]" />
          <Navbar />
        </div>
      </header>
    );
}
