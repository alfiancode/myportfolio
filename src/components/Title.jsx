import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black">
        {title}
      </h1>
    </>
  );
};

export default Title;
