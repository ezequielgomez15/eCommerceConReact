import React, { useContext } from 'react'
import ItemCarrito from '../components/ItemCarrito'
import "../assets/css/Carrito.css"
import Contexto from "../context/Contexto"


export default function Carrito() {
    const { carrito, eliminarCarrito } = useContext(Contexto) 

    return (
        <>
        <div className="carrito">
            <div className="carrito-listadito">
                {carrito.map((item, i)=>(
                    <ItemCarrito 
                        {...item} 
                        key={i}
                        eliminarCarrito={eliminarCarrito} 
                    ></ItemCarrito>
                ))}
            </div>

            <div className="carrito-precio">
                Total a pagar <br />
                <strong>U$D
                </strong>
            </div>
        </div>
        </>
    )
}
