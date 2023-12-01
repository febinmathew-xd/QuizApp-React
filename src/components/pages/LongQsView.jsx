import React, {useState, useEffect} from 'react'
import Header from '../wrappers/Header'
import Main from '../wrappers/Main'
import Title from '../wrappers/Title'
import { useParams } from 'react-router-dom'
import AnswerBox from '../box/AnswerBox'
import axios from 'axios'
import Loading from '../wrappers/Loading'
import Error from '../box/Error'

function LongQsView() {

  const {id} = useParams()

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const url = `https://bhagus.pythonanywhere.com/api/questions/${id}/`

  useEffect(()=>{
    setLoading(true);

    axios.get(url)
    .then(response=>{
      setQuestions(response.data);
      setError(false);
      console.log(response.data);
    })
    .catch(err=>{
      setError(true);
      console.log(err);

    })
    .finally(()=>{
      setLoading(false);
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



    <Main paddingX={4}>
      
        <Title title={questions[0]?.category.title}/>
        { 
          questions &&  questions.map((question, index) =>  <AnswerBox key={question?.id} question={question} index={index} />)
        }
       



    </Main>
    }
    </>
  )
}

export default LongQsView