import React from 'react'

const ResultCard = ({darktext, lighttext, result}) => {
  return (
    <div className="w-[300px] h-[240px] lg:w-[520px] lg:h-[226px] m-2 border border-gray-300 rounded-md flex justify-center lg:p-5">
  {result ? (
    <>
      <div className="absolute w-[130px] h-[34px] top-[-20px] bg-yellow-500 p-2 rounded-lg">
        <p className="text-[10px] lg:text-[12px] flex justify-center font-semibold">
          MOST POPULAR
        </p>
      </div>
    </>
  ) : null}
  <div className="w-3/5 flex items-center">
    <p className="font-sans text-[12px] lg:text-[20px] m-2">
      <span className="font-semibold">{darktext}</span> {lighttext}
    </p>
  </div>
  <div className="flex items-center">
    <img
      src="https://img.freepik.com/premium-psd/psd-knowledgem-idea-insights_904424-263.jpg?w=740"
      alt="Foundational Math"
      className="w-[170px] h-[150px]"
    />
  </div>
</div>

  )
}

export default ResultCard