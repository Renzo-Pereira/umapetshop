import { useState } from "react"
import { toCapital } from "../helpers/toCapital"
import ItemCount from "./ItemCount";

const ItemDetail = ( {item} ) =>{
    
    const [cantidad, setCantidad] = useState(1);
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="itemDetail">
            <img src={item.imagen} alt={item.titulo} />
            <div className="itemDetailFooter">
                <h3 className="textoDetail">{item.nombre}</h3>
                <p className="textoDetail">{item.descripción}</p>
                <div className="precioCantidad">
                <p>${item.precio}</p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                />
                </div>
            </div>
    </div>
    )

}

export default ItemDetail