import { useState } from 'react'
import reactLogo from './assets/react.svg'
import portal from './assets/portal.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar.jsx'
import Purchase_Item from './components/purchase_item.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState('all');
  const [sortOptions, setSortOptions] = useState('name ↥');
  const [buttonName, setButtonName] = useState('');
  
  //`const [perchase_items, setperchase_items] = useState(0)
  const perchase_items = [
    {name: 'Moondrop Space Travel TWS Earphone', desc: 'This is a list of gems that have been revealed throughout the book.', price: '33.99', image: './src/assets/gems/electronic/41E3tJq-EuL._AC_-removebg-preview.png',categorie:'electronics'}, 
    {name: 'ATiC Fidget Toys', desc: 'Waterproof in-Ear Sport Headphones.', price: '12.99', image: './src/assets/gems/fidget/71AjTplSRDL._AC_SL1500_-removebg-preview.png',categorie:'figdets'},
    {name: 'Appash Cube Fidget Toy', desc: 'Stress Anxiety Pressure Relieving Toy Great for Adults and Children[Gift Idea][Relaxing Toy][Stress Reliever][Soft Material] (Black & Black)', price: '14.98', image: './src/assets/gems/fidget/713twE3UxVL._AC_SL1500_-removebg-preview.png',categorie:'figdets'},
    {name: 'Fitbit Aria Air', desc: 'Bluetooth Digital Body Weight and Bmi Smart Scale, Black', price: '69.99', image: './src/assets/gems/fitness/51R3Z6ApXlL._AC_SL1500_-removebg-preview.png',categorie:'fitness'},
    {name: 'MoveRays Hand Grip Strengthener', desc: 'Silicone Rings for Muscle Training, Sports, Rock Climbing, Fitness', price: '19.99', image: './src/assets/gems/fitness/51X8av2BuML._AC_-removebg-preview.png',categorie:'fitness'}, 
    {name: "Nutratology Lion's Mane Capsule", desc: 'Nootropic Mushroom Supplements Formulated With 40% Polysaccharides & >20% Beta-Glucan! Immunomodulating Properties & A Potent Source Of Antioxidants. Supports Memory, Cognition & Brain Health - 60 Capsules', price: '17.99', image: './src/assets/gems/health/71Ak0YgGY7L._AC_SL1500_-removebg-preview.png',categorie:'health'},
    {name: 'NBeLive Turmeric Curcumin', desc: 'BeLive Turmeric Curcumin with Black Pepper & Ginger - 60 Gummies I Turmeric and Ginger Supplement for Immune Support, Healthy Skin, and Joint Health - Tropical Flavor', price: '22.94', image: './src/assets/gems/health/71lb955aA2L._AC_SL1500_-removebg-preview.png',categorie:'health'},
    {name: 'JBL Endurance Run 2 Wired', desc: 'JBL Endurance Run 2 Wired - Waterproof in-Ear Sport Headphones - Black', price: '29.98', image: './src/assets/gems/electronic/51xWxkUss4L._AC_SL1200_-removebg-preview.png',categorie:'electronics'},
    {name: 'INIU Power Bank 10000mAh', desc: 'INIU Power Bank, Slimmest & Lightest 10000mAh 3A High-Speed USB C Portable Charger, 3 Outputs & Flashlight Battery Pack Compatible with iPhone 15 14 13 12 X Pro Samsung S20 Google LG iPad Tablet(Blue).', price: '32.99', image: './src/assets/gems/electronic/71gB2akvPOL._AC_SL1303_-removebg-preview.png',categorie:'electronics'},
  ];

  const filteredItems = perchase_items.filter(item => item.categorie === categories || categories === 'all') ;

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOptions === 'name ↥') {
       return a.name.localeCompare(b.name);
    }
    else if (sortOptions === 'name ↧') {
       return b.name.localeCompare(a.name);
    }
    else if (sortOptions === 'price ↥') {
       return parseFloat(a.price) - parseFloat(b.price);
    }
    else if (sortOptions === 'price ↧') {
       return parseFloat(b.price) - parseFloat(a.price);
    }
  });

  function filterNumberOfWords(description) {
    const words = description.split(' ');
    return words.length > 10 ? words.splice(0, 10).join(' ') + '...' : description;
  }

  console.log(sortedItems);
  return (
    <>
      <Navbar 
        isDropdownOpen={isDropdownOpen} 
        setIsDropdownOpen={setIsDropdownOpen}
        setCategories={setCategories}
        buttonName={buttonName}
        setButtonName={setButtonName} 
        sortOptions={sortOptions}
        setSortOptions={setSortOptions} 
        sortedItems={sortedItems} // Add a click event to this component for logging the selected sort option.  // You can use this in the purchase_item component.  // If you want to make the dropdown menu functional, you can add a state to this component and use it to control the dropdown menu display.  // You can use the "useState" hook from React to create a state variable for the dropdown menu display.  // You can also add a "handleDropdown
      />

      <div className="items_container">
              {sortedItems.map((item, index) => (
                


                <Purchase_Item 
                  key={index}
                  name={item.name}
                  desc={filterNumberOfWords(item.desc)}
                  price={item.price}
                  image={item.image}
                  categorie={item.categorie}
                  // Add a click event to this component for logging the selected category.  // You can use this in the purchase_item component.  // If you want to make the dropdown menu functional, you can add a state to this component and use it to control the dropdown menu display.  // You can use the "useState" hook from React to create a state variable for the dropdown menu display.  // You can also add a "handleDropdownToggle"
                />
              ))}
      </div>

      <div className="featured_items_container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="header_logo_container">
        <img src={'./src/assets/RevealedGems.png'} className="header_logo" alt="Revealed Gems logo" style={{scale: '1.5'}}/>
        <h1>Revealed <br /> Gems</h1>
      </div>

      <button className='more_items_button' onClick={() => setCount((count) => count + 1)} style={{height: '200px', width: '250px'}}>
          count is {count}
      </button>
      <img src={portal} className="portal" alt="Vite logo" style={{scale: '1.5'}}/>



      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      {/* <Purchase_Item /> */}

    </>
  )
}

export default App
