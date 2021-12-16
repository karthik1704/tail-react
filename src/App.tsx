import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <h1 className=' font-poppins text-3xl font-bold text-purple-500'> Hello world!!!</h1>
    </div>
  )
}

export default App
