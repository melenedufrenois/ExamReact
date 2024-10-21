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
if (process.env.REACT_APP_MOCK_ENABLED === 'true') {
	const { worker } = require('./mocks/browser');
	worker.start({
		onUnhandledRequest: 'warn',
	});
}

reportWebVitals();