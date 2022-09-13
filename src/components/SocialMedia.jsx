import React from "react";
import Title from "./Title";

const SocialMedia = () => {
  return (
    <div className="my-8">
      <Title title="🧔🏻Social Media" />
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between  gap-4 justify-center  w-full">
        <a
          href="https://www.linkedin.com/in/muhammadalfiansyah/"
          target="_blank"
          className="w-full md:max-w-xs"
        >
          <div className=" group flex items-center hover:scale-105 duration-500 ring-1 ring-gray-900 rounded-xl  p-5 ">
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin"
              className=""
            />
            <p className="ml-7 group-hover:text-blue-500 font-bold text-xs">
              https://www.linkedin.com/alfian/
            </p>
          </div>
        </a>
        <a
          className="w-full md:max-w-xs"
          href="https://www.github.com/alfiancode"
          target="_blank"
        >
          <div className=" group flex items-center hover:scale-105 duration-500 ring-1 ring-gray-900 rounded-xl  p-5">
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
        <a
          href="https://www.Instagram.com/alfi.an"
          target="_blank"
          className="w-full md:max-w-xs"
        >
          <div className=" group flex items-center hover:scale-105 duration-500 ring-1 ring-gray-900 rounded-xl  p-5">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new.png"
              alt="github"
              className=""
            />
            <p className="ml-7 group-hover:text-blue-500 font-bold">
              Instagram.com/alfi.an
            </p>
          </div>
        </a>
        <a
          href="https://www.Twitter.com/alpyian"
          target="_blank"
          className="w-full md:max-w-xs"
        >
          <div className=" group flex items-center hover:scale-105 duration-500 ring-1 ring-gray-900 rounded-xl  p-5">
            <img
              src="https://img.icons8.com/color/48/000000/twitter.png"
              alt="Twittwer"
              className=""
            />
            <p className="ml-7 group-hover:text-blue-500 font-bold">
              Twitter.com/alpyian
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
