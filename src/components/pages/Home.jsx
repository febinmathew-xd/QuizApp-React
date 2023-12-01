import React, { useState, useEffect } from 'react'
import Header from '../wrappers/Header'
import Main from '../wrappers/Main'
import CategoryBox from '../box/CategoryBox'
import Title from '../wrappers/Title'
import Loading from '../wrappers/Loading'
import axios from 'axios'
import Empty from '../wrappers/Empty'
import Error from '../box/Error'

export default function Home() {

  const title = "Active"

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh]= useState(0);

  useEffect(()=> {
    setLoading(true);

    axios.get("https://bhagus.pythonanywhere.com/api/category/active/")
    .then(response=>{

      console.log(response.data)
      setCategory(response.data)
      setError(false)
    })
    .catch(err=>{
      setError(true);
      console.log(err)
    })
    .finally(()=>{
     setLoading(false)
    })

    

  }, [refresh]);

  const handleRefresh = () => {

    setRefresh(prev=>prev+1);

  };


  return (
    <>
    <Header/>
    {loading ? <Loading/> :

    error ? <Error handleClick={handleRefresh}/> :

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
