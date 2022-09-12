import React, { useState } from "react";
import ModalProject from "./ModalProject";

const CardProject = ({ title, desc }) => {
  return (
    <div className="card  max-w-sm  bg-base-100 shadow-xl my-5 rounded-xl ">
      <figure className="">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions">
          <ModalProject />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
