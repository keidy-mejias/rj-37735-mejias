import './ItemListContainer.scss'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { pedirDatos } from '../Mock/pedirDatos'
import { ItemList } from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'


export const ItemListContainer = ( ) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { busquedaId } = useParams()
    console.log(busquedaId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()

            .then((resp) => {
                if (!busquedaId){
                    setItems(resp)
                } else {
                    setItems (resp.filter ( (item) => item.categoria === busquedaId) )
                }

            })
            .catch( (error) => {
                console.log("Error", error)
            })
            .finally( () => {
                setLoading(false)
            })

    }, [busquedaId])
 

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




