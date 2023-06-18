import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-[10%] md:mt-[15%] before:block before:h-2 before:bg-[#ddd] before:mt-4 before:mb-4 before:rounded-md before:mx-auto">
      <div className="flex justify-between items-center">
        <p>© 2023 Aiyanu</p>
        <p>
          Built with{" "}
          <Link className=" text-pink-600 " href={"vercel.com"}>
            Nextjs
          </Link>
        </p>
      </div>
    </footer>
  );
}
