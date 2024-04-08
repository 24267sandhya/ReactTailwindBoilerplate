import React from "react";
import Button from "../components/Button";
import { IoIosStar } from "react-icons/io";
import ProgressBar from "../components/ProgressBar";

const Page5 = () => {
  return (
    <>
      <ProgressBar/>
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="mt-5 lg:w-[1/2] lg:mt-10 flex justify-center">
          <img
            src="https://img.freepik.com/premium-psd/girl-travel-sign-direction-holiday-vacation_66255-2135.jpg?w=740"
            alt="bird"
            className="w-[250px] h-[310px] lg:w-[322px] lg:h-[496px] lg:pl-0"
          />
        </div>
        <section className="flex justify-center items-center lg:pt-0 lg:ml-10 lg:m-[60px]">
          <div className="flex items-center flex-col m-[30px] lg:m-[100px]">
            <h1 className="font-sans font-bold text-[20px] lg:text-[38px]">
              You're on your way!
            </h1>
            <div className="flex flex-row mb-2">
              <IoIosStar className="fill-yellow-400 lg:h-[40px] lg:w-[40px]"/>
              <IoIosStar className="fill-yellow-400 lg:h-[40px] lg:w-[40px]"/>
              <IoIosStar className="fill-yellow-400 lg:h-[40px] lg:w-[40px]"/>
              <IoIosStar className="fill-yellow-400 lg:h-[40px] lg:w-[40px]"/>
              <IoIosStar className="fill-yellow-400 lg:h-[40px] lg:w-[40px]"/>
            </div>
            <p className="text-center lg:text-start text-[12px] w-[300px] mt-0 lg:text-[20px] lg:w-[600px] lg:mt-[40px] font-sans italic">
              “Through its engaging and well-structured courses, Brilliant has
              taught many mathematical concepts that I previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real world problem solving situations.”
            </p>
            <p className="text-center lg:text-start text-[12px] lg:text-[20px] w-[600px] mt-[20px] lg:mt-[40px] font-sans italic">
              - Jacob
            </p>
          </div>
        </section>
      </div>
     <Button/>
    </>
  );
};

export default Page5;
