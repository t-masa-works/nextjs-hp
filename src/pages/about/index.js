import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="p-5">
      <div className="sm:flex justify-center mt-5 gap-8">
        <div className="grid place-items-center gap-5 sm:gap-0">
          <h2 className="font-bold text-xl">自己紹介</h2>
          <p>
            1987年5月24日生まれ群馬県出身
            <br />
            農業3年介護14年を経験。
          </p>
          <p>Web業界へ進出すべく鋭意学習中</p>
        </div>
        <div>
          <Image
            className="mx-auto mt-8 sm:mt-0"
            src="/neko.png"
            width={250}
            height={250}
            alt="About Image"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-center mt-8 gap-8">
        <Image
          className="rounded-full mx-auto"
          src="/baby rabbit on keyboard.jpeg"
          width={250}
          height={250}
          alt="About Image"
        />
        <div className="grid place-items-center gap-5 sm:gap-0">
          <h2 className="font-bold text-xl">Message</h2>
          <p className="text-sm">
            静的なHTMLと、簡単な動的コーディング、
            <br />
            CSSで装飾したサイト作成ができます。
            <br />
          </p>
          <p>
            フォトレタッチなど、積極的に技術を磨き、
            <br />
            フルスタックな活躍がしたいと思っております。
          </p>
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      topImage: "/about.jpg",
      topText: "About",
    },
  };
}

export default AboutPage;
