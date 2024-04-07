import React from "react";
import Button from "../components/Button";
import OptionCard from "../components/OptionCard";
import ProgressBar from "../components/ProgressBar";

const data = [
  {
    darktext: "Student",
    lighttext: "or soon to be enrolled",
    url: ""
  },
  {
    darktext: "Professional",
    lighttext: "pursuing a career",
    url: ""
  },
  {
    darktext: "Parent",
    lighttext: "of a school-age child",
    url: ""
  },
  {
    darktext: "Lifelong learning",
    url: ""
  },
  {
    darktext: "Teacher",
    url: ""
  },
  {
    darktext: "Other",
    url: ""
  },
];

const Page1 = () => {
  return (
    <>
      <ProgressBar/>
      <section className="flex justify-center items-center pt-0">
        <div className="flex flex-col text-center">
          <h1 className="font-sans font-bold text-[38px]">
            Which describes you best?
          </h1>
          <p className="p-5 text-[20px]">
            This will help us personalize your experience.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-7">
        {data.map((data) => (
          <> 
            <OptionCard
              darktext={data.darktext}
              lighttext={data.lighttext}
              url={data.url}
            />
          </>
        ))}
      </section>
      <Button/>
    </>
  );
};

export default Page1;
