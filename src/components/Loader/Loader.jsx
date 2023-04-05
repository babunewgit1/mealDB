import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center text-secondary font-bold text-4xl h-screen">
      <p>L</p>
      <div className="w-[40px] h-[40px]  border-4 border-dashed rounded-full animate-spin border-green-700"></div>
      <p>ding.....</p>
    </div>
  );
};

export default Loader;
