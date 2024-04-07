import React from 'react'

const OptionCard = (data) => {
  return (
    <>
      <div className="w-[760px] h-[80px] border border-gray-300 rounded-md m-2 flex flex-row hover:border-dotted items-center">
              <div className="w-[80px] flex justify-center items-center mx-[-1px]">
              <img src="https://images3.alphacoders.com/165/thumb-1920-165265.jpg" alt="mountain" className="w-[35px] h-[35px]"/>
              </div>
              <div className="text-[20px]">
              {data.darktext}<span className="text-gray-500"> {data.lighttext}</span>
              </div>
            </div>
    </>
  )
}

export default OptionCard