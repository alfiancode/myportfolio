import React from "react";
import CardProject from "../components/CardProject";
import Title from "../components/Title";

const Project = () => {
  return (
    <div className="mx-8">
      <Title title="Project" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto ">
        <CardProject title="NewsGame Web" desc="Lorem " />
        <CardProject title="Movie Web" desc="Lorem " />

        <CardProject title="Personal Project" desc="Lorem " />
      </div>
    </div>
  );
};

export default Project;
