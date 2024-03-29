import React from "react";
import Link from "next/link";
import { rubik } from "@/app/layout";

export default function Projects() {
  return (
    <main className={`${rubik.className} px-[10%] mt-8`}>
      <h1 className="text-4xl uppercase  mb-8 text-center md:text-left">
        Projects
      </h1>
      {/* <div className="flex flex-col lg:flex-row items-center gap-12 justify-around"> */}
      <div className="grid lg:grid-flow-row gap-16  place-items-center max-md:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1">
        <Link
          className={`flex-1 grayscale hover:grayscale-0 border-4 border-[#bbb] rounded-md w-72 h-96 bg-cover relative hover:text-[#4b6cc1]`}
          href={"https://aicocktaildb.netlify.app/"}
          style={{
            backgroundImage: `url("/project1.png")`,
          }}
          target="_blank"
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            CocktailDB
          </span>
        </Link>
        <Link
          className={`flex-1 grayscale hover:grayscale-0 border-4 border-[#bbb] rounded-md w-72 h-96 bg-cover relative hover:text-[#4b6cc1]`}
          href={"https://ai-admin-dash-ui.netlify.app/"}
          style={{
            backgroundImage: `url("/project2.png")`,
          }}
          target="_blank"
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            Admin Dashboard
          </span>
        </Link>
        <Link
          className={`flex-1 grayscale hover:grayscale-0 border-4 border-[#bbb] rounded-md w-72 h-96 bg-cover relative hover:text-[#4b6cc1]`}
          href={"https://ai-food-ordering-app.vercel.app/"}
          style={{
            backgroundImage: `url("/project3.png")`,
          }}
          target="_blank"
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            Food Ordering app
          </span>
        </Link>
        <Link
          className={`flex-1 grayscale hover:grayscale-0 border-4 border-[#bbb] rounded-md w-72 h-96 bg-cover relative hover:text-[#4b6cc1]`}
          href={"https://airbnb-clone-5f1eb9.netlify.app/"}
          style={{
            backgroundImage: `url("/assets/project4.png")`,
          }}
          target="_blank"
        >
          <span className="absolute right-2 bottom-2 text-4xl font-bold">
            Airbnb Clone
          </span>
        </Link>
      </div>
    </main>
  );
}
