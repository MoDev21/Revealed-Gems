import { useState } from 'react'
import reactLogo from './assets/react.svg'
import portal from './assets/portal.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar.jsx'
import Purchase_Item from './components/purchase_item.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //`const [perchase_items, setperchase_items] = useState(0)
  const perchase_items = [{name: 'Gem 1', desc: 'This is a list of gems that have been revealed throughout the book.', price: '10.99', image: 'https://via.placeholder.com/150'}, 
  {name: 'Gem 2', desc: 'This is a list of gems that have been revealed throughout the book.', price: '10.99', image: 'https://via.placeholder.com/150'},
  {name: 'Gem 3', desc: 'This is a list of gems that have been revealed throughout the book.', price: '10.99', image: 'https://via.placeholder.com/150'},
  {name: 'Gem 4', desc: 'This is a list of gems that have been revealed throughout the book.', price: '10.99', image: 'https://via.placeholder.com/150'},
  {name: 'Gem 5', desc: 'This is a list of gems that have been revealed throughout the book.', price: '10.99', image: 'https://via.placeholder.com/150'}, 
  {name: 'Gem 6', desc: 'This is a list of gems that have been revealed throughout the book.', price: '10.99', image: 'https://via.placeholder.com/150'},
  {name: 'Gem 7', desc: 'This is a list of gems that have been revealed throughout the book.', price: '10.99', image: 'https://via.placeholder.com/150'},
  {name: 'Gem 8', desc: 'This is a list of gems that have been revealed throughout the book.', price: '10.99', image: 'https://via.placeholder.com/150'}]
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
      <div className="header_logo_container">
        <img src={'./src/assets/RevealedGems.png'} className="header_logo" alt="Revealed Gems logo" style={{scale: '1.5'}}/>
        <h1>Revealed <br /> Gems</h1>
      </div>

      <button className='more_items_button' onClick={() => setCount((count) => count + 1)} style={{height: '100px', width: '200px'}}>
          count is {count}
      </button>
      <img src={portal} className="portal" alt="Vite logo" style={{scale: '1.5'}}/>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="items_container">
        {perchase_items.map((item, index) => (
          <Purchase_Item />
        ))}
      </div>
      <Purchase_Item />

    </>
  )
}

export default App
