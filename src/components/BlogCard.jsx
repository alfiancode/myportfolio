import React from "react";
import { Link } from "react-router-dom";

const blogCard = ({ slug }) => {
  return (
    <div>
      <Link to={`/Blog/${slug}`}>
        <h4 className="w-full text-lg font-medium text-gray-900 mb-2">
          Lorem ipsum dolor sit amet consectetur
        </h4>
        <p className="text-gray-600 mb-4 font-extralight">👀 2000 views</p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum
          ex pariatur, minus voluptatibus fugiat eaque a adipisci, tenetur
          aliquid atque natus veniam quos temporibus ut perspiciatis. Dicta hic
          quasi
        </p>
        <div className="divider" />
      </Link>
    </div>
  );
};

export default blogCard;
