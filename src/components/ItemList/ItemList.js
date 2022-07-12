import "./ItemList.css"
import { Cards } from "../Cards/Cards"


export const ItemList = ( {items} ) => {

    return (

        <div className="row">

            <h1>NUESTRAS ESPECIALIDADES</h1>

            <hr/>

            {
                items.map((items) => <Cards key={items.id} items={items} /> )  
            }

        </div>
    )
}