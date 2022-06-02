import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*data*/
let posts = [
  { id: 1, message: 'Hello,world!', mileage: 1000, date: 2020 },
  { id: 2, message: 'Change oil in gear', mileage: 15000, date: 2021 },
  { id: 3, message: 'Install new car radio Blapunkt', mileage: 16500, date: 2022 },
]
let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Masha' },
  { id: 3, name: 'Vanya' },
  { id: 4, name: 'Victor' },
  { id: 5, name: 'Carl' },
]
let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Fine' },
  { id: 4, message: 'Nice car' },
  { id: 5, message: 'Yo!!!' },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
