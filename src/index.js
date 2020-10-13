import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "TanmoY";
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();


const elements = <Fragment>
  <h1>Hello, My name is {name}</h1>
  <h3>Date is: {currentDate}</h3>
  <h4>Time is: {currentTime} </h4>
</Fragment>

ReactDOM.render(
  elements,
  document.getElementById('root')
);