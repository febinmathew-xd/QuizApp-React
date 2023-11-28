import React from 'react'
import { Link } from 'react-router-dom'


function CategoryBox({data,btnLabel}) {
  return (
    <div className='w-full rounded-lg h-28 flex justify-between items-center text-white bg-sky-950 mb-6 p-4'>
      <div>
        <h1 className='font-bold opacity-70'>{data.name}</h1>
        <p className='text-sm opacity-70 mt-1'>20 Questions</p>
      </div>
      <div>
        <button className='bg-cyan-500 rounded-md px-4 py-2 text-white/90 text-sm opacity-90 font-bold '>
          {
            btnLabel ? <Link to={`/answers/${data.id}`}>View</Link> :
        <Link  to={`/category/${data.id}`}>
          Start
        </Link>

         }
        
        </button>
        
      </div>
      </div>
  )
}

export default CategoryBox