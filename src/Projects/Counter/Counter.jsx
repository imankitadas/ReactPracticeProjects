import React, { useState } from 'react'
import './Counter.css'

const App = () => {
  const[count, setCount]  = useState(0);
  
  const Increament = () =>  { 
    setCount(count+1)
  }

  const Decreament = () => { 
    setCount(count-1)
  }
  
  const Reset = () => { 
    setCount(0)  
  }

  return (
    <div className='App'>
       <header>
         <h1>Counter app using State</h1>
       </header>
       <h2>Current value of count is {count}</h2>
       
        <button onClick = {Reset}>Reset Counter </button>
        <button onClick = {Increament}>Increase Counter </button>
        <button onClick = {Decreament}>Decrease Counter </button>
       
    </div>
  )
} 

export default App