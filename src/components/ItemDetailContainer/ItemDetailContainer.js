import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../Mock/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    //console.log(itemId)

    useEffect( () => {

        setLoading(true)

        pedirDatos()

            .then((resp)=> {
                setItem( resp.find((item) => item.id === Number(itemId) ) )
        })

        .catch( (error) =>{
            console.log("ERROR",error)
        })

        .finally( ()=>{
            setLoading(false)
        })
        
    }, [itemId])

    return(

        <section className="row">

            <section className="cardsContainer container my-5">
            {
                loading 
                ?   <Spinner animation="border" role="status" className="spiner">
                <span className="visually-hidden"></span>
                </Spinner> 

                : <ItemDetail item={item}/>

            }
            </section>
        </section>
    )

} 