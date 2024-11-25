import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <h1>Count App</h1>
                <br />
                <h1>{count}</h1>
                <button onClick={() => { setCount(count + 1) }}>Add</button>
                <button onClick={() => { setCount(count - 1) }}>Minus</button>
            </div>

        </>
    )
}
export default Counter