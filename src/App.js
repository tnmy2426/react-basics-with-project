import React, { useState } from 'react'
// import { sum, sub, mul, divi } from './Calc';

const App = () => {

    const [count, setCount] = useState(0)
    const increament = () =>{
        setCount(count+1)
    }
    
    return (
        <div className='container'>
            <h1>{count}</h1>
            <button onClick={increament}>Counter</button>
        </div>
    )
}

export default App
