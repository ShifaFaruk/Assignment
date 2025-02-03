import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    axios.get('http://localhost:5000/api/message')
      .then(response => {
        setMessage(response.data.message)
      })
      .catch(errorr => {
        console.error('error fetching data:', errorr)
      })

  }, [])
  return (
    <>
      <h1>FrontEnd Backend Integration</h1>
      <p>{message}</p>
    </>
  )
}

export default App


