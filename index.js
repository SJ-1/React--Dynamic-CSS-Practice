import react from 'react';
import ReactDom from 'react-dom';
import "./index.css";

let date = new Date();
date = date.getHours();
let greeting = '';
let cssStyle = { };

if(date >=1 && date<12)
{
  greeting = "Good Morning";
  cssStyle.color = "green";
}
else if(date >=12 && date <19)
{
  greeting = "Good AfterNoon";
  cssStyle.color = "orange";
}
else{
  greeting = "Good Night";
  cssStyle.color = "black";
}
ReactDom.render(
  <>
  <div>
  <h1 className='heading'>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
  </div>
  </>,
  document.getElementById('root')
);
