import React from "react";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const Page3 = () => {
  return (
    <>
      <ProgressBar />
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="mt-5 lg:w-[1/2] lg:mt-10 flex justify-center">
          <img
            src="https://img.freepik.com/premium-psd/presentation-data-creative-boy-activity_66255-1801.jpg?w=740"
            alt="bird"
            className="w-[250px] h-[310px] lg:w-[322px] lg:h-[496px] lg:pl-0"
          />
        </div>
        <section className="flex justify-center items-center lg:pt-0 lg:ml-10 lg:m-[60px]">
          <div className="flex items-center lg:items-start flex-col m-[30px] lg:m-[100px]">
            <h1 className="font-sans font-bold text-[20px] lg:text-[38px]">
              Which describes you best?
            </h1>
            <p className="text-center lg:text-start text-[12px] w-[300px] mt-0 lg:text-[20px] lg:w-[600px] lg:mt-[40px] font-sans">
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
