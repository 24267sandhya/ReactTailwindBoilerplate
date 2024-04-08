import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

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
        <section className="flex justify-center items-center pt-0">
        <div className="flex flex-col text-center mt-40">
          <h1 className="font-sans font-bold text-[46px]">
            Learning paths based on your answers
          </h1>
          <p className="p-5 text-[20px]">
            Choose one to get started. You can switch anytime.
          </p>
        </div>
      </section>
      <section className="flex flex-row justify-center gap-[26px] mt-24 relative">
        <div className="w-[520px] h-[226px] border border-gray-300 rounded-md flex justify-center p-5">
          <div class="absolute w-[130px] h-[34px] top-[-20px] bg-yellow-500 p-2 rounded-lg">
            <p className="text-[12px] flex justify-center font-semibold">
              MOST POPULAR
            </p>
          </div>
          <div className="w-3/5 flex items-center">
            <p className="font-sans text-[20px] m-2">
              <span className="font-semibold">Foundational Math</span> Build your foundational skills in algebra,
              geometry, and probability.
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.xEDm7drmd96augSvTfxDaQHaEo&pid=Api&P=0&h=180w=170"
              alt=""
              className="w-[170px] h-[150px]"
            />
          </div>
        </div>
        <div className="w-[520px] h-[226px] border border-gray-300 rounded-md flex flex-row p-5">
          <div className="w-3/5 flex items-center">
            <p className="font-sans text-[20px] m-2">
              <span className="font-bold">Mathematical Thinking</span> Build your foundational skills in algebra,
              geometry, and probability.
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.xEDm7drmd96augSvTfxDaQHaEo&pid=Api&P=0&h=180w=170"
              alt=""
              className="w-[170px] h-[150px]"
            />
          </div>
        </div>
      </section>
        </>
      )
     }
    </>
  );
};

export default ResultPage;
