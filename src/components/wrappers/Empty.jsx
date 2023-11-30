import React from 'react'
import Main from './Main'
import Header from './Header'
import Title from './Title'

function Empty({title}) {
  return (
    <>
    
    <Main paddingX={6}>
      <Title title={title} />
     <div className='flex w-full  justify-center items-center pt-[250px]'>
        <h1 className='font-medium text-xl text-white/40'>
            Nothing to Show
        </h1>
     </div>
    </Main>
    </>
  )
}

export default Empty