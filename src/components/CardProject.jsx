import React from "react";

const CardProject = () => {
  return (
    <div className="card mx-auto max-w-sm  bg-base-100 shadow-xl my-5 rounded-xl ">
      <figure className="">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
