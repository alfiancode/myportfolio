import React, { useEffect, useState } from "react";

const Toast = () => {
  const [show, setShow] = useState(false);

  //   hide toast with handleClick setTimeout

  return (
    <>
      <div
        id="toast-success"
        className={`toast toast-top toast-center fixed top-5  flex flex-row justify-center  w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
        role="alert"
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center  text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3 text-sm font-normal">
          Item delete successfully.
        </div>
      </div>
    </>
  );
};

export default Toast;
