import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import Menu from "./menu"

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
      <div className="productos">
      <ul className="contenedorCategorias">
              <li>
              <i className="bi bi-list"></i> <nbsp />
                Categorias 
                <button><i id="flechaAbreCat" className="bi bi-caret-down"></i></button>
                <button><i id="flechaCierreCat" className="bi bi-caret-up oculto"></i></button>
              </li>

              <ul id="categorias" className="categorias oculto">
                <li>
                  Alimento
                  <button><i id="flechaAbreCatAlimento" className="bi bi-caret-down"></i></button>
                  <button><i id="flechaCierreCatAlimento" className="bi bi-caret-up oculto"></i></button>
                </li>

                <ul id="opcionesCategoriaAlimento" className="opcionesCategoria oculto">
                      <li id="comidaDeGato">
                      <Link to={"/productos/gato"}>Comida de gato</Link>
                      </li>
                  <li id="comidaDePerro">
                  <Link to={"/productos/perro"}>Comida de perro</Link>
                </li>
              </ul>

                <li>
                  Marcas
                  <button><i id="flechaAbreCatMarca" className="bi bi-caret-down"></i></button>
                  <button><i id="flechaCierreCatMarca" className="bi bi-caret-up oculto"></i></button>
                </li>

                <ul id="opcionesCategoriaMarca" className="opcionesCategoria oculto">
                <li id="frost">
                  <Link to={"/marca/frost"}>Frost</Link>
                </li>
                <li>
                <Link to={"/marca/balanced"}>Balanced</Link>
                </li>
                <li>
                <Link to={"/marca/dogchow"}>Dog Chow</Link>
                </li>
                <li>
                <Link to={"/marca/eukanuba"}>Eukanuba</Link>
                </li>
                <li>
                <Link to={"/marca/equilibrio"}>Equilibrio</Link>
                </li>
                <li>
                <Link to={"/marca/hills"}>Hill´s</Link>
                </li>
                <li>
                <Link to={"/marca/lager"}>Lager</Link>
                </li>
                <li>
                <Link to={"/marca/premium"}>Premium</Link>
                </li>
                <li>
                <Link to={"/marca/proplan"}>Pro Plan</Link>
                </li>
              </ul>

                <li id="juguetes">
                  Juguetes
                </li>
              </ul>
            </ul>

      <ItemList productos={productos} titulo={titulo} />
      </div>

    
    </div>
  );
};

export default ItemListContainer;
