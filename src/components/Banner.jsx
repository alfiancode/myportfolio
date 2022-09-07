import React from "react";

const Banner = () => {
  return (
    <div className=" mt-16  flex flex-col  ">
      <div className="avatar mb-8">
        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <h1 className="font-bold text-4xl mb-1">Muhamamd AlfianS</h1>
      <p className="text-gray-700 mb-4">Frontend Developer</p>
      <p className="text-gray-400 ">
        Build a responsive website from the heart for you.
      </p>
      <p className="text-gray-400 mb-16">
        Because the one from the heart will never be bad ❤️
      </p>
    </div>
  );
};

export default Banner;
