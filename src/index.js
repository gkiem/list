import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Counter from './Counter'
// import Filter from './Filter'
// import Trial from './Trial.js'
//import Library from './Library'
import Slider from './Slider'
import Mainer from './Mainer'
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Counter />
    <Filter /> */}
    <Slider />
    {/* <Trial /> */}
    {/* <Mainer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
