import React from "react";
import SquareCard from "../components/SquareCard";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const data = [
  {
    darktext: "Arithmetic",
    lighttext: "Introductory",
    url: "https://res.cloudinary.com/picked/image/upload/q_60,h_600,f_auto/v1631195615/cms/how-to-solve-equations-with-fractions-1631195614",
  },
  {
    darktext: "Basic Alebra",
    lighttext: "Foundational",
    url: "https://sophialearning.s3.amazonaws.com/packet_logos/169936/original/FractionEquation.jpg",
  },
  {
    darktext: "Intermediate Algebra",
    lighttext: "Intermediate",
    url: "https://www.finalsite.com/uploaded/FridayFolder/quadratic_formula.png",
  },
  {
    darktext: "Calculus",
    lighttext: "Advanced",
    url: "https://images.fineartamerica.com/images-medium-large-5/differential-calculus-equation-science-photo-library.jpg",
  },
];

const Page4 = () => {
  return (
    <>
      <ProgressBar />
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
      <section className="flex flex-col lg:flex-row justify-center items-center p-4 lg:p-7">
        {data.map((data) => (
          <>
            <SquareCard
              darktext={data.darktext}
              lighttext={data.lighttext}
              url={data.url}
            />
          </>
        ))}
      </section>

      <Button />
    </>
  );
};

export default Page4;
