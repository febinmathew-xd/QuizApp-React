import React from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import Title from './wrappers/Title'
import { data } from '../data/data'
import AnswerBox from './box/AnswerBox'

function LongQsView() {
    const {questions} = data;

  return (
    <>
    <Header/>
    <Main paddingX={4}>
        <Title title={"Sociology 01"}/>
        {
            questions.map((question, index) =>  <AnswerBox key={question.id} question={question} index={index} />)
        }
       



    </Main>
    </>
  )
}

export default LongQsView