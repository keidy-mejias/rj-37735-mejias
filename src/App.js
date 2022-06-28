import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/Navbar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
//import { ItemCount } from './components/ItemCount/ItemCount'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element= { <ItemListContainer/> } />
        <Route path='/categorias/:categoriaId' element= { <ItemListContainer/> } />
        <Route path='/item/:itemId' element= { <ItemDetailContainer/> } />
        <Route path='*' element= { <Navigate to={"/"}/> } />
      
      </Routes>
      
    
    </BrowserRouter>
  

      

  );
}

export default App;
