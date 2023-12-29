import { toCapital } from '../helpers/toCapital'
import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link className="verMas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
)
}

export default Item