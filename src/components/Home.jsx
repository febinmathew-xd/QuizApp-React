import React, { useState } from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import CategoryBox from './box/CategoryBox'
import Title from './wrappers/Title'
import { data } from '../data/data'

export default function Home() {

  const [category, setCategory] = useState(data.category);


  return (
    <>
    <Header/>
    <Main paddingX={"6"}>
        <Title title={"Active"}/>
        {category.map((category)=>(
          <CategoryBox key={category.id} data={category}/>
        ))}
        
        

    </Main>
    </>
    
  )
}
