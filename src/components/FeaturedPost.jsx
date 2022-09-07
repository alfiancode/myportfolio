import React from "react";

const FeaturedPost = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-6 "> Featured Post </h3>
      {/* card  */}
      <div className="flex  flex-col mb-6">
        <div className=" transform hover:scale-[1.02] transition-all rounded-xl w-full h-full mx-auto bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            <h4 className="text-lg font-medium mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <div className="flex items-center text-gray-500">
              👀 1000x watch
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col mb-6">
        <div className=" transform hover:scale-[1.02] transition-all rounded-xl w-full h-full mx-auto bg-gradient-to-r p-1 from-[#fde635] via-[#04d9ff] to-[#6ee193]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            <h4 className="text-lg font-medium mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Minima,
              laborum!
            </h4>
            <div className="flex items-center text-gray-500">
              👀 1000x watch
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col mb-6">
        <div className=" transform hover:scale-[1.02] transition-all rounded-xl w-full h-full mx-auto bg-gradient-to-r p-1 from-[#866ee7] via-[#f63bed] to-[#dc5252]">
          <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
            <h4 className="text-lg font-medium mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus
              molestiae, impedit aperiam possimus est accusamus non explicabo
              voluptates ipsam.
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

      <button className="btn btn-outline border-none hover:bg-white hover:text-gray-500">
        {" "}
        Read all posts ➡️
      </button>
    </div>
  );
};

export default FeaturedPost;
