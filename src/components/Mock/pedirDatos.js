import { producto } from "./Data"



export  const pedirDatos = () => {


    return new Promise ( (resolve,reject) => {

        setTimeout ( () => {
                resolve(producto)
        }, 3000)

    })
}