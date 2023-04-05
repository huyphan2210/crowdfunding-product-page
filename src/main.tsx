import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main/MainContent'
import Header from './components/Header/Header'
import './index.css'

ReactDOM.createRoot(document.getElementsByTagName('header')[0] as HTMLElement).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementsByTagName('main')[0] as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
