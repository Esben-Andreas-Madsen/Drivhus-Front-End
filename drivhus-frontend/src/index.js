import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TempGraph from './components/TempGraph';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TempGraph/>
  </React.StrictMode>
);