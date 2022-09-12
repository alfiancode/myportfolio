import React from "react";

const ModalProject = ({ title, desc, image }) => {
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <label htmlFor="my-modal-3" className="btn modal-button">
        Detail
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ModalProject;
