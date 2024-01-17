import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Menu from "./menu";
import "swiper/css";
import CarruselDeMarcas from "./carruselDeMarcas";


const ItemListContainer = () => {
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
      <Menu />
      <CarruselDeMarcas />
        <ItemList productos={productos} titulo={titulo} />
        <Link className="verTodos" to="/productos">Ver todos los productos</Link>
    </div>
  );
};

export default ItemListContainer;
