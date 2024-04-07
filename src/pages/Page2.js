import React from "react";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const data = [
  {
    darktext: "Learning specific skills to advance my career"
  },
  {
    darktext: "Exploring new topics I’m interested in"
  },
  {
   darktext: "Refreshing my math foundations"
  },
  {
    darktext: "Exercising my brain to stay sharp"
  },
  {
   darktext: "Something else"
  },
];

const Page2 = () => {
  return (
    <>
       <ProgressBar/>
      <section className="flex justify-center items-center pt-0">
        <div className="flex flex-col text-center">
          <h1 className="font-sans font-bold text-[38px]">
            Which are you most interested in?
          </h1>
          <p className="p-5 text-[20px]">
          Choose just one. This will help us get you started (but won’t limit your experience)
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-7">
        {data.map((data) => (
          <> 
            <div className="w-[760px] h-[80px] border border-gray-300 rounded-md m-2 flex flex-row hover:border-dotted items-center">
              <div className="w-[80px] flex justify-center items-center mx-[-1px]">
              <img src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="mountain" className="w-[35px] h-[35px]"/>
              </div>
              <div className="text-[20px]">
              {data.darktext}
              </div>
            </div>
          </>
        ))}
      </section>
      <Button/>
    </>
  );
};

export default Page2;
