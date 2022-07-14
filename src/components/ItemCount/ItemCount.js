import './ItemCount.css'


export const ItemCount = ( {max, setContador, contador, agregarCarrito} ) => {
    
    const agregar = () => {
        contador < max && setContador(contador + 1)
    }

    const disminuir = () => {
        contador > 1 && setContador(contador - 1)
    }

    return (

        <section>

            <p className='cantidad'>Cantidad:</p>

                <div className='my-3 buttons'>

                    <button className='btn btn-outline-danger btnOpe' onClick={ disminuir }> - </button>

                    <span className="cantProducto my-2">{contador}</span>

                    <button className='btn btn-outline-success btnOpe' onClick={ agregar }> + </button>

                </div>

                <button className='btn btn-primary' onClick={ agregarCarrito }>Añadir al carrito</button>

        </section>

    )
    }


    //let contador = 1 metodo solo actualiza el numero en consola pero no muestra hay que pasarlo por estado
    //let [contador, setContador] = useState(1)
    //const incremento = () => {
        //setContador( contador + 1 )
    //} (Practica de la clase como usar un estado)

/*<div className="contador my-5">
            <h3>Counter</h3>
            <hr/>

            <button className='btn btn-primary' onClick={incremento}>Agregar</button>
            <p> Resultado {contador} </p>
            {/*<p> Fecha y hora click: {new Date().toLocaleDateString()} </p> Esto es si necesito usar fecha y hora*/