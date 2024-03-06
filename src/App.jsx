import { useState } from 'react'

import { Child } from './components/Child'
function App() {
  const [count, setCount] = useState(0)
 const [add,setAdd] = useState(0)

  return (
    <>
    <button onClick={()=>setCount(count+1)}> app.jsx  : {count}</button>
    <button onClick={()=>setAdd(add+1)}> add :   : {add}</button>

      <Child add={add}></Child>
    </>
  )
}

export default App
