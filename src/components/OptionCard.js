import React from 'react'

const OptionCard = (data) => {
  return (
    <>
      <div className="w-[300px] h-[40px] m-1
      lg:w-[760px] lg:h-[80px] border border-gray-300 rounded-md lg:m-2 flex flex-row hover:border-dotted items-center">
              <div className="w-[50px] lg:w-[80px] flex justify-center items-center lg:mx-[-1px]">
              <img src={data.url} alt="mountain" className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px]"/>
              </div>
              <div className="text-[12px] lg:text-[20px]">
              {data.darktext}<span className="text-gray-500"> {data.lighttext}</span>
              </div>
            </div>
    </>
  )
}

export default OptionCard