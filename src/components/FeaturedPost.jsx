import React from "react";

const FeaturedPost = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-6 "> Featured Post </h3>
      {/* card  */}
      <div className="flex  flex-col mb-6">
        <div className=" transform hover:scale-[1.02] transition-all rounded-xl w-full h-full mx-auto bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div className="flex  flex-col mb-6">
        <div className=" transform hover:scale-[1.02] transition-all rounded-xl w-full h-full mx-auto bg-gradient-to-r p-1 from-[#D8B4FE]  to-[#818CF8]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            facere, error suscipit unde blanditiis assumenda ex!
          </div>
        </div>
      </div>

      <div className="flex  flex-col mb-6">
        <div className=" transform hover:scale-[1.02] transition-all rounded-xl w-full h-full mx-auto bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            facere, error suscipit unde blanditiis assumenda ex! Quisquam
            voluptates, quod, quia, quas voluptate quibusdam voluptatem
          </div>
        </div>
      </div>
      {/* end card */}
    </div>
  );
};

export default FeaturedPost;
