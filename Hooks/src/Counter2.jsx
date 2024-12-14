import React from 'react'

const Counter2 = () => {
    const countRef = useRef(0);
    const increment = () => {
        countRef.current += 1;
      };
  return (
    <div>
      <p> {countRef.current}</p>
      <button onClick={increment}></button>
    </div>
  )
}

export default Counter2
