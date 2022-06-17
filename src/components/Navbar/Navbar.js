import './Navbar.scss'
import { BsCartPlus } from 'react-icons/bs'

export const Navbar = () => {

    return (

    <header className="header">

         <div className="header__container">
            <h2 className="header__logo">Kimcakescss</h2>

                <nav className="header__navbar">
                    <p className="header__navlink">Inicio</p>
                    <p className="header__navlink">Productos</p>
                    <p className="header__navlink">Contacto</p>
                </nav>
                <BsCartPlus />
         </div>
        

    </header>
    )     
}

//export default Navbar
