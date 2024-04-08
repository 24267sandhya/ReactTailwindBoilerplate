import React from 'react'

const SquareCard = (data) => {
  return (
    <>
       <div className="w-[268px] h-[255px] border border-gray-300 rounded-md m-2 flex flex-col hover:border-yellow-300 items-center pb-3">
          <div className="flex justify-center items-center pt-5">
            <img src={data.url} alt="butterfly" className="w-[200px] h-[125px]"/>
          </div>
          <div className="text-center pt-4">
            <p className="text-[19px]">{data.darktext}</p>
            <p className="text-[22px] text-gray-500">{data.lighttext}</p>
          </div>
        </div>
    </>
  )
}

export default SquareCard