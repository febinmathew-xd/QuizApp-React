import React from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import Title from './wrappers/Title'
import OptionBox from './box/OptionBox'
import Button from './box/Button'

function Question() {
  return (
    
    <>
    <Header/>
    <Main paddingX={4}>
        <Title title={"Sociology 01"} />
        <div className='mt-8 mb-8'> 
        <div className='bg-cyan-600/20 rounded-lg w-full min-h-[60px] p-2 pl-3  flex items-center '>
            <h1 className='text-white/70 text-sm '> 
                <span className='font-bold mr-2 text-cyan-400 text-lg '>1.</span>Consider the following statements:
            </h1>
          
        </div>
        </div>
        <div className='mt-12'>
          <OptionBox count={"a"}/>
          <OptionBox count={"b"}/>
          <OptionBox count={"c"}/>
          <OptionBox count={"d"}/>
        </div>
        <div className="btn flex justify-end py-6 ">
        <Button/>
        </div>
        
    </Main>
    </>
  )
}

export default Question