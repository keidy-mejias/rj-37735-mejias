import { useState } from 'react'
import './ItemCount.scss'


export const ItemCount = () => {

    const [ contador, setContador] = useState(1)

    const agregar = () => {
        if (contador > 4){
            return
        }

        setContador ( contador + 1); 
    }

    const disminuir = () => {
        if (contador <= 0) {
            return
        }

        setContador ( contador - 1 )
    }

    return (

        <section>

            <div className='buttons'>

                <button className='btn btn-light' onClick={ disminuir }> - </button>

                <p className='cantProducto'> { contador } </p>

                <button className='btn btn-light' onClick={ agregar }> + </button>

            </div>

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