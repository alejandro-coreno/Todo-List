import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TareaProvider } from './context/TareaProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TareaProvider>
      <App />
    </TareaProvider>
  </React.StrictMode>,
);
