import React from 'react'

function OptionBox({count}) {
  return (
    <div className='bg-cyan-600/20 w-full min-h-[40px] mb-6 rounded-lg flex items-center px-3 text-sm text-white/70 '>
        <p><span className='font-semibold mr-2 text-cyan-400/90 text-base'>{count}.</span>Even the slightest economic disparity</p>
    </div>
  )
}

export default OptionBox