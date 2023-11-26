import React, { useState } from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import Title from './wrappers/Title'
import OptionBox from './box/OptionBox'
import Button from './box/Button'
import { useParams } from 'react-router-dom'
import {data } from '../data/data'

function Question() {
  const {id} = useParams();
  const questions = data.questions;
  console.log(questions.length)
  const [questionNumber, setQuestionNumber] = useState(0)

  

  const handleClick = () => {
    if(questionNumber >= questions.length-1)  return;
    setQuestionNumber((prevQuestionNumber) =>prevQuestionNumber+1 );
    
    console.log("button clicked");

  

  };

  const question = questions[questionNumber];



  return (
    
    <>
    <Header/>
    <Main paddingX={4}>
        <Title title={"Sociology 01"} />
        <div className='mt-8 mb-8'> 
        <div className='bg-cyan-600/20 rounded-lg w-full min-h-[60px] p-2 pl-3  flex items-center '>
            <h1 className='text-white/70 text-sm '> 
                <span className='font-bold mr-2 text-cyan-400 text-lg '>{questionNumber + 1}.</span> {question.question}
            </h1>
          
        </div>
        </div>
        <div className='mt-12'>
          <OptionBox option={question.options[0]} count={"a"}/>
          <OptionBox option={question.options[1]} count={"b"}/>
          <OptionBox option={question.options[2]} count={"c"}/>
          <OptionBox option={question.options[3]} count={"d"}/>
        </div>
        <div className="btn flex justify-end py-6 ">
        <Button onClick={handleClick} />
        </div>
        
    </Main>
    </>
  )
}

export default Question