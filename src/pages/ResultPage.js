import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import ResultCard from "../components/ResultCard";

const data = [
  {
    darktext: "Foundational Math",
    lighttext: "Build your fundational skills in algebra, geometry, and probability"
},
{
  darktext: "Mathematical Thinking",
  lighttext: "Build your fundational skills in algebra, geometry, and probability"
},
]

const ResultPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false);
    }, 4000)
  }, []);

  return (
    <>
     {
      isLoading? (<LoadingPage/>):
      (
        <>
        <section className="flex justify-center items-center lg:pt-0 p-2">
        <div className="flex flex-col text-center mt-12 lg:mt-40">
          <h1 className="font-sans font-bold text-[20px] lg:text-[38px]">
            Learning paths based on your answers
          </h1>
          <p className="p-1 lg:p-5 text-[12px] lg:text-[20px]">
            Choose one to get started. You can switch anytime.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center lg:flex-row justify-center lg:gap-[26px] mt-12 lg:mt-24 relative">
       
            <ResultCard
              darktext="Foundational Math" 
              lighttext="Build your foundational skills in algebra, geometry, and probability"
              result={true}
            />
            <ResultCard
              darktext="Mathematical Thinking" 
              lighttext="Build your foundational skills in algebra, geometry, and probability"
              result={false}
            />
        
      </section>
        </>
      )
     }
    </>
  );
};

export default ResultPage;
