import React from 'react'
import Header from './wrappers/Header'
import Title from './wrappers/Title'
import CategoryBox from './box/CategoryBox'
import Main from './wrappers/Main'


function History() {
  return (
    <>
    <Header/>
    <Main paddingX={"6"} >
    <Title title={"History"}/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
    </Main>

    
    </>
  )
}

export default History