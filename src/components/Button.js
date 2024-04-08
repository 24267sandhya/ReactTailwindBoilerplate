import React, { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

const Button = () => {
  const {progress, setProgress} = useContext(ProgressContext);

  const handleSubmit = () => {
    // Check if the progress is less than or equal to 5 before incrementing
    if (progress <= 6) {
      // Update progress by incrementing it by 1
      setProgress(progress + 1);
    }
  };

  return (
    <>
      <section className="flex justify-center pb-12">
        <button onClick={handleSubmit} className="w-[180px] h-[50px] lg:w-[234px] lg:h-[63px] bg-black border rounded-md hover:bg-gray-300 transition duration-800 ease-in-out">
          <p className="text-white text-[20px] lg:text-[24px]">Continue</p>
        </button>
      </section>
    </>
  );
};

export default Button;
