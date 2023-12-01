import React, { useEffect, useState } from 'react'
import Header from '../wrappers/Header'
import Title from '../wrappers/Title'
import CategoryBox from '../box/CategoryBox'
import Main from '../wrappers/Main'
import Loading from '../wrappers/Loading'
import Empty from '../wrappers/Empty'
import axios from 'axios'
import Error from '../box/Error'


function History() {

  const title = "History"

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(()=> {
    setLoading(true);

    axios.get("https://bhagus.pythonanywhere.com/api/category/history/")
    .then(response=>{

      console.log(response.data)
      setCategory(response.data);
      setError(false);
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
    {loading? <Loading/> :

    error? <Error handleClick={handleRefresh}/> :

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