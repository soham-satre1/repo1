import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function First(){
	return(<h1>This is My First Component</h1>);
}
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<First />)


var Second=function (){
	return(<h1>This is Anomynous Function</h1>);
}
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<Second />)

//class based components
class Third extends React.Component{
render(){
	return (
	
	<div>
	<h1>this is class based components.....</h1>
	<p>this is class based paragraph.....</p>
	<h2>this is class based something.....</h2>
	<h3>...................................</h3>
	</div>
	
	)
	}
}
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<Third />)
	function Myform(){
	
	 return (
    <form>
      Name<input type="name=" placeholder="Enter Your Name" /><br></br>
	 DOB<input type="date" placeholder="" /><br></br>
	 Email<input type="email" placeholder="Enter Your Email" /><br></br>
	 Password<input type="password" placeholder="" /><br></br>
	<input tupe="Submit" name="" value="Submit" />
	</form>
const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<Myform />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();
