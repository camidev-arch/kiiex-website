import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ScrollProvider from './ScrollProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScrollProvider>
    <ConfigProvider getPopupContainer={(triggerNode: HTMLElement | undefined) => (triggerNode?.parentNode as HTMLElement) || document.body }>
      <HashRouter>
        <App />
      </HashRouter>,
      </ConfigProvider>
    </ScrollProvider>

  </React.StrictMode>
)
