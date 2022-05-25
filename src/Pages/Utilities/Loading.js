import React from "react";

const Loading = () => {
  return (
    <>
      <div className="h-[calc(100vh-65.6px)] flex items-center justify-center space-x-2 animate-pulse">
        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
        <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
      </div>
    </>
  );
};

export default Loading;
