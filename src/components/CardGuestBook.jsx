import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/Firebase";
import Toast from "./Toast";

const CardGuestBook = ({ displayName, createdAt, comment, userId, idPost }) => {
  const dateCreated = createdAt?.toDate().toLocaleDateString("en-US");
  const timeCreated = createdAt?.toDate().toLocaleTimeString();
  const [user, isLoading] = useAuthState(auth);
  const [Success, setSuccess] = useState(false);
  // delete post realtime  with firebase
  const deletePost = async () => {
    const docRef = doc(db, "posts", idPost);
    try {
      await deleteDoc(docRef);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };
  // end delete post with firebase
  return (
    <div className="my-5 ">
      {/* toast componen on top mid  */}
      {Success === true && <Toast />}

      <div className="mb-4 w-full font-light">{comment}</div>
      <div className="flex ">
        <div className="text-gray-600 text-sm font-extralight">
          {displayName} |{dateCreated} {timeCreated}
        </div>
        {userId === user?.uid && (
          <button
            className="text-gray-600 text-sm font-extralight"
            onClick={deletePost}
          >
            <span className="text-red-500">| Delete</span>
          </button>
        )}
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default CardGuestBook;
