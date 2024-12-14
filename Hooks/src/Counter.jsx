import React, { useState } from 'react'

const Counter = () => {
    const[state,setState]=useState(0)
  return (
    <div>
        <p>{state}</p>
      <button onClick={()=>setState(state+1)}>incres</button>
    </div>
  )
}

export default Counter
