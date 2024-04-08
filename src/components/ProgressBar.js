import React, { useContext } from 'react'
import { ProgressContext } from "../context/ProgressContext";

const ProgressBar = () => {
  const {progress} = useContext(ProgressContext);

  return (
    <>
      <div className="m-10">
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