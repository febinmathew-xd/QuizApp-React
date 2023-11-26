import React from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import CategoryBox from './box/CategoryBox'
import Title from './wrappers/Title'

export default function Home() {
  return (
    <>
    <Header/>
    <Main paddingX={"6"}>
        <Title title={"Active"}/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>
        <CategoryBox/>

    </Main>
    </>
    
  )
}
