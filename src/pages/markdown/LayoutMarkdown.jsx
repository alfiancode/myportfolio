import React from "react";

const LayoutMarkdown = ({ Children }) => {
  return (
    <div>
      <div className="min-h-screen  py-8 px-8 flex flex-col justify-center  lg:py-12 rounded-xl">
        <div className=" inset-0 " />
        <div className="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
          <div className="max-w-prose mx-auto lg:text-lg">{Children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutMarkdown;
