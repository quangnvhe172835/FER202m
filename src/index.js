import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import MySection from './Slot2/create-jsx-elements/MySection';
import MyButton from './Slot2/create-jsx-elements/MyButton';
import MyComponent from './Slot2/create-jsx-elements/MyComponents';
import App from './Slot2/Mapping-collections-to-elements/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
