import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hello from './components/hello';

// const root = <div>
//   <Hello firstName="Jake" lastName="Pople"/>
// </div>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//<React.StrictMode>
//  <Hello name="Jake" />
//</React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
