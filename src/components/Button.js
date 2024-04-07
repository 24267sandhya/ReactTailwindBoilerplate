import React from "react";

const Button = () => {
  return (
    <>
      <section className="flex justify-center pb-12">
        <button className="w-[234px] h-[63px] bg-black border rounded-md hover:bg-gray-300 transition duration-800 ease-in-out">
          <p className="text-white text-[24px]">Continue</p>
        </button>
      </section>
    </>
  );
};

export default Button;
