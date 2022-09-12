import React from "react";

const ModalProject = ({ title, desc, imageUrl, index }) => {
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
          <p className="py-4 ">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ModalProject;
