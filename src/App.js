import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar/Navbar.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js'
import { ItemCount } from './components/ItemCount/ItemCount'

function App() {

  return (
    
    <div>
      
      <Navbar/>

      <ItemListContainer/>

      <ItemCount/>


    </div>
  );
}

export default App;
