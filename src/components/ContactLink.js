import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactLink = () => {
  return (
    <div className="block">
      <div className="flex">
        <div className="text-white basis-1/2 bg-cyan-400 h-48 grid place-content-center">
          <Link className="hover:scale-110 hover:font-bold hover:opacity-70 transition" href="/contact">
            <Image src="/mail.png" width={100} height={100} alt="mail"/>
            Contact
          </Link>
        </div>
        <div className="text-white basis-1/2 bg-sky-300 h-48 grid place-content-center">
          <Link className="hover:scale-110 hover:font-bold hover:opacity-70 transition" href="https://x.com/with_determinat">
            <Image className="hover:scale-110" src="/logos.png" width={100} height={100} alt="X-logo"/>
            Twitter(X)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactLink;
