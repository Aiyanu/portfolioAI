import React from "react";
import Profile from "public/profile.jpg";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: "600", subsets: ["latin"] });

export default function Header() {
  return (
    <header
      className={" flex items-center md:ml-8 mb-24 mt-8 flex-col md:flex-row justify-start gap-4  " + rubik.className}
    >
      <div className="cursor-pointer md:ml-20 mr-10 flex md:justify-start items-center gap-8">
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
          <h1 className=" text-4xl">
            <Link href={"/"}>AIYANU</Link>
          </h1>
          <div className=" rounded-md w-9 h-2 bg-[#4B6CC1]" />
          <div className="lg:block hidden">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="lg:block">
        <Navbar />
      </div>
    </header>
  );
}
