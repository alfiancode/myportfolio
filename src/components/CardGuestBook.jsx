import React from "react";

const CardGuestBook = ({ displayName, createdAt, comment }) => {
  const dateCreated = createdAt?.toDate().toLocaleDateString("en-US");
  const timeCreated = createdAt?.toDate().toLocaleTimeString();
  // console.log("ini tes", createdAt);
  return (
    <div className="my-5">
      <div className="mb-4 w-full font-light">{comment}</div>
      <div className="">
        <div className="text-gray-600 text-sm font-extralight">
          {displayName} |{dateCreated} {timeCreated}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default CardGuestBook;
