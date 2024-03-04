import { useState } from 'react'
import { Sumofall } from './components/Sumofall'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Sumofall></Sumofall>
    </>
  )
}

export default App
