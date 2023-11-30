import React from 'react'
import Main from '../wrappers/Main'
import { Link } from 'react-router-dom'

function Result({id, title}) {
  return (
    <Main paddingX={6}>
        <div className='w-full h-[calc(100vh-90px)] pb-[200px] flex items-center'>
            <div className='w-full h-[480px] bg-sky-950 rounded-lg p-4 flex flex-col items-center justify-between mt-12 '>
                <div className="quote text-center bg-sky-900 p-4 rounded-lg w-full">
                
                
                <h1 className='font-bold text-sm text-white/60'><span><i className="fa-solid fa-quote-left text-cyan-500 mr-4 text-sm"></i> </span>
                Time and tide wait for none.You should study well bhagyaYou should study well bhagya
                <span><i className="fa-solid fa-quote-right text-cyan-500 ml-4 text-sm"></i></span>
                </h1>
                
                </div>
                <div className='cong flex flex-col items-center text-cyan-600'>
                    <h1 className='font-bold py-4'>{title}</h1>
                <i className="fa-solid fa-award text-5xl"></i>
                    <h1 className='text-3xl font-bold'>EXCELLENT</h1>
                    <p className='text-center text-sm font-semibold text-white/40'>"Your journey goes beyond scores - it's your active involvement that makes it truly remarkable. Excellent effort!"</p>
                </div>
                <div className="buttons flex flex-col">
                    <button className='bg-cyan-600 text-sm font-bold text-white/90 w-full px-12 rounded-lg py-2 '>
                       <Link to={`/answers/${id}`}>VIEW ALL ANSWERS</Link> 
                        </button>
                    <button className='bg-cyan-600 text-sm font-bold text-white/90 px-24 rounded-lg py-2 mt-6 mb-2 '>
                        <Link to="/">GO HOME</Link>
                        </button>
                </div>


            </div>

        </div>

    </Main>
  )
}

export default Result