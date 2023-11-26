import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({children}) {

const [sidebar, setSidebar] = useState(false);



  return (
    <header className='w-full h-16 bg-slate-900 border-b border-cyan-600 text-cyan-600 flex items-center justify-between px-6 relative '>
      
      {sidebar && 
      
      <div className='w-3/5 h-screen bg-slate-900 border-l border-cyan-500/30 absolute top-0 right-0 z-10 flex flex-col px-4 pt-8'>
        <div onClick={()=>{setSidebar(false)}} className='flex justify-end'><i class="fa-solid fa-xmark text-3xl font-bold"></i></div>

        <div className='links mt-4 flex flex-col font-semibold text-base'>
        <Link onClick={()=>{setSidebar(false)}} className='px-2 py-4 border-b border-cyan-500' to="/">Home</Link>
        <Link  onClick={()=>{setSidebar(false)}} className='px-2 py-4 border-b border-cyan-500' to="/history">History</Link>
        <Link  onClick={()=>{setSidebar(false)}} className='px-2 py-4 border-b border-cyan-500'>Feedback</Link>
        <Link  onClick={()=>{setSidebar(false)}} className='px-2 py-4 border-b border-cyan-500'>About</Link>

        </div>
       
      </div>
      }

      <Link to="/">
      <i class="fa-solid fa-b text-xl bg-cyan-900/50 rounded-lg py-2 px-4"></i>
      </Link>
      
      <i class="fa-solid fa-bars text-3xl" onClick={()=>{setSidebar(true)}}></i>
      
     {children}
    </header>
  )
}

export default Header