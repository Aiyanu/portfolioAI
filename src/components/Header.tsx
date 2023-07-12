"use client"
import React, { useEffect, useState } from "react";
import Profile from "public/profile1.jpeg";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { rubik } from "@/app/layout";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage?.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    if (localTheme) {
      // add custom data-theme attribute to html tag required to update theme using DaisyUI
      document.querySelector("html")?.setAttribute("data-theme", localTheme);
    }
  }, [theme]);
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
            <div className="flex-none">
              {/* Toggle button here */}
              <button className="btn btn-square btn-ghost">
                <label className="swap swap-rotate w-12 h-12">
                  <input
                    type="checkbox"
                    onChange={handleToggle}
                    // show toggle image based on localstorage theme
                    checked={theme === "light" ? false : true}
                  />
                  {/* light theme sun image */}
                  <p className="w-8 h-8 swap-on">☀️</p>
                  {/* dark theme moon image */}
                  <p className="w-8 h-8 swap-off">🌙</p>
                </label>
              </button>
            </div>
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
