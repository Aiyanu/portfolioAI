import Link from "next/link";

export default function Navbar() {
    return <nav className={"text-[18px] font-semibold"}>
        <ul className="uppercase flex gap-8 text-2xl text-[#5E5E5E]">
            <li>
                <Link href={"/work"}>work</Link>
            </li>
            <li>
                <Link href={"/project"}>project</Link>
            </li>
            <li>
                <Link href={"/contact"}>contact</Link>
            </li>
      </ul>
  </nav>;
}
