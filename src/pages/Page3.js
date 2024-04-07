import React from "react";
import Button from "../components/Button";
import Screenshot from "../assets/Screenshot 2023-09-03 211405.png";
import ProgressBar from "../components/ProgressBar";

const Page3 = () => {
  return (
    <>
      <ProgressBar />
      <div className="flex justify-center">
        <div className="w-[1/2] mt-10">
          <img
            src={Screenshot}
            alt="bird"
            className="w-[322px] h-[496px] pl-0"
          />
        </div>
        <section className="flex justify-center items-center pt-0 ml-10 m-[60px]">
          <div className="flex flex-col m-[100px]">
            <h1 className="font-sans font-bold text-[38px]">
              Which describes you best?
            </h1>
            <p className="text-[20px] w-[600px] mt-[40px] font-sans">
              Brilliant gets you hands-on to help improve your professional
              skills and knowledge. You’ll interact with concepts and solve fun
              problems in math, science, and computer science.
            </p>
          </div>
        </section>
      </div>
      <Button />
    </>
  );
};

export default Page3;
