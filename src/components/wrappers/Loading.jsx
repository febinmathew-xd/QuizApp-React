import React from 'react'
import Main from './Main'
import Header from './Header'

function Loading() {
  return (
    <>
    
     <Main paddingX={4}>
        <div className='flex justify-center items-center w-full pt-[300px] '>
            <div><i className="fa-solid fa-spinner text-5xl text-cyan-500 animate-spin"></i></div>
        
        </div>
        
    </Main>
    </>
    
   
  )
}

export default Loading