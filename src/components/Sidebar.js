import Link from "next/link";
import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-full bg-emerald-300">
      <div className="sticky top-0">
        <div className="w-full">
          <Link href="/">
            <Image
              src="/logo_transparent.png"
              width={500}
              height={500}
              alt="logo"
            />
          </Link>
        </div>
        <ul className="flex flex-col gap-5 text-center text-2xl text-white font-bold p-5">
          <li>
            <Link
              className="block border border-white px-3 py-1 hover:bg-white hover:text-black transition duration-300"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block border border-white px-3 py-1 hover:bg-white hover:text-black transition duration-300"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="block border border-white px-3 py-1 hover:bg-white hover:text-black transition duration-300"
              href="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="block border border-white px-3 py-1 hover:bg-white hover:text-black transition duration-300"
              href="/work"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              className="block border border-white px-3 py-1 hover:bg-white hover:text-black transition duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
