import Link from "next/link";

export default function Navbar() {
    return <nav className={"text-[18px] font-semibold"}>
        <ul className="uppercase flex gap-8 text-2xl text-[#5E5E5E]">
            <li className=" hover:text-[#4B6CC1]">
                <Link href={"/work"}>work</Link>
            </li>
            <li className=" hover:text-[#4B6CC1]">
                <Link href={"/projects"}>projects</Link>
            </li>
            <li className=" hover:text-[#4B6CC1]">
                <Link href={"/contact"}>contact</Link>
            </li>
      </ul>
  </nav>;
}
