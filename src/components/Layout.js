import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden md:block w-1/4">
        <Sidebar />
      </div>
      <div className="w-screen flex-1 bg-white text-black text-center">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
