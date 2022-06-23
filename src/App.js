import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/Navbar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { ItemCount } from './components/ItemCount/ItemCount'
import torta from './assets/imagen/torta.jpg'

function App() {

  const usuario = {
    nombre: 'Keidy Mejias',
    cargo: 'Administrador'
  }

  const producto = {
    imagen: torta ,
    nombre: "Pastel",
    precio: "2500",
    cantidad: "5",
    stock: true,
    initial: 1
  }

  //const personal = {
  //  nombre: 'Ana Lopez',
  //  cargo: 'Pastelera'
  //}


  return (
    <div>
      
      <Navbar/>

      <ItemListContainer titulo="Bienvenidos a la experiencia más dulce de tu vida" content="No te arrepentiras de nuestros sabores, prueba y verás"/>
      <ItemListContainer titulo={usuario.nombre} content={usuario.cargo}/>
      <ItemCount nombre={ producto.nombre } imagen={ producto.imagen } precio={ producto.precio }/>
    </div>
  );
}

export default App;
