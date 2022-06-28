import { Cards } from "../Cards/Cards"

export const ItemList = ( {items} ) => {

    return (
        
        <div className="row">

            <h2>Nuestras especialidades</h2>

            <hr/>
            
            {

                items.map((items) => <Cards key={items.id} items={items} /> )  

                }
        </div>
    )
}