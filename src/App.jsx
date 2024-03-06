import { useCallback, useState } from 'react'

import { Child } from './components/Child'
function App() {
  const [count, setCount] = useState(0)
 const [add,setAdd] = useState(0)

  const fun = useCallback(()=>{
    console.log('fun')
  },[])

  return (
    <>
    <button onClick={()=>setCount(count+1)}> app.jsx  : {count}</button>
    <button onClick={()=>setAdd(add+1)}> add : {add}</button>

      <Child add={add} fun={fun}></Child>
    </>
  )
}

export default App
