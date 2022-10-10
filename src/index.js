import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// We can set some defaults like the baseURL of which every other in the application would be appended to
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";


// Sometimes you might need to write some code that runs globally, whenever an http request is sent or recieved.We can do this with so called "interceptors"
// "interceptors" are functons you write globally that affects every reuest you make to a server, get, post or even delete.
// The interceptor was placed here because it has to be in the index component, top most
// All axios imports all share the same configuration
// The method here takes two functions, one for the requestConfig and the other for the Error Handling
// This is solely for requests
axios.interceptors.request.use(request => {
  console.log(request);
  // You can edit the config here
  // You must always return the requestConfig
  return request;
}, error => {
  // here we handle the error globally, we could also edit if we want
  console.log(error);
  // Also we must also return Promise.reject(error) here to pass it on to the other components for their local handling too
  return Promise.reject(error);
});

// We also create an "interceptor" for responses

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
