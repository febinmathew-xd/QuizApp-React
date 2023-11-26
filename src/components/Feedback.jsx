import React from 'react'
import Header from './wrappers/Header'
import Title from './wrappers/Title'
import Main from './wrappers/Main'

function Feedback() {
  return (
    <>
    <Header/>
    <Main paddingX={6}>
        <Title title={"Feedback"} />
    </Main>
    </>
  )
}

export default Feedback