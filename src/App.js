import "./Style/Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/Navbar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Footer } from './components/Footer/Footer.js';
import { CartContext } from './components/Context/CartContext'
import { useState } from 'react'
import { Cart } from './components/Cart/Cart'

function App() {

  const [ cart, setCart ] = useState ([])
  console.log(Cart)

  const agregarItem = ( item ) => {

    setCart( [...cart,item] )

  }

  const inCart = (id) => {

    return cart.some((producto) => producto.id === id)

  }

  const totalPrecio = () => {

    return cart.reduce( (acc, producto) => acc += (producto.precio * producto.cantidad), 0)
  }

  return (

    <CartContext.Provider value={ {cart, agregarItem, inCart, totalPrecio} }>

      
      <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element= { <ItemListContainer/> } />
        <Route path='/categoria/:categoria' element= { <ItemListContainer/> } />
        <Route path='/item/:itemId' element= { <ItemDetailContainer/> } />
        <Route path='*' element= { <Navigate to={"/"}/> } />

      </Routes>

      <Footer/>

      </BrowserRouter>

    </CartContext.Provider>


      

  );
}

export default App;
