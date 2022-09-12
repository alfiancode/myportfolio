import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <h1 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-black">
        {title}
      </h1>
    </>
  );
};

export default Title;
