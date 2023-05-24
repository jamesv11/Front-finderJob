import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


library.add(faTrash)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
