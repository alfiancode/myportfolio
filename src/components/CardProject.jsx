import React, { useState } from "react";
import ModalProject from "./ModalProject";

const CardProject = ({ title, desc }) => {
  const data = {
    movieWeb: {
      title: "Movie Web",
      desc: "I created this project using the Public API. This project is a movie web that displays the latest movie information.The feature I made is   Sign In and Sign Up, protected Page if not logged in, 404 page if URL doesn't exist,Responsive design",
    },
  };
  return (
    <div className="card  max-w-sm  bg-base-100 shadow-xl my-5 rounded-xl ">
      <figure className="">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions">
          <ModalProject desc={data.movieWeb.desc} title={data.movieWeb.title} />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
