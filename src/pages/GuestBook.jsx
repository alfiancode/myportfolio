import React from "react";
import CardGuestBook from "../components/CardGuestBook";

const GuestBook = () => {
  return (
    <div className="mx-8">
      <h1 className="font-bold text-3xl tracking-tight mb-4">Guestbok</h1>
      <p className="text-gray-400 mb-6">
        Leave a comment below. It could be anything – appreciation, information,
        wisdom, or even humor. Surprise me!
      </p>
      <div className="p-6 min-w-full rounded-lg border border-blue-300 bg-[rgb(239,246,255)] mb-8">
        <h5 className="text-lg font-bold text-gray-900">Sign the Guestbook</h5>
        <p className="my-1 text-gray-800 ">
          Share a message for a future visitor of my site.
        </p>
        <div className="flex ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-md input-primary  w-full max-w-sm border-none mr-5"
          />
          <div className="btn  bg-slate-200 hover:bg-slate-300 border-none text-gray-700 normal-case rounded-xl">
            Sign👉🏻
          </div>
        </div>
      </div>
      <CardGuestBook />
      <CardGuestBook />

      <CardGuestBook />

      <CardGuestBook />

      <CardGuestBook />

      <CardGuestBook />
    </div>
  );
};

export default GuestBook;
