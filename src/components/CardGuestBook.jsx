import React from "react";

const CardGuestBook = ({ displayName, createdAt, comment }) => {
  const dateCreated = createdAt.toDate().toDateString();
  console.log("ini tes", dateCreated);
  return (
    <div className="my-5">
      <div className="mb-4 w-full font-light">{comment}</div>
      <div className="">
        <div className="text-gray-600 text-sm font-extralight">
          {displayName} | {dateCreated}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default CardGuestBook;
