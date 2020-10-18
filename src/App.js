import React from 'react'
import { sum, sub, mul, divi } from './Calc';

const App = () => {
    return (
        <div>
            <ul>
                <li>Sum is: {sum(10, 5)}</li>
                <li>Sub is: {sub(10, 5)}</li>
                <li>Mul is: {mul(10, 5)}</li>
                <li>Divide is: {divi(10, 5)}</li>
            </ul>
        </div>
    )
}

export default App
