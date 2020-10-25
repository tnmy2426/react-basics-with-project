import React, { useState } from 'react'
import './App.css'
// import { sum, sub, mul, divi } from './Calc';

const App = () => {

    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email:"",
        phone:"",
        address:""
    })
    
    const inputHandler = (event) => {
        // console.log(event.target.name)
        const {name, value} = event.target;
        setInputData((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })
    }

    const btnHandler = (event) => {
        event.preventDefault();
    }
    
    return (
        <div className='container'>
            <form onSubmit={btnHandler}>
                <div>
                    <marquee>Demo Form</marquee>
                    <h1>Hello {inputData.firstName} {inputData.lastName} </h1>
                    <h3>{inputData.email}</h3>
                    <p><i>{inputData.phone}</i></p>
                    
                    <input type='text' placeholder='Enter Your First Name' onChange={inputHandler} name='firstName' value={inputData.firstName} />
                    
                    <input type='text' placeholder='Enter Your Last Name' onChange={inputHandler} name='lastName' value={inputData.lastName} />
                    
                    <input type='email' placeholder='Enter Your Email' onChange={inputHandler} name='email' value={inputData.email} />
                    
                    <input type='number' placeholder='Enter Your Mobile Number' onChange={inputHandler} name='phone' value={inputData.phone} />

                    <input type='text' placeholder='Enter Your Address' onChange={inputHandler} name='address' value={inputData.address} />
                    
                    <button type='submit'>Submit 👍 </button>
                </div>
            </form>
        </div>
    )
}

export default App
