import "./ItemDetail.css"


export const ItemDetail = ( {item} ) => {

    return (

        <div className="itemDetail container my-5">

            <img className="imgDetail" alt={item.nombre} src={item.img} />

            <div className="producto">

                <h2>{item.nombre}</h2>
                <p className="descripcionProducto"> {item.descripcion} </p>

                <div className="precioProd">

                    <strong className="detallePrecio">$ {item.precio}</strong>
                    <button className="btn btn-secondary">Agregar al carrito</button>

                </div>

            </div>

        </div>

    )
}