import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`p-5 h-[50vh] ${inter.className}`}>
      <h2 className="font-bold text-xl">T.Masa.Worksのポートフォリオサイト</h2>

      <div className="flex flex-col gap-5 pt-5">
        <p>当ポートフォリオをご覧いただきありがとうございます。</p>
        <p>このサイトは、Next.jsとTailwindCSSを用いて作成しています。</p>
        <p>技術レベルなど,ご参考の一助になればと思います。</p>
        <p>お問い合わせフォームはデモです。</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      topImage: "/fv.jpg",
      topText: "T.Masa Portfolio",
    },
  };
}
