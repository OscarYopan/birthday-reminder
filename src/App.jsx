import { useState } from 'react'
import './App.css'
import { data } from './data'

function App() {
  const [peaple, setPeaple] = useState(data)
  console.log(peaple);
  console.log(setPeaple);
  return (    
    <div>
      <h1>Hi...</h1>      
    </div>
  )
}

export default App
