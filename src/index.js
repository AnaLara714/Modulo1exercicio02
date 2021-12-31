import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './features/Welcome';

const title = process.env.REACT_APP_TITLE;
const footer_desc = process.env.REACT_APP_FOOTER;

ReactDOM.render(
    <Welcome title={title} footer_desc={footer_desc}/>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
