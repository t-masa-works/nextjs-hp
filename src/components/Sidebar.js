import Link from "next/link";
import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-full bg-emerald-300">
      <div className="w-full">
        <Link href="/">
          <Image src="/logo_transparent.png" width={500} height={500} alt="logo"/>
        </Link>
      </div>
      <ul className="flex flex-col gap-5 text-center text-2xl">
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
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
