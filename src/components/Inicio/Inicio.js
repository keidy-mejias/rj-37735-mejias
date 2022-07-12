import './Inicio.css'

export const Inicio = ( {titulo, content}) => {

    //const {titulo, content} = props

    return (

        <section className="inicio">
            <h2 className='inicio__title'> {titulo} </h2>
            <hr/>

            <p> {content} </p>
        </section>

    )
}

