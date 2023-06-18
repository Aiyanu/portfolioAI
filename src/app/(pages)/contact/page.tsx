import React from "react";
import { rubik } from "@/app/layout";
import { redirect } from "next/navigation";

async function handleSubmit(data:FormData) {
  "use client"
  console.log("submitted")
  redirect("/")
}

export default function Contact() {
  return (
    <main className={`${rubik.className}`}>
      {/* <form action={handleSubmit} className="flex flex-col">
        <div className="flex gap-4">
          <label htmlFor="name">Name</label>
          <input
            className="border"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Your Name" name="email" />
        </div>
        <div className=" flex-1 flex items-center">
          <label htmlFor="desc">Message</label>
          <textarea name="desc" cols={20} rows={5} placeholder="Enter message"></textarea>
        </div>
        <button type="submit" className="rounded-lg w-20 p-5 bg-teal-300">Submit</button>
      </form> */}
    </main>
  );
}
