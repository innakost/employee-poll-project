import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducers";
import middleware from './middleware';
import { BrowserRouter as Router } from 'react-router-dom';

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const localState = JSON.stringify(state);
    localStorage.setItem("localState", localState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert back in to an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const localState = localStorage.getItem("localState");
    if (localState === null) return undefined;
    return JSON.parse(localState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// preload state from local storage
// because state resets each time I type url in address bar
const store = createStore(reducer, loadFromLocalStorage(), middleware);

store.subscribe(() => saveToLocalStorage(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);