import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/Navbar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'

function App() {

  const usuario = {
    nombre: 'Keidy Mejias',
    cargo: 'Administrador'
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
    </div>
  );
}

export default App;
