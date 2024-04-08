import React, { useContext } from 'react'
import { ProgressContext } from "../context/ProgressContext";

const ProgressBar = () => {
  const {progress} = useContext(ProgressContext);

  return (
    <>
      <div className="lg:m-10 md:m-3 m-3">
  <div className="h-1 w-full bg-gray-300 dark:bg-neutral-600 overflow-hidden">
    <div
      className="flex flex-col justify-center h-full bg-green-500 rounded transition-width duration-500 ease-in-out leading-none"
      style={{ width: `${progress * 20}%` }}
    ></div>
  </div>
</div>
    </>
  )
}

export default ProgressBar