import React, { useState } from "react";
import ModalProject from "./ModalProject";

const CardProject = ({ title, desc, imageUrl }) => {
  console.log({ title, desc, imageUrl });
  return (
    <div className="card  max-w-sm  bg-base-100 shadow-xl my-5 rounded-xl ">
      <figure className="">
        <img src={imageUrl} alt="Shoes" className="h-64" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions">
          <ModalProject title={title} desc={desc} imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
