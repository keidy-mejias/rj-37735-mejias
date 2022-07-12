import { Link } from "react-router-dom"
import './Cards.css'

export const Cards = ( {items} ) => {

    return (

        <div className="cards">

            <img className="imgCards" alt="img Productos" src={items.img} />

            <p className="titulo"> { items.nombre } </p>

            <hr/>

            <div className="precio">

                <strong className="precioCard"> $ { items.precio } </strong>

                    <Link to = {`/item/${items.id}`}>

                        <button className="btn btn-secondary">Comprar</button>

                    </Link>

            </div>
           
        </div>

    )
} 