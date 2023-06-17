import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-[#f1f8fa] p-10">
        <h1 className="text-5xl mb-4">🙂 Hi, I'm Iyanu</h1>
        <p className="text-xl">
          I'm a web developer from Southampton, UK. Currently lead developer at
          a local agency, Fhoke. In my spare time I enjoy DIY, gaming and
          building my own projects. My preferred tools are PHP, Laravel and
          Vue.js.
        </p>
        <p>
          I'm on{" "}
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
