import React from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import Title from './wrappers/Title'
import { useParams } from 'react-router-dom'
import AnswerBox from './box/AnswerBox'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Loading from './wrappers/Loading'

function LongQsView() {

  const {id} = useParams()

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const url = `http://127.0.0.1:8000/api/questions/${id}/`

  useEffect(()=>{
    setLoading(true);

    axios.get(url)
    .then(response=>{
      setQuestions(response.data);
      console.log(response.data);
    })
    .catch(err=>{
      console.log(err);

    })
    .finally(()=>{
      setLoading(false);
    })

  }, []);

  return (
    <>
    <Header/>
    {loading ? <Loading/> :
    <Main paddingX={4}>
      
        <Title title={questions[0]?.category.title}/>
        { 
          questions &&  questions.map((question, index) =>  <AnswerBox key={question?.id} question={question} index={index} />)
        }
       



    </Main>
    }
    </>
  )
}

export default LongQsView