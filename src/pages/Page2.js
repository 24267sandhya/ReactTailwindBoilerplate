import React from "react";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import OptionCard from "../components/OptionCard";

const data = [
  {
    darktext: "Learning specific skills to advance my career",
    url: 'https://img.freepik.com/premium-psd/increase-going-up-with-bar-chart_668290-450.jpg?w=740'
  },
  {
    darktext: "Exploring new topics I’m interested in",
    url: 'https://img.freepik.com/premium-photo/earth-globe_196637-383.jpg?w=740'
  },
  {
   darktext: "Refreshing my math foundations",
   url: 'https://img.freepik.com/free-psd/3d-rendering-calculator-icon_220664-2530.jpg?w=740'
  },
  {
    darktext: "Exercising my brain to stay sharp",
    url: 'https://img.freepik.com/free-psd/target-with-arrow-icon-isolated-3d-render-illustration_47987-9632.jpg?w=900'
  },
  {
   darktext: "Something else",
   url:'https://img.freepik.com/premium-psd/genius-idea-creative-lightbulb-solution-lamp-man_66255-1352.jpg?w=740'
  },
];

const Page2 = () => {
  return (
    <>
       <ProgressBar/>
      <section className="flex justify-center items-center lg:pt-0 p-2">
        <div className="flex flex-col text-center">
          <h1 className="font-sans font-bold text-[20px] lg:text-[38px]">
            Which are you most interested in?
          </h1>
          <p className="p-1 lg:p-5 text-[12px] lg:text-[20px]">
          Choose just one. This will help us get you started (but won’t limit your experience)
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

export default Page2;
