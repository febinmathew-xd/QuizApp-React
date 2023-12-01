import React, { useState, useEffect } from 'react'
import Header from '../wrappers/Header'
import Main from '../wrappers/Main'
import Title from '../wrappers/Title'
import OptionBox from '../box/OptionBox'
import Button from '../box/Button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../wrappers/Loading'
import Result from '../box/Result'
import Error from '../box/Error'

function Question() {
  const {id} = useParams();




  

  

  const url = `https://bhagus.pythonanywhere.com/api/questions/${id}/`
  
  
  const [questionNumber, setQuestionNumber] = useState(0);
  const [optedAnswer, setOptedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [buttonView, setButtonView] = useState("submit");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState(null);
  const [result, setResult] = useState(false);
  const [refresh, setRefresh] = useState(0);

 

  useEffect(()=>{
    setLoading(true)

    axios.get(url)
    .then(response=>{
      setQuestions(response.data);
      setQuestion(response.data[questionNumber]);
      setError(false);
      console.log("questions: ", response.data);
    })
    .catch(err=>{
      setError(true);
      console.log(err)
    })
    .finally(()=>{
      setLoading(false)
    })

  },[refresh]);


  const handleRefresh = () => {

    setRefresh(prev=>prev+1);
    setQuestionNumber(0);
    setOptedAnswer(null);
    setCorrectAnswer(null);
    setButtonView("submit");

  };




console.log("quest",question)

  

  const next = () => {
    if(questionNumber >= questions.length-1)  return;
    if(correctAnswer === null) return;
    setQuestionNumber((prevQuestionNumber) =>prevQuestionNumber+1 );
    setQuestion(questions[questionNumber+1])
    
    console.log("Next clicked");
    setCorrectAnswer(null);
    setOptedAnswer(null);
    setButtonView("submit");


  

  };


  /* const question = questions && questions.length > 0 ? questions[questionNumber] : null; */


  const submit = () => {

    if(optedAnswer === null) return;
    
    for(let i =0; i< question.option.length; i++){

      if (question.option[i].is_true){
        setCorrectAnswer(question.option[i]);
        
      };
    };

    

    if (questionNumber===questions.length-1){
      setButtonView("finish");
    } else {

      setButtonView("next");
    };
    
    console.log("submit clicked");
    

  };

/* Handle Finish button click -- change active status to false */

const finish = ()=> {
  setLoading(true);

  axios.patch(`https://bhagus.pythonanywhere.com/api/category/set/inactive/${id}/`, {is_active: false})
  .then(response=>{
    console.log("patch response",response.data);
    setResult(true);
    setError(false);
  })
  .catch(err=>{
    setError(true);
    console.log(err)
  })
  .finally(()=>{
    setLoading(false)
  })



};



  return (
    
    <>
    <Header/>

    {loading? <Loading/> :

    error ? <Error handleClick={handleRefresh}/> :

    result ? <Result title={questions[0]?.category.title} id={id}/> :
    
    <Main paddingX={4}>
        <Title title={questions[0]?.category.title} />
        <div className='mt-8 mb-8'> 
        <div className='bg-cyan-600/20 rounded-lg w-full min-h-[60px] p-2 pl-3  flex items-center '>
            <h1 className='text-white/70 text-sm '> 
                <span className='font-bold mr-2 text-cyan-400 text-lg '>{questionNumber + 1}.</span> {question?.question}
            </h1>
          
        </div>
        </div>
        <div className='mt-12'>


          {question && question.option.map((option, index)=>(
            <OptionBox key={option?.id} selected={optedAnswer} correctAnswer={correctAnswer} optAns={setOptedAnswer} option={option} count={index} />
          ))}
          
        </div>
        <div className="btn flex justify-end py-6 ">
          {
          
            buttonView === "submit" ? <Button buttonLabel={"Submit"} handleClick={submit}/> 
          : buttonView === "next" ? <Button buttonLabel={"Next"} handleClick={next} />  
          : <Button buttonLabel={"Finish"} handleClick={finish}/>
          
          }
         
        
        </div>
        
    </Main>
    }
    </>
  )
}

export default Question