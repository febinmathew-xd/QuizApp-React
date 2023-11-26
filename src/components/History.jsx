import React from 'react'
import Header from './wrappers/Header'
import Title from './wrappers/Title'
import CategoryBox from './box/CategoryBox'
import Main from './wrappers/Main'
import { data } from '../data/data'


function History() {

  const category  = data.category

  return (
    <>
    <Header/>
    <Main paddingX={"6"} >
    <Title title={"History"}/>
    {category.map((category)=>(
      <CategoryBox key={category.id} data={category} btnLabel={"View"}/>
    ))}
        
        
        
    </Main>

    
    </>
  )
}

export default History