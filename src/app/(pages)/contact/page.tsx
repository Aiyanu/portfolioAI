import React from "react";
import { rubik } from "@/app/layout";
import { redirect } from "next/navigation";
import Image from "next/image";

async function handleSubmit(data: FormData) {
  "use server";
  const name = data.get("name")?.valueOf();
  const email = data.get("email")?.valueOf();
  const message = data.get("message")?.valueOf();

  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid title");
  }
  if (typeof email !== "string" || email.length === 0) {
    throw new Error("Invalid title");
  }
  if (typeof message !== "string" || message.length === 0) {
    throw new Error("Invalid title");
  }
  // await prisma.form.create({data:{name,email,message}})

  // console.log(name,email,message);
  redirect("/");
}

export default async function Contact() {
  return (
    <main
      className={`${rubik.className} px-[10%] flex flex-col gap-8 mt-8`}
    >
      <div className="mx-auto card flex item-center justify-center gap-8 flex-row shadow-2xl w-3/6">
        <form action={handleSubmit} className={`card-body flex flex-col gap-4`}>
          <h1 className="capitalize text-2xl card-title">{"let's"} keep in touch</h1>
          <input
            name="name"
            type="text"
            placeholder="name"
            className={`border-2 p-4 border-gray-500`}
          />
          <input
            name="subject"
            type="text"
            placeholder="subject"
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
          <button className="btn bg-[#4b6cc1]" type="submit">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
