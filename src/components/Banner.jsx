import React from "react";

const Banner = () => {
  return (
    <div className=" mt-16  flex flex-col-reverse sm:flex-row sm:items-start ">
      <div className="flex flex-col items-start sm:pr-8">
        <h1 className="font-bold text-3xl mb-1 tracking-tight md:text-5xl">
          Muhamamd AlfianS
        </h1>
        <p className="text-gray-700 mb-4 flex">Frontend Developer</p>
        <p className="text-gray-400 ">
          Build a responsive website from the heart for you.
        </p>
        <p className="text-gray-400 mb-16">
          Because the one from the heart will never be badddd ❤️
        </p>
      </div>
      <div className="avatar mb-8 sm:mx-auto">
        <div className="w-16 h-16 sm:w-32 sm:h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
