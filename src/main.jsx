import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from '../src/redux/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
        <App />
    </Provider>

  </StrictMode>,
)
 

// which means the all the users acn assess the store 