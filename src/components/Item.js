import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) =>{

return (
    <div className='carts'>
        <img src={producto.imagen} alt={producto.nombre} />
        <div className='footerCarts'>
            <div>
                <h4 className='nombreItemCarts'>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
            </div>
            <Link id='verMas' className="verMas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
)
}

export default Item