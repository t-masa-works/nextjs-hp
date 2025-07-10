import { Inter } from "next/font/google";
import Link from "next/link";

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
      <div className="pt-5">
        <h3 className="text-lg text-red-500">New -新着情報-</h3>
        <p className="text-sm">UnityでAndroidアプリを作成しました。</p>
        <Link
          href="https://play.google.com/store/apps/details?id=com.T.M.Works.Cat_Escape"
          className="text-blue-500 underline"
        >
          Cat_Escape(Google Playストア)
        </Link>
        <p className="text-sm">AndroidアプリのLPページを作成しました。</p>
        <Link
          href="https://cat-escape-lp.pages.dev/"
          className="text-blue-500 underline"
        >
          Cat_Escape LP
        </Link>
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
