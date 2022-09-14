import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Title from "./Title";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";

//get data with snapshot from firebase
const FeaturedPost = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "Blog"));
      const data = querySnapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setData(data);
    };
    getData();
  }, []);
  //handle click to layout markdown page with id
  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <Title title=" 💡Featured Post" />
      {/* card  */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* looping card with data from fire base */}
        {data.map((item, index) => (
          <div
            className="flex  flex-col md:flex-row gap-5 md:h-64  "
            onClick={() => handleClick(item.id)}
          >
            <div className="  transform hover:scale-[1.02] transition-all rounded-xl w-full   h-full mx-auto bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
              <div className="flex flex-col justify-between h-full bg-white  rounded-lg p-5 overflow-hidden">
                <h4 className="text-lg font-medium mb-6 sm:mb-10 tracking-tight text-gray-900">
                  {item.data.title}
                </h4>
                <div className="flex items-center text-gray-500">
                  👀 1000x watch
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* end card */}
      {/* <a href="#" className="mt-6 text-gray-600  ">
        Read all posts ➡️
      </a> */}
      <Link to={`/Blog`}>
        <button className=" -ml-[18px]  btn btn-outline border-none hover:bg-gray-100 hover:text-gray-500 normal-case ">
          {" "}
          Read all posts ➡️
        </button>
      </Link>
    </div>
  );
};

export default FeaturedPost;
