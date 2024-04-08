import React from "react";
import Button from "../components/Button";
import { IoIosStar } from "react-icons/io";
import ProgressBar from "../components/ProgressBar";

const Page5 = () => {
  return (
    <>
      <ProgressBar/>
      <div className="flex justify-center">
        <div className="w-[1/2] mt-10">
          <img
            src="https://img.freepik.com/premium-psd/girl-travel-sign-direction-holiday-vacation_66255-2135.jpg?w=740"
            alt="bird"
            className="w-[322px] h-[496px] pl-0"
          />
        </div>
        <section className="flex justify-center items-center pt-0 ml-10 m-[60px]">
          <div className="flex flex-col m-[70px]">
            <h1 className="font-sans font-bold text-[38px] mb-[40px]">
              You're on your way!
            </h1>
            <div className="flex flex-row mb-2">
              <IoIosStar className="fill-yellow-400 h-[40px] w-[40px]"/>
              <IoIosStar className="fill-yellow-400 h-[40px] w-[40px]"/>
              <IoIosStar className="fill-yellow-400 h-[40px] w-[40px]"/>
              <IoIosStar className="fill-yellow-400 h-[40px] w-[40px]"/>
              <IoIosStar className="fill-yellow-400 h-[40px] w-[40px]"/>
            </div>
            <p className="text-[20px] w-[600px] font-sans italic">
              “Through its engaging and well-structured courses, Brilliant has
              taught many mathematical concepts that I previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real world problem solving situations.”
            </p>
            <p className="text-[20px] w-[600px] mt-[40px] font-sans italic">
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
