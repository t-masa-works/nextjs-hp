import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TopImage from "./TopImage";

const Layout = ({ children, topImage, topText }) => {
  return (
    <div className="flex w-full">
      <aside className="hidden md:block w-1/4">
        <Sidebar />
      </aside>
      <main className="w-screen flex-1 bg-white text-black text-center">
        <Header />
        <TopImage imageUrl={topImage} text={topText} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
