import { useContext, useState } from "react"
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ( {item} ) =>{
    
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(0);
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
    <div className="contenedorItemDetail">
        <div className="itemDetail">
            <img src={item.imagen} alt={item.titulo} />
            <div className="itemDetailFooter">
                <div className="contenedorTextoDetail">
                    <h3>{item.nombre}</h3>
                    <p>Peso: <span className="pesoDetail">{item.peso}Kg</span></p>
                </div>
                <p className="precio">$ {item.precio}</p>
                <div>
                    <ItemCount
                    cantidad={cantidad}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                    />
                </div>
            </div>
    </div>
                <div className="itemDetailDescrip">
                    <h3>Descripción</h3>
                <p className="textoDetail">{item.descripción}</p>
                </div>
                </div>
    )

}

export default ItemDetail