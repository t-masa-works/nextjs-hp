import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`px-5 py-5 w-full h-screen ${inter.className}`}
    >
      <p>コンテンツ</p>
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
