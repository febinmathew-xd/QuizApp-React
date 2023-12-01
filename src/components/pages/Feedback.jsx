import React from 'react'
import Header from '../wrappers/Header'
import Title from '../wrappers/Title'
import Main from '../wrappers/Main'

function Feedback() {
  return (
    <>
    <Header/>
    <Main paddingX={6}>
        <Title title={"Feedback"} />
        <p className='text-white/60 mb-6'>Your feedback is important to us as we continually strive to improve our services. Please take a moment to share your thoughts with us.</p>
        <input type="text" className='rounded-lg w-full bg-slate-800 mt-6 h-10 px-4 py-2  font-semibold focus:border focus:border-cyan-500 focus:outline-none' placeholder='Enter Your Name' />
        <textarea name="feedback" id="2" cols="10" rows="10" placeholder='Enter Your Feedback' className='h-24 bg-slate-800 font-semibold focus:border focus:border-cyan-500 focus:outline-none mt-6 w-full rounded-lg p-4'/>
        <button className='w-full bg-cyan-600 mt-6 py-2 rounded-lg text-white font-bold'>Send Feedback</button>
    </Main>
    </>
  )
}

export default Feedback