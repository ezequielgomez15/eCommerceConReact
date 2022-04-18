import React from 'react'
import"../assets/css/Producto.css"
import img from "../assets/statics/simon.png"

export default function Producto() {
    return (
        <>
        <div className="detalle">
        <img 
            src={img}
            alt=""                        
            className="home-item-img"
        />
        
        <a href="producto.html"></a>
        <h1 className="home-item-titulo">Gato loco</h1>
        <p className="home-item-medidas">Medidas: 20x10</p>
        <div className="home-item-actions">
        <h3 className="home-item-precio">AR$ 150</h3>
        <button className="home-item-comprar">+</button>
        </div>
        <p>"En la coleccion de sticker no podia faltar un michi"</p>
        </div>
        </>
    )
}
