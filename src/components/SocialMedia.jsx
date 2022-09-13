import React from "react";
import Title from "./Title";

const SocialMedia = () => {
  return (
    <div className="my-8">
      <Title title="🧔🏻Social Media" />
      <div className="flex flex-col justify-center w-full max-w-xs">
        <a href="https://www.github.com/alfiancode" target="_blank">
          <div className=" group flex items-center hover:scale-105 duration-500 ring-1 ring-gray-900 rounded-xl mb-4 p-5">
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="github"
              className=""
            />
            <p className="ml-7 group-hover:text-blue-500 font-bold">
              Github.com/alfiancode
            </p>
          </div>
        </a>
        <a href="https://www.Instagram.com/alfi.an" target="_blank">
          <div className=" group flex items-center hover:scale-105 duration-500 ring-1 ring-gray-900 rounded-xl mb-4 p-5">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new.png"
              alt="github"
              className=""
            />
            <p className="ml-7 group-hover:text-blue-500 font-bold">
              Github.com/alfiancode
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
