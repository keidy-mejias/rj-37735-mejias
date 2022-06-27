import torta from "./torta.jpg"
import cupcakes from "./cupcakes.jpg"
import galletas from "./galletas.jpg"

export const producto = [

    {
        id: 1,
        nombre: "Torta Rosa",
        descripcion: "Pastel de vainilla con relleno de dulce de leche y buttercream rosa",
        precio: 2500,
        img: torta, 
        cantidad: "5",
        stock: true,
        initial: 1
    },
    {
        id: 2,
        nombre: "Cupcakes",
        descripcion: "Pastelitos de vainilla o chocolate",
        precio: "600",
        img: cupcakes,
        cantidad: "12",
        stock: true,
        initial: 1
    },
    {
        id: 3,
        nombre: "Galletas",
        descripcion: "Galletas realizadas a gusto del cliente",
        precio: "30",
        img: galletas,
        cantidad: "30",
        stock: true,
        initial: 1
    }

]