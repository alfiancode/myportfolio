import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="bg-base-200">
      <div className="flex flex-col min-h-screen mx-auto max-w-screen-md ">
        <Navbar />
        <div className=" flex-1 ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
