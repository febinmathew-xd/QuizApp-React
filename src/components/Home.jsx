import React, { useState, useEffect } from 'react'
import Header from './wrappers/Header'
import Main from './wrappers/Main'
import CategoryBox from './box/CategoryBox'
import Title from './wrappers/Title'
import { data } from '../data/data'
import Loading from './wrappers/Loading'
import axios from 'axios'
import Empty from './wrappers/Empty'

export default function Home() {

  const title = "Active"

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);

    axios.get("http://127.0.0.1:8000/api/category/active/")
    .then(response=>{

      console.log(response.data)
      setCategory(response.data)
    })
    .catch(err=>{
      console.log(err)
    })
    .finally(()=>{
     setLoading(false)
    })

    

  }, []);


  return (
    <>
    <Header/>
    {loading ? <Loading/> :

    category.length === 0 ? <Empty title={title}/> :
    
    <Main paddingX={"6"}>
        <Title title={title}/>
        {category.map((category)=>(
          <CategoryBox key={category?.id} data={category}/>
        ))}
        
        

    </Main>
    }
    </>
    
  )
}
