import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollProvider from './ScrollProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScrollProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </ScrollProvider>

  </React.StrictMode>
)
