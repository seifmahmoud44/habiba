import React from "react";

const Title = ({ title }) => {
  return (
    <div className="bg-[#FF6666] w-fit m-auto my-5">
      <h1 className="text-4xl font-bold py-3 px-7 text-white">{title}</h1>
    </div>
  );
};

export default Title;
