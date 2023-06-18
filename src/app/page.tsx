import Link from "next/link";

export default function Home() {
  return (
    <main className="px-[10%]">
      <div className="bg-[#f1f8fa] p-10 m-auto">
        <h1 className="text-5xl mb-4">🙂 Hi, I am Iyanu</h1>
        <p className="text-xl">
          I am a web developer from Nigeria. Currently a student od Afe Babalola University. In my spare time I enjoy DIY, gaming and
          building my own projects. My preferred tools are tailwind, Nodejs and
          Next.js.
        </p>
        <p>
          I am on{" "}
          <Link className="text-[#4B6CC1]" href={"https://github.com/Aiyanu/"}>
            Github
          </Link>
          ,{" "}
          <Link className="text-[#4B6CC1]" href={"#"}>
            Twitter
          </Link>{" "}
          and{" "}
          <Link className="text-[#4B6CC1]" href={"#"}>
            Linkedin
          </Link>.
        </p>
      </div>
    </main>
  );
}
