import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <>
      <div className="h-[30vh] flex items-center justify-center">
        <div>
          <div className="lds-facebook mx-12">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text-center text-xl">Loading, Please wait...</p>
        </div>
      </div>
    </>
  );
};

export default Loading;
