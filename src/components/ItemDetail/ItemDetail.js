import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from '../Context/CartContext'
import { Link } from "react-router-dom"


export const ItemDetail = ( {item} ) => {

    const { agregarItem, inCart } = useContext(CartContext)

    const [cantidad, setCantidad ] = useState(1);

    const agregar = () => {

        const itemToCart = {
            ...item,
            cantidad
        }
        agregarItem(itemToCart)
    }

    return (

        <div className="itemDetail container my-5">

            <img className="imgDetail" alt={item.nombre} src={item.img} />

            <div className="producto">

                <h2>{item.nombre}</h2>
                <p className="descripcionProducto"> {item.descripcion} </p>

                <strong className="detallePrecio">$ {item.precio}</strong>

                    <div className="precioProd">

                        {

                            inCart(item.id)
                            ? <Link to={"/Cart"}><button className="btn btn-succes">Finalizar Compra</button></Link>
                            :
                        
                            <ItemCount
                                max={ item.cantidad }
                                setContador = {setCantidad}
                                contador = {cantidad}
                                agregar = { agregar }
                            />
                        }

                    </div>

            </div>

        </div>

    )
}