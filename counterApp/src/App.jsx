import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  const addCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const subCount = () => {

      setCount(prevCount => (prevCount > 0 )? (prevCount - 1) : 0)
    
  }

  return (
    <>
    <center>

    <h1>Counter App</h1>

      <h4>Count Value is : {count}</h4>

      <button onClick={addCount}>Add Count </button>
      &nbsp;
      <button onClick={subCount}>Sub Count </button>

    </center>
      
    </>
  )
}

export default App
