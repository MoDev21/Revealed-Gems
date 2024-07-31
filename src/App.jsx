import { useState } from 'react'
import reactLogo from './assets/react.svg'
import portal from './assets/portal.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar.jsx'
import Purchase_Item from './components/purchase_item.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="header_logo">

      </div>
      <h1>Vite + React</h1>
      <button className='more_items_button' onClick={() => setCount((count) => count + 1)} style={{height: '100px', width: '200px'}}>
          count is {count}
      </button>
      <img src={portal} className="portal" alt="Vite logo" style={{scale: '1.5'}}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Purchase_Item />

    </>
  )
}

export default App
