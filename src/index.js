import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "TanmoY";
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const img_alt = "randomImages"

const refference = "https://www.google.com";


const elements = <Fragment>
  <h1 className="heading">Hello, My name is {name}</h1>
  <h3>Date is: {currentDate}</h3>
  <h4>Time is: {currentTime} </h4>
  <div className="img_div">
    <img src={img1} alt={img_alt} />
    <a href={refference}><img src={img2} alt={img_alt} /></a>
    <img src={img3} alt={img_alt} />
  </div>
</Fragment>

ReactDOM.render(
  elements,
  document.getElementById('root')
);