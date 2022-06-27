import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { pedirDatos } from '../Mock/pedirDatos'
import { ItemList } from '../ItemList/ItemList.js'


export const ItemListContainer = ( ) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos(false)
            .then((resp) =>{
                setItems(resp)
                setLoading(false)
            })
            .catch( (error) => {
                console.log("Error", error)
                setLoading(false)
            })

    }, [])
 

    return (

        <section className="cards">

            <section className='cardsContainer container my-5'>

                {

                    loading

                    ? <Spinner animation='border' role="status">

                        <span classname="visually-hidden">Cargando...</span>

                    </Spinner>

                    : <ItemList items={items}/>

                }

            </section>   
    
        </section>
    )
}




