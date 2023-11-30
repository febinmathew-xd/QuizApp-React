import React from 'react'


function AnswerBox({question, index}) {
    const optionLabel = ["a", "b", "c", "d"];

    const correctAnswer = question.option.find(option => option.is_true);
    console.log("q", question)
    console.log('c',correctAnswer)
    






  return (
    <div className='mb-3 border-b  border-cyan-500/20'>
        <h1 className='text-white/70 font-semibold mb-2'><span className='text-cyan-500/80 mr-2 font-bold'>{index +1}.</span>{question?.question}</h1>
        <div className='pb-4'>
        {
          question &&  question.option.map((option, index) => (
              
            <p key={option?.id} className={`ml-4 py-1 ${correctAnswer===option ? "text-green-600 font-semibold" : " text-white/50"} `}><span className='mr-2 text-cyan-500/70'>{optionLabel[index]}.</span>{option?.option}</p>
            ))
        }
        </div>


    </div>
  )
}

export default AnswerBox