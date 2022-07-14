import { BsCartPlus } from 'react-icons/bs'
import "./CartWidget.css"
import { Link } from 'react-router-dom';

export const CartWidget = () => {

    return (

        <Link to="/Cart">

            <BsCartPlus className="iconoCarrito"/>

        </Link>

    )
    
}