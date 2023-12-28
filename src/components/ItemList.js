import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ( {productos, titulo} ) => {

    return (
        <div>
        <h2 className="titulo">{toCapital(titulo)}</h2>

        <div  className="contenedor">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
    )
}

export default ItemList