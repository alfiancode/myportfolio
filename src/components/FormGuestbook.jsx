import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const FormGuestbook = () => {
  const [user] = useAuthState(auth);
  console.log(new Date());
  const schema = yup.object().shape({
    comment: yup.string().required("Post is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const postsRef = collection(db, "posts");

  const onCreatePost = async (data) => {
    console.log("data dari fgb", data);
    await addDoc(postsRef, {
      comment: data.comment,
      createdAt: new Date(),
      userId: user?.uid,
      displayName: user?.displayName,
    });
  };
  return (
    <form className="flex " onSubmit={handleSubmit(onCreatePost)}>
      <div className="flex flex-col mr-5">
        <input
          {...register("comment")}
          type="text"
          placeholder="Type here your message"
          className=" rounded-xl input input-md input-primary  w-full max-w-sm border-none mr-5"
        />
        <p className="text-red-400 m-1">{errors.comment?.message}</p>
      </div>
      <input
        type="submit"
        value=" Sign👉🏻"
        placeholder="Type here your message"
        className="btn  bg-slate-200 hover:bg-slate-300 border-none text-gray-700 normal-case rounded-xl"
      />
    </form>
  );
};

export default FormGuestbook;
