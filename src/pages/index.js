import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen items-center px-5 py-5 w-full ${inter.className}`}
    >
      <p>コンテンツ</p>
    </main>
  );
}
