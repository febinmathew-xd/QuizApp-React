import React from 'react'
import { Link } from 'react-router-dom'
import History from '../History'

function CategoryBox() {
  return (
    <div className='w-full rounded-lg h-28 flex justify-between items-center text-white bg-sky-950 mb-6 p-4'>
      <div>
        <h1 className='font-bold opacity-70'>Sociology 01</h1>
        <p className='text-sm opacity-70 mt-1'>20 Questions</p>
      </div>
      <div>
        <button className='bg-cyan-500 rounded-md no-tap-highlight px-4 py-2 text-sm opacity-90 font-bold '>
        <Link  to="/category/01">
        Start
        </Link>
        
        </button>
        
      </div>
      </div>
  )
}

export default CategoryBox