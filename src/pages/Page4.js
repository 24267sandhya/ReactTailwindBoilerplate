import React from "react";
import SquareCard from "../components/SquareCard";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const data = [
  {
    darktext: "Arithmetic",
    lighttext: "Introductory",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/EnglishSpotRabbitChocolate1(cropped).jpg/1200px-EnglishSpotRabbitChocolate1(cropped).jpg",
  },
  {
    darktext: "Basic Alebra",
    lighttext: "Foundational",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/EnglishSpotRabbitChocolate1(cropped).jpg/1200px-EnglishSpotRabbitChocolate1(cropped).jpg",
  },
  {
    darktext: "Intermediate Algebra",
    lighttext: "Intermediate",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/EnglishSpotRabbitChocolate1(cropped).jpg/1200px-EnglishSpotRabbitChocolate1(cropped).jpg",
  },
  {
    darktext: "Calculus",
    lighttext: "Advanced",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/EnglishSpotRabbitChocolate1(cropped).jpg/1200px-EnglishSpotRabbitChocolate1(cropped).jpg",
  },
];

const Page4 = () => {
  return (
    <>
      <ProgressBar />
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
      <section className="flex flex-row justify-center items-center p-7">
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
