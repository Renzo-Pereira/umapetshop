import Item from "./Item";
import { toCapital } from "../helpers/toCapital";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const Productos = () => {
        const [productos, setProductos] = useState([]);
      
        const [titulo, setTitulo] = useState("Productos");
      
        const categoria = useParams().categoria;
        const marca = useParams().marca;

    useEffect(() => {
        const productosRef = collection(db, "productos");
        let q = categoria
          ? query(productosRef, where("categoria", "==", categoria))
          : marca
          ? query(productosRef, where("marca", "==", marca))
          : productosRef;
    
        getDocs(q).then((resp) => {
          categoria ? setTitulo("Comida de " + categoria) : setTitulo("Productos");
          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
        });
      }, [categoria, marca]);

  return (
    <div>
      <h2 className="titulo">{toCapital(titulo)}</h2>

      <div className="contenedor">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Productos;






