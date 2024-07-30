import React from "react";
import Image from "next/image";

const SkillsPage = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <p>※習熟度には差があります。詳しくはお気軽にお尋ねください。</p>
      <h2 className="text-xl font-bold mb-5">Web制作関連</h2>
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 place-items-center gap-10">
          <li>
            <Image src="/html-5.svg" width={100} height={100} alt="html"/>
          </li>
          <li>
            <Image src="/css-3.svg" width={100} height={100} alt="css"/>
          </li>
          <li>
            <Image src="/javascript.svg" width={100} height={100} alt="javascript"/>
          </li>
          <li>
            <Image src="/jquery.svg" width={100} height={100} alt="jquery"/>
          </li>
          <li>
            <Image src="/bootstrap.svg" width={100} height={100} alt="bp"/>
          </li>
          <li>
            <Image src="/wp.png" width={100} height={100} alt="wp"/>
          </li>
          <li>
            <Image src="/figma.svg" width={100} height={100} alt="figma"/>
          </li>
        </ul>
        <p className="pt-5">備考：デイトラ（通信学習）Web制作卒業</p>
      </div>
      <hr/>
      <h2 className="pt-10 text-xl font-bold mb-5">学習言語、ツール等</h2>
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 place-items-center gap-10">
          <li>
            <Image src="/ruby.svg" width={100} height={100} alt="ruby"/>
          </li>
          <li>
            <Image src="/rails.svg" width={100} height={100} alt="rails"/>
          </li>
          <li>
            <Image src="/github-icon.svg" width={100} height={100} alt="github"/>
          </li>
          <li>
            <Image src="/java.svg" width={100} height={100} alt="java"/>
          </li>
          <li>
            <Image src="/nextjs.svg" width={100} height={100} alt="nextjs"/>
          </li>
          <li>
            <Image src="/tailwindcss.svg" width={100} height={100} alt="tailwindcss"/>
          </li>
          <li>
            <Image src="/adobe-photoshop.svg" width={100} height={100} alt="ps"/>
          </li>
          <li>
            <Image src="/adobe-illustrator.svg" width={100} height={100} alt="ir"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      topImage: "/skills.jpg",
      topText: "Skills",
    },
  };
}

export default SkillsPage;
