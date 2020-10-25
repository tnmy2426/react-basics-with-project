import React, { useState } from 'react'
import './App.css'
// import { sum, sub, mul, divi } from './Calc';

const App = () => {

    const [inputDataFirstName, setInputDataFirstName] = useState('')
    const inputHandlerOne = (event) => {
        setInputDataFirstName(event.target.value)
    }

    const [inputDataLastName, setInputDataLastName] = useState('')
    const inputHandlerTwo = (event)=>{
        setInputDataLastName(event.target.value)
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const btnHandler = (event) => {
        event.preventDefault();
        setFirstName(inputDataFirstName);
        setLastName(inputDataLastName);
    }

    return (
        <div className='container'>
            <form onSubmit={btnHandler}>
                <div>
                    <h1>Hello {firstName} {lastName}</h1>
                    <input type='text' placeholder='Enter Your First Name' onChange={inputHandlerOne} value={inputDataFirstName} />
                    <input type='text' placeholder='Enter Your Last Name' onChange={inputHandlerTwo} value={inputDataLastName} />
                    <button type='submit'>Submit 👍 </button>
                </div>
            </form>
        </div>
    )
}

export default App
