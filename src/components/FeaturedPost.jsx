import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const FeaturedPost = () => {
  return (
    <div>
      <Title title=" 💡Featured Post" />
      {/* card  */}
      <div className="flex  flex-col md:flex-row gap-5 md:h-64  ">
        <div className="  transform hover:scale-[1.02] transition-all rounded-xl w-full  md:w-1/3 h-full mx-auto bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            <h4 className="text-lg font-medium mb-6 sm:mb-10 tracking-tight text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className="flex items-center text-gray-500">
              👀 1000x watch
            </div>
          </div>
        </div>

        <div className=" md:w-1/3 transform hover:scale-[1.02] transition-all rounded-xl w-full h-full mx-auto bg-gradient-to-r p-1 from-[#fde635] via-[#04d9ff] to-[#6ee193]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            <h4 className="text-lg font-medium mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
              ips
            </h4>
            <div className="flex items-center text-gray-500">
              👀 1000x watch
            </div>
          </div>
        </div>

        <div className=" md:w-1/3 transform hover:scale-[1.02] transition-all rounded-xl w-full h-full mx-auto bg-gradient-to-r p-1 from-[#866ee7] via-[#f63bed] to-[#dc5252]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            <h4 className="text-lg font-medium mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetu
            </h4>
            <div className="flex items-center text-gray-500">
              👀 1000x watch
            </div>
          </div>
        </div>
      </div>
      {/* end card */}
      {/* <a href="#" className="mt-6 text-gray-600  ">
        Read all posts ➡️
      </a> */}
      <Link to={`/Blog`}>
        <button className=" -ml-[18px]  btn btn-outline border-none hover:bg-gray-100 hover:text-gray-500 normal-case ">
          {" "}
          Read all posts ➡️
        </button>
      </Link>
    </div>
  );
};

export default FeaturedPost;
