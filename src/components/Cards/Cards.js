import './Cards.scss'

export const Cards = ( {items} ) => {

    return (

        <div className="cards">

            <h2 className="titulo">{items.nombre}</h2>

            <img className="imgCards" alt="img Productos" src={items.img} />

            <h6 className="descripcion">{items.descripcion}</h6>

            <strong>{items.precio}</strong>

            <hr/>
        </div>

    )
} 