import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-10 text-xl sticky md:hidden flex justify-between w-screen px-10 bg-emerald-300 place-items-center">
      <div className="relative w-10 h-full">
        <Link href="/">
          <Image
            src="/logo_transparent.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link href="/">Top</Link>
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
