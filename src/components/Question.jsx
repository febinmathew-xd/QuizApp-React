import React, { useState } from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import Title from './wrappers/Title'
import OptionBox from './box/OptionBox'
import Button from './box/Button'
/* import { useParams } from 'react-router-dom' */
import {data } from '../data/data'

function Question() {
  /* const {id} = useParams(); */
  const questions = data.questions;
  
  const [questionNumber, setQuestionNumber] = useState(0);
  const [optedAnswer, setOptedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [buttonView, setButtonView] = useState("submit");

  console.log(optedAnswer);
  console.log(correctAnswer);



  

  const next = () => {
    if(questionNumber >= questions.length-1)  return;
    if(correctAnswer === null) return;
    setQuestionNumber((prevQuestionNumber) =>prevQuestionNumber+1 );
    
    console.log("button clicked");
    setCorrectAnswer(null);
    setOptedAnswer(null);
    setButtonView("submit");


  

  };


  const question = questions[questionNumber];

  const submit = () => {

    if(optedAnswer === null) return;
    
    for(let i =0; i< question.options.length; i++){
      if (question.options[i].isCorrect){
        setCorrectAnswer(question.options[i]);
      };
    };
    
    setButtonView("next");
    console.log("submit clicked");

  };



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


          {question.options.map((option, index)=>(
            <OptionBox key={option.id} selected={optedAnswer} correctAnswer={correctAnswer} optAns={setOptedAnswer} option={option} count={index} />
          ))}
          
        </div>
        <div className="btn flex justify-end py-6 ">
          {buttonView === "submit" ? <Button buttonLabel={"Submit"} onClick={submit}/> : <Button buttonLabel={"Next"} onClick={next} /> }
         
        
        </div>
        
    </Main>
    </>
  )
}

export default Question