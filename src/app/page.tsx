import Link from "next/link";

export default function Home() {
  return (
    <main className="px-[10%] mb-40">
      <div className="bg-[#f1f8fa] p-10 m-auto">
        <h1 className="text-5xl mb-4">🙂 Hi, I am Iyanu</h1>
        <p className="text-xl">
          I am a web developer from Nigeria. Currently a student od Afe Babalola
          University. In my spare time I enjoy studying, sleeping, gaming and
          building my own projects. My preferred tools are Tailwind, Typescript,
          Nodejs, Express and Next.js.
        </p>
        <p className="text-xl">
          I am on{" "}
          <Link className="text-[#4B6CC1]" href={"https://github.com/Aiyanu/"}>
            Github
          </Link>
          ,{" "}
          <Link
            className="text-[#4B6CC1]"
            href={"https://www.linkedin.com/mwlite/in/adesanya-iyanu-96a5aa243"}
          >
            Twitter
          </Link>{" "}
          and{" "}
          <Link className="text-[#4B6CC1]" href={"https://twitter.com/A1yanu"}>
            Linkedin
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
