import React from "react";
import { Link } from "react-router-dom";

const ModalProject = ({ title, desc, imageUrl, index, link }) => {
  console.log("tes", { title, desc, imageUrl });

  return (
    <>
      {/* <!-- The button to open modal --> */}
      <label htmlFor={index} className="btn modal-button">
        Details
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id={index} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={index}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <img src={imageUrl} alt="Image" className=" mx-auto" />
          <button className="btn btn-sm mt-5">
            {" "}
            <a href={link} target="_blank">
              Vist This Website 🔎
            </a>
          </button>

          <div className="flex">
            <p className="py-4 text-left">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProject;
