import './ItemListContainer.scss'

export const ItemListContainer = ({titulo, content}) => {

    return (
        <section className="lista my-5">
            <h3> {titulo} </h3>
            <hr/>

            <p> {content} </p>
        </section>
    )
}