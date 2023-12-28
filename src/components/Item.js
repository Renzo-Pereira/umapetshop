import { toCapital } from '../helpers/toCapital'
import React from 'react'

const Item = ( {producto} ) =>{
return (
    <div className='carts'>
        <img src={producto.imagen} alt={producto.nombre} />
        <div className='footerCarts'>
            <div>
                <h4>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>{toCapital(producto.categoria)}</p>
            </div>
            <button>Ver más</button>
        </div>
    </div>
)
}

export default Item