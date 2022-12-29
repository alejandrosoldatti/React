import { useState } from 'react'
import "./index.css";



import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <>
  <NavBar></NavBar>
  <ItemListConteiner greeting={"Producto"}></ItemListConteiner>
  </>
    
    
  )
}

export default App
