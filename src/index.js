import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const widgetDiv = document.querySelector('.widget-example');
const root = ReactDOM.createRoot(widgetDiv);
root.render(<App increment={widgetDiv.dataset.increment} />);
