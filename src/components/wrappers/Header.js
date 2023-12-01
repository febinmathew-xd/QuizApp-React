import React, { useState } from 'react'
import { Link ,NavLink} from 'react-router-dom'

function Header({children}) {

const [sidebar, setSidebar] = useState(false);



  return (
    <header className='w-full h-16  bg-slate-900 border-b border-cyan-600 text-cyan-600 flex items-center justify-between px-6 relative '>
      
      
      
      <div className={`w-3/5 sidebar transition-all ease-in-out h-screen bg-slate-900 border-l border-cyan-500/30 absolute top-0 right-0 z-10 flex flex-col px-4 pt-6 ${!sidebar? "translate-x-full" : "translate-x-0"} `}>

        <div onClick={()=>{setSidebar(false)}} className='flex justify-end'>
          <i className="fa-solid fa-xmark text-3xl font-bold"></i>
        </div>

        <div className='links mt-4 flex flex-col font-semibold text-base'>

        <NavLink  onClick={()=>{setSidebar(false)}} className='px-2 py-4 border-b border-cyan-500' to="/">Active</NavLink>
        <NavLink  onClick={()=>{setSidebar(false)}} className='px-2 py-4 border-b border-cyan-500' to="/history">History</NavLink>
        <NavLink  onClick={()=>{setSidebar(false)}} className='px-2 py-4 border-b border-cyan-500' to="/feedback">Feedback</NavLink>
        <NavLink  onClick={()=>{setSidebar(false)}} className='px-2 py-4 border-b border-cyan-500' to="/about">About</NavLink>

        </div>
        <div className='p-4 text-center pt-8 text-white/50 text-sm'>
          <h1>Made with <span className='ml-2 text-cyan-500'><i className="fa-solid fa-heart"></i></span></h1>
        </div>
       
      </div>
      

      <Link to="/">
      <i className="fa-solid fa-b text-base bg-cyan-900/50 rounded-lg py-2 px-4"></i>
      </Link>
      
      <i className="fa-solid fa-bars text-3xl" onClick={()=>{setSidebar(true)}}></i>
      
     {children}
    </header>
  )
}

export default Header