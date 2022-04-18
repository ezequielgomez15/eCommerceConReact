import React from 'react'
import "../assets/css/ItemCarrito.css"
import Carrito from '../containers/Carrito';
import borrar from "../assets/statics/001-eliminar.png"

export default function ItemCarrito(props) {
    const { nombre, precio, img, id} = props[0];
    const handleBorrar = () => {
        props.eliminarCarrito(id)
    }
    return (
        <>
        <div className="carrito-item">
            <img src={img} 
            alt=""
            className="carrito-item-img"
            />
            <div className="carrito-txt">
                <h1 className="carrito-item-titulo">{nombre}</h1>
                <h3 className="carrito-item-precio">AR${precio}</h3>
            </div>
            <img src= {borrar} alt="" className="carrito-item-borrar" onClick={handleBorrar}/>
        </div>
        </>
    )
}
