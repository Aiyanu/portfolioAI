import React from "react";
import Link from "next/link";
import { rubik } from "@/app/layout";

export default function Projects() {
  return (
    <div className={`${rubik.className}`}>
      <h1 className="text-4xl uppercase ml-4 mb-8">Projects</h1>
      <div className="flex flex-col lg:flex-row items-center gap-12 justify-around p-4">
        <Link
          className={` bg-no-repeat border-4 border-[#bbb] rounded-md w-72 h-96 bg-cover relative hover:text-[#4b6cc1]`}
          href={"$"}
          style={{
            backgroundImage: `url("/apps.jpg")`,
          }}
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            Blog
          </span>
        </Link>
        <Link
          className={`bg-[/website.jpg] border-4 border-[#bbb] rounded-md w-72 h-96 bg-cover relative hover:text-[#4b6cc1]`}
          href={"$"}
          style={{
            backgroundImage: `url("/illustration.png")`,
          }}
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            Blog
          </span>
        </Link>
        <Link
          className={` bg-no-repeat border-4 border-[#bbb] rounded-md w-72 h-96 bg-cover relative hover:text-[#4b6cc1]`}
          href={"$"}
          style={{
            backgroundImage: `url("/websites.jpg")`,
          }}
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            Blog
          </span>
        </Link>
      </div>
    </div>
  );
}
