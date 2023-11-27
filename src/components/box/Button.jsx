import React from 'react'

function Button({onClick, buttonLabel}) {
  return (
    <button onClick={onClick} className='bg-cyan-500 rounded-md w-24 py-2 text-white/80 font-bold'>{buttonLabel}</button>
  )
}

export default Button