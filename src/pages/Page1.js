import React from "react";
import Button from "../components/Button";
import OptionCard from "../components/OptionCard";
import ProgressBar from "../components/ProgressBar";

const data = [
  {
    darktext: "Student",
    lighttext: "or soon to be enrolled",
    url: "https://img.freepik.com/premium-vector/increase-economic-official-concept-pro-vector-illustration_678466-6.jpg?w=740"
  },
  {
    darktext: "Professional",
    lighttext: "pursuing a career",
    url: "https://img.freepik.com/free-vector/time-management-concept-landing-page_52683-24727.jpg?w=996"
  },
  {
    darktext: "Parent",
    lighttext: "of a school-age child",
    url: "https://img.freepik.com/free-vector/flat-illustration-international-day-families_23-2148471673.jpg?w=740"
  },
  {
    darktext: "Lifelong learning",
    url: "https://img.freepik.com/premium-vector/online-reading-online-library-concept_7737-1785.jpg?w=826"
  },
  {
    darktext: "Teacher",
    url: "https://img.freepik.com/premium-vector/hand-drawn-flat-teachers-day-illustration_23-2149070823.jpg?w=740"
  },
  {
    darktext: "Other",
    url: "https://img.freepik.com/premium-vector/young-man-is-holding-computer-his-hands-business-communication-concept-freelance-business-work-student-trendy-flat-vector-illustration-isolated-white-background_501069-2359.jpg?w=740"
  },
];

const Page1 = () => {
  return (
    <>
      <ProgressBar/>
      <section className="flex justify-center items-center lg:pt-0 p-2">
        <div className="flex flex-col text-center">
          <h1 className="font-sans font-bold text-[20px] lg:text-[38px]">
            Which describes you best?
          </h1>
          <p className="p-1 lg:p-5 text-[12px] lg:text-[20px]">
            This will help us personalize your experience.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-4 lg:p-7">
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
