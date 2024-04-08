import React from "react";

const LoadingPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[600px] lg:h-[800px]">
        <div
          className="inline-block h-[90px] w-[90px] animate-spin rounded-full border-[20px] border-solid border-yellow-400 border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <div className="lg:w-[1000px]">
          <p className="font-sans font-bold text-[20px] lg:text-[32px] text-center m-[50px]">
            Finding learning path recommendations for you based on your
            responses
          </p>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
