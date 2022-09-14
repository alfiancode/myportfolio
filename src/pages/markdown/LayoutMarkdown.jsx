import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/Firebase";

const LayoutMarkdown = () => {
  const [data, setData] = useState([]);
  //get param for get data from firebase use react router dom
  const { id } = useParams();
  console.log("ini id guysd", id);
  // get data from firebase by id and show in markdown
  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "Blog", id);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setData(data);
    };
    getData();
  }, []);
  console.log(data);

  return (
    <div>
      <div className="px-8 py-8 px- flex flex-col justify-center  lg:py-12  ">
        <div className="relative w-full px-6 py-12 bg-white shadow-xl rounded-xl shadow-slate-700/10 ring-1 ring-gray-900/5  md:mx-auto  lg:pt-10 lg:pb-28">
          <div className="max-w-prose mx-auto lg:text-lg prose">
            <div className="mt-8 prose prose-pink mx-auto lg:prose-lg prose-blockquote:bg-gray-100 prose-headings:text-blue-500">
              {/* innter HTML from get data  */}
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutMarkdown;
