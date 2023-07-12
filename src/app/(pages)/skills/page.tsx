import Image from "next/image";
import React from "react";

import { rubik } from "@/app/layout";

const images = [
  {
    name: "html",
    link:"/assets/HTML.png"
  },
  {
    name: "css",
    link:"/assets/CSS.svg"
  },
  {
    name: "javascript",
    link:"/assets/JAVASCRIPT.png"
  },
  {
    name: "tailwind",
    link:"/assets/TAILWIND.png"
  },
  {
    name: "react",
    link:"/assets/REACT.png"
  },
  {
    name: "typescript",
    link:"/assets/TYPESCRIPT.svg"
  },
  {
    name: "nextjs",
    link:"/assets/NEXTJS.svg"
  },
  {
    name: "supabase",
    link:"/assets/SUPABASE.png"
  },
  {
    name: "t3",
    link:"/assets/T3.svg"
  },
  {
    name: "github",
    link:"/assets/GITHUB.png"
  },
]

export default function Work() {
  return (
    <main className={`${rubik.className} mt-8 px-[10%]`}>
      <h2 className="text-4xl uppercase  mb-8 text-center md:text-left">
        Skills
      </h2>
      <section className="grid lg:grid-flow-row gap-8  place-items-center max-md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1  ">
        {images &&
          images.map((image) => (
            <div
              className="grid grid-cols-2 gap-8 shadow-2xl p-6 bg-base-200 border-none rounded-lg d w-60 h-32 place-items-center transition-transform hover:scale-105"
              key={`${image.name + image.link}`}
            >
              <Image
                className="flex-1"
                width={110}
                height={110}
                src={image.link}
                alt={image.name}
              />
              <p className="uppercase flex-none">{image.name}</p>
            </div>
          ))}
      </section>
    </main>
  );
}
