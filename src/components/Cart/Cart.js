import { useContext } from "react"
import { CartContext } from '../Context/CartContext'

export const Cart = () => {

    const {cart, totalPrecio} = useContext(CartContext)

    return (

        <div className="container my-5">

            <h2>Pedido</h2>

            <hr/>

            {
                cart.map ((item) => (
                
                    <div key= {item.id} className="my-4">

                        <img className="imgCards" alt="img Productos" src={item.img} />

                        <h2>{item.nombre}</h2>

                        <p> Cantidad: {item.cantidad} </p>

                        <strong>Precio: ${item.precio*item.cantidad} </strong>

                    </div>))

            }

            <h4>Total: $ { totalPrecio() }</h4>

        </div>
    )

}  