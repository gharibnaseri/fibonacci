import { useState } from 'react'
import Fibonacci from './Fibonacci'
import './App.css'

import ObjectRow from './ObjectRow'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Fibonacci</h1>
      <ObjectRow />
       
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

       <Fibonacci />
    </>
  )
}

export default App
