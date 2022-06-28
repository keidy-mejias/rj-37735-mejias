// Faltan los estilos


export const ItemDetail = ( {item} ) => {

    return (

        <div className="itemDetail container my-5">

            <img className="imgDetail" alt={item.nombre} src={item.img} />

            <h2>{item.nombre}</h2>

            <strong>$ {item.precio}</strong>

        </div>

    )
}