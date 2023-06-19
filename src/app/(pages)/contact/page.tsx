import React from "react";
import { rubik } from "@/app/layout";
import { redirect } from "next/navigation";
import { prisma } from "@/db";
import Image from "next/image";

async function handleSubmit(data: FormData) {
  "use server";
  const name = data.get("name")?.valueOf();
  const email = data.get("email")?.valueOf();
  const message = data.get("message")?.valueOf();

  // if (typeof name !== "string" || name.length === 0) {
  //   throw new Error("Invalid title");
  // }
  // if (typeof email !== "string" || email.length === 0) {
  //   throw new Error("Invalid title");
  // }
  // if (typeof message !== "string" || message.length === 0) {
  //   throw new Error("Invalid title");
  // }
  // await prisma.formData.create({ data: { name, email, message } });

  console.log(name,email,message);
  redirect("/");
}

export default function Contact() {
  return (
    <main
      className={`${rubik.className} px-[10%] flex flex-col gap-8 mb-8 mt-8`}
    >
      <h1 className="capitalize text-4xl">{"let's"} keep in touch</h1>
      <div className="flex item-center justify-around gap-8 flex-row max-sm:flex-col ">
        <div className=" h-96 flex-1  ">
          <Image
            width={400}
            height={400}
            className="object-contain"
            src={"/contact.png"}
            alt="contacts photo"
          />
        </div>
        <form action={handleSubmit} className={`flex flex-col flex-1 gap-4`}>
          <input
            name="name"
            type="text"
            placeholder="name"
            className={`border-2 p-4 border-gray-500`}
          />
          <input
            name="email"
            type="text"
            placeholder="email"
            className={`border-2 p-4 border-gray-500`}
          />
          <textarea
            name="message"
            className={`border-2 p-4 border-gray-500`}
            placeholder="message"
            cols={10}
            rows={5}
          ></textarea>
          <button className="w-24 rounded-lg p-4 bg-[#4b6cc1]" type="submit">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
