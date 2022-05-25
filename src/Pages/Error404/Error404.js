import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Error404 = () => {
  return (
    <>
      <div className="h-[calc(100vh-350.6px)] flex justify-center items-center text-center">
        <div>
          <span className="text-[8rem] font-bold text-gray-500 mx-auto flex justify-center">
            <HiOutlineEmojiSad></HiOutlineEmojiSad>
          </span>
          <p className="text-5xl font-bold text-gray-600 mt-3">404 :(</p>
          <p className="text-2xl text-gray-400  mt-5">Page not found</p>
        </div>
      </div>
    </>
  );
};

export default Error404;
