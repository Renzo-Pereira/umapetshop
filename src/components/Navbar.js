import logo from "../assets/img/logoUmaPetShopPng.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const categorias = document.querySelector("#categorias");
    const cerrarCategorias = document.querySelector("#cerrarCategorias");
    const opcionesCategoria = document.querySelector("#opcionesCategoria");

    if (abrir) {
      abrir.addEventListener("click", () => {
        nav.classList.add("visible");
      });
    }

    if (cerrar) {
      cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
      });
    }

    if (categorias) {
      categorias.addEventListener("click", () => {
        opcionesCategoria.classList.add("mostrar");
        cerrarCategorias.classList.add("mostrarBoton");
      });
    }

    if (cerrarCategorias) {
      cerrarCategorias.addEventListener("click", () => {
        opcionesCategoria.classList.remove("mostrar");
        cerrarCategorias.classList.remove("mostrarBoton");
      });
    }
  }, []);

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <button id="abrir" className="botonAbrir">
          <i className="bi bi-list"></i>
        </button>
        <nav id="nav" className="nav">
          <ul>
            <button id="cerrar" className="botonCerrar">
              <i className="bi bi-x-lg"></i>
            </button>
            <li>
              <Link className="textoMenu" to="/">
                Inicio
              </Link>
            </li>
            <div className="contenedorCategorias">
              <li className="categorias" id="categorias">
                Categorias
              </li>
              <div id="opcionesCategoria" className="opcionesCategoria">
                <li>
                  <Link className="textoMenu" to="/productos/gato">
                    Comida de Gato
                  </Link>
                </li>
                <li>
                  <Link className="textoMenu" to="/productos/perro">
                    Comida de Perro
                  </Link>
                </li>
              </div>
              <li className="cerrarCategorias" id="cerrarCategorias">
              <i className="bi bi-x-circle"></i>
            </li>
            </div>
            <li>
              <Link className="textoMenu" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="textoMenu" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
