import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Home from './home'
import Hooks from './components/Hooks/hooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    {/* <Hooks/> */}
  </StrictMode>,
)
