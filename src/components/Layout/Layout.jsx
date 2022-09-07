import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-3xl ">
      <Navbar />
      <div className=" flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
