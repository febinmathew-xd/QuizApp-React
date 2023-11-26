import React from 'react'
import Main from './Main'
import Header from './Header'

function Loading() {
  return (
    <>
    <Header/>
     <Main>
        <div className='flex justify-center items-center w-full h-[calc(100vh-64px)] pb-32 '>
            <div><i className="fa-solid fa-spinner text-5xl text-cyan-500 animate-spin"></i></div>
        
        </div>
        
    </Main>
    </>
    
   
  )
}

export default Loading