import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Post'
// import Post from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <ol>
      <li>React Core Components</li>     
      <li>1-Components</li>
      <li>2-JSX</li>
      <li>3-Props</li> 
      <li>4-Events Handler</li>
      <li>5-State</li>
      <li>6-Load data</li>
      </ol>
      <Posts></Posts>

    </>
  )
}

export default App
