import React, { useEffect, useState } from 'react'
import Header from './wrappers/Header'
import Title from './wrappers/Title'
import CategoryBox from './box/CategoryBox'
import Main from './wrappers/Main'
import Loading from './wrappers/Loading'
import Empty from './wrappers/Empty'
import { data } from '../data/data'
import axios from 'axios'


function History() {

  const title = "History"

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);

    axios.get("http://127.0.0.1:8000/api/category/history/")
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
    {loading? <Loading/> :

    category.length === 0 ? <Empty title={title}/> :
    <Main paddingX={"6"} >
    


    
      
      <>
      <Title title={title}/>
   { category.map((category)=>(
      <CategoryBox key={category?.id} data={category} btnLabel={"View"}/>
    ))}
    </>
    
        
        
        
    </Main>
    }

    
    </>
  )
}

export default History