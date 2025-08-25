import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TopImage from "./TopImage";
import Footer from "./Footer";
import ContactLink from "./ContactLink";
import ReturnTopButton from "./ReturnTopButton";

const Layout = ({ children, topImage, topText }) => {
  return (
    <div class="min-h-[100lvh] grid grid-rows-[auto_1fr_auto]">
      <div className="flex w-full">
        <aside className="hidden md:block w-1/4">
          <Sidebar />
        </aside>
        <main className="flex-1 bg-white text-black text-center flex-grow w-auto">
          <Header />
          <TopImage imageUrl={topImage} text={topText} />
          {children}
          <ContactLink />
        </main>
      </div>
      <ReturnTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
