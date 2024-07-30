import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-10 text-xl md:hidden flex justify-between w-screen px-7 bg-emerald-300 place-items-center fixed top-0 z-10">
      <div className="relative w-10 h-full">
        <Link href="/">
          <Image
            src="/logo_transparent.png"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
            alt="logo"
          />
        </Link>
      </div>
      <ul className="flex gap-5 text-sm text-white font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/work">Works</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
