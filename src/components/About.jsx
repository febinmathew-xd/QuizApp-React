import React from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import Title from './wrappers/Title'

function About() {
  return (
   <>
   <Header/>
   <Main paddingX={6}>
    <Title title={"About"} />
   </Main>
   </>
  )
}

export default About