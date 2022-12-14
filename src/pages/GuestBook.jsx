import React, { useEffect, useState } from "react";
import CardGuestBook from "../components/CardGuestBook";
import { auth, db, provider } from "../config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import FormGuestbook from "../components/FormGuestbook";
import Title from "../components/Title";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { success } from "daisyui/src/colors/colorNames";
import Toast from "../components/Toast";

const GuestBook = () => {
  const [user, isLoading] = useAuthState(auth);
  const [dataGuestBook, setDataGuestBook] = useState([]);

  // auth with firebase google
  const signInWithPopupGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  // end auth with firebase google

  // use state for data guest book with firebase snapshot
  useEffect(() => {
    try {
      const collectionRef = collection(db, "posts");
      const q = query(collectionRef, orderBy("createdAt", "desc"));
      const unsub = onSnapshot(q, (snapshot) => {
        setDataGuestBook(
          snapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }))
        );
      });
      return unsub;
    } catch (error) {
      console.log(error);
    }
  }, []);

  // end use state for data guest book with firebase snapshot

  return (
    <div className="mx-8 relative">
      <Title title=" 📝 Guestbook" />
      <p className=" mb-6">
        Leave a comment below. It could be anything – appreciation, information,
        wisdom, or even humor. Surprise me!
      </p>
      <div className="p-6 min-w-full rounded-lg border border-blue-300 bg-[rgb(239,246,255)] mb-8">
        <h5 className="text-lg font-bold text-gray-900">Sign the Guestbook</h5>
        <p className="my-1 text-gray-800 ">
          Share a message for a future visitor of my site.
        </p>

        {/* Login with Google */}
        {!user ? (
          <button
            onClick={signInWithPopupGoogle}
            type="submit"
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 "
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        ) : (
          <div>
            <p className="my-3 ">
              Halo <span className="font-bold">{user.displayName}</span> 👋
            </p>
            <div>
              <FormGuestbook />
            </div>
          </div>
        )}
      </div>
      {/* map cardguestbook with data  */}
      {dataGuestBook.map((item, index) => {
        return (
          <CardGuestBook
            createdAt={item.data.createdAt}
            displayName={item.data.displayName}
            comment={item.data.comment}
            key={index}
            userId={item.data.userId}
            idPost={item.id}
          />
        );
      })}
    </div>
  );
};

export default GuestBook;
