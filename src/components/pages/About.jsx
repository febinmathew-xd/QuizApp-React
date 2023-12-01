import React from 'react'
import Header from '../wrappers/Header'
import Main from '../wrappers/Main'
import Title from '../wrappers/Title'

function About() {
  return (
   <>
   <Header/>
   <Main paddingX={6}>
    <Title title={"About"} />
    <h1 className='font-bold text-xl text-cyan-600'>Bhagu's App</h1>
    <p className='text-sm text-white/60 py-2'>Your Ultimate Companion for Exam Preparation.</p>
    <h2 className='font-semibold text-lg text-cyan-600 py-3'>Mission</h2>

    <p className='text-sm text-white/60'>Bhagu's App is your dedicated partner in preparing for exams like UGC-NET. We strive to provide free,<br /> ad-free quizzes, ensuring that your preparation journey is efficient, effective, and enjoyable.</p>

    <h2 className='font-semibold text-lg text-cyan-600 py-3'>Features</h2>

    <p className='text-sm text-white/60 pb-3'><span className='font-bold text-cyan-600/80'>Free & Ad-Free: </span> Access exam-focused quizzes without any cost or distractions.</p>
    <p className='text-sm text-white/60 pb-3'><span className='font-bold text-cyan-600/80'>Targeted Exam Content: </span> Sharpen your skills with quizzes specifically designed for exams like UGC-NET.</p>
    <p className='text-sm text-white/60 pb-3'><span className='font-bold text-cyan-600/80'>Simplified Learning: </span>  Our user-friendly interface is crafted for focused exam preparation.</p>



    
    <p  className='text-sm text-white/60 mt-12'><span className='font-bold text-cyan-600/80'>Thank you</span> for entrusting us with your exam preparation. Let's excel together and conquer your goals!</p>
    <h1 className='text-white/60 mt-6 font-semibold'>Febin Mathew</h1>
    <h2 className=' font-bold text-sm text-cyan-700' >C.E.O</h2>
   </Main>
   </>
  )
}

export default About