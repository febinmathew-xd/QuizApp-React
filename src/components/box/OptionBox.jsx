import React from 'react'

function OptionBox({count, option, optAns,selected, correctAnswer}) {

  const optionLabel = ["a", "b", "c", "d"];

  return (
    <div onClick={()=>{correctAnswer===null && optAns(option)}} className={`${correctAnswer === option ? "bg-green-600 font-bold" : ""} w-full min-h-[40px] mb-6 py-2 rounded-lg flex items-center px-3 text-sm text-white/70 ${selected === option ? "bg-cyan-500/70 font-bold": "bg-cyan-600/20 "}`}>
        <p><span className='font-semibold mr-2 text-cyan-400/90 text-base'>{optionLabel[count]}.</span>{option?.option}</p>
    </div>
  )
}

export default OptionBox