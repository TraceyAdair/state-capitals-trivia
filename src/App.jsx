// import { useState } from 'react'
import './App.css'
import CaptialQuestion from './Components/CapitalQuestion'
import { stateQuestionArray } from './Components/stateQuestionArray'


function App() {
  function handleClick()  {
    console.log('Ready?')
  }
  

  return (
    <>
    {/* <h1>State Capitals</h1> */}
      
      <CaptialQuestion questions={stateQuestionArray.questions}/>
     
      


    </>
 

    
  )
}

export default App
