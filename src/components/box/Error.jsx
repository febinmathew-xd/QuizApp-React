import React from 'react'
import Main from '../wrappers/Main'

function Error({handleClick}) {
  return (
    <Main paddingX={6}>
        <div className='w-full h-[400px] bg-sky-950 mt-24 rounded-lg flex flex-col items-center justify-around py-24'>
        <i className="fa-solid fa-triangle-exclamation text-6xl text-cyan-600"></i>
        <h1 className='font-bold text-white/50 text-lg'>OOPS..! SOMETHING WENT WRONG</h1>
        <button className='bg-cyan-500 text-white/80 font-bold  py-2 rounded px-12' onClick={handleClick}>Try Again</button>

        </div>

    </Main>
  )
}

export default Error