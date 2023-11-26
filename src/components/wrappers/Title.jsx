import React from 'react'

function Title({title}) {
  return (
    <h1 className='text-cyan-600 font-bold text-xl pt-2 pb-4'>{title}<i className="fas fa-greater-than text-white/30 text-sm ml-2"></i>
    </h1>
  )
}

export default Title