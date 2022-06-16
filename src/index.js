import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

//let rerenderEntireTree = (state) => {

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /*state={state} dispatch={store.dispatch.bind(store)} store={store}*/ />
    </Provider>
  </React.StrictMode>
);
//}
//rerenderEntireTree(store.getState())

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state)
// })

reportWebVitals();
