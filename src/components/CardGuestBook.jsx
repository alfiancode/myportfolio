import React from "react";

const CardGuestBook = ({ displayName, createAt, comment }) => {
  return (
    <div className="my-5">
      <div className="mb-4 w-full font-light">{comment}</div>
      <div className="">
        <div className="text-gray-600 text-sm font-extralight">
          {displayName} | ${createAt}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default CardGuestBook;
