import React from "react";
import Title from "../components/Title";
import BlogCard from "../components/BlogCard";
const Blog = () => {
  return (
    <div className="mx-8">
      <Title title="Blog" />
      <p className="mb-4 text-gray-600 ">
        I will try to write what is in my head. I hope you can enjoy my writing
        and my writing can be useful for you
      </p>
      <div class="relative w-full mb-4">
        <input
          type="text"
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300  rounded-xl dark:border-gray-900  dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-5 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <div className="divider my-16 font-bold"> 💖Happy reading</div>
      <BlogCard />
      <BlogCard />

      <BlogCard />

      <BlogCard />
    </div>
  );
};

export default Blog;
