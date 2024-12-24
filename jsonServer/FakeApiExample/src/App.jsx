import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FakeApiComponent from './FakeApiComponent'
import Jsonserverapi from './Jsonserverapi'

function App() {

  return (
    <>
      <div>
        <h3>Fake Api Example</h3>
        {/* <FakeApiComponent /> */}
        <Jsonserverapi />
      </div>
    </>
  )
}

export default App
