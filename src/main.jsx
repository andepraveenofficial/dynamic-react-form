import React from 'react'
import { BrowserRouter,useNavigate} from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

import appStore from "./Store/appStore.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Provider store={appStore}>
    <BrowserRouter><App /></BrowserRouter>
    
    </Provider>
  </React.StrictMode>,
)
