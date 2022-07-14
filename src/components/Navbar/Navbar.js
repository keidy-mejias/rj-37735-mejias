import './Navbar.css'
import { Link } from "react-router-dom"
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {

    return (

    <header className="header">

         <div className="header__container">

            <Link to={"/"}> <h2 className="header__logo">Kimcakescss</h2> </Link>

                <nav className="header__navbar">
                    <Link className='header__navlink' to={"/categoria/pastel"}>Pastel</Link>
                    <Link className='header__navlink' to={"/categoria/cupcakes"}>Cupcakes</Link>
                    <Link className='header__navlink' to={"/categoria/galletas"}>Galletas</Link>
                    
                    <CartWidget/>
                    
                </nav>

         </div>
        

    </header>
    )     
}

//export default Navbar

