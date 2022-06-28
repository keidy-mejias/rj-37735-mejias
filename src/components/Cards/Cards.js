import { Link } from "react-router-dom"
import './Cards.scss'

export const Cards = ( {items} ) => {

    return (

        <div className="cards">

            <img className="imgCards" alt="img Productos" src={items.img} />

            <p> { items.nombre } </p>

            <hr/>

            <strong> $ { items.precio } </strong>

                <Link to = {`/item/${items.id}`}>

                    <button className="btn btn-primary">Comprar</button>

                </Link>

        </div>

    )
} 