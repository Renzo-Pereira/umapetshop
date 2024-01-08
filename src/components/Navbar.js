import logo from "../assets/img/logoUmaPetShopPng.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const inicio = document.querySelector("#inicio");
    const nosotros = document.querySelector("#nosotros");
    const contacto = document.querySelector("#contacto");
    const carrito = document.querySelector("#carrito");
    const elementosNav = [
      cerrar,
      inicio,
      contacto,
      nosotros,
      carrito,
    ];
    const categorias = document.querySelector("#categorias")
    const flechaAbreCat = document.querySelector("#flechaAbreCat");
    const flechaCierreCat = document.querySelector("#flechaCierreCat")
    const flechaAbreCatAlimento = document.querySelector("#flechaAbreCatAlimento");
    const flechaCierreCatAlimento = document.querySelector("#flechaCierreCatAlimento")
    const flechaAbreCatMarca = document.querySelector("#flechaAbreCatMarca");
    const flechaCierreCatMarca = document.querySelector("#flechaCierreCatMarca")
    const opcionesCategoriaAlimento = document.querySelector("#opcionesCategoriaAlimento");
    const opcionesCategoriaMarca = document.querySelector("#opcionesCategoriaMarca");
    const comidaDeGato = document.querySelector("#comidaDeGato")
    const comidaDePerro = document.querySelector("#comidaDePerro")
    const juguetes = document.querySelector("#juguetes")
    const frost = document.querySelector("#frost")
    const catElegida = [comidaDeGato, comidaDePerro, juguetes, frost,];
    

    if (abrir) {
      abrir.addEventListener("click", () => {
        nav.classList.add("visible");
      });
    }

    elementosNav.forEach((elementoNav) => {
      if (elementoNav) {
        elementoNav.addEventListener("click", () => {
          nav.classList.remove("visible");
          flechaCierreCat.classList.add("oculto")
          flechaCierreCat.classList.remove("mostrar")
          flechaAbreCat.classList.add("mostrar")
          flechaAbreCat.classList.remove("oculto")
          categorias.classList.remove("mostrar")
          categorias.classList.add("oculto")
          opcionesCategoriaMarca.classList.remove("mostrar")
          opcionesCategoriaMarca.classList.add("oculto")
          opcionesCategoriaAlimento.classList.remove("mostrar")
          opcionesCategoriaAlimento.classList.add("oculto")
          flechaCierreCatMarca.classList.add("oculto")
          flechaCierreCatMarca.classList.remove("mostrar")
          flechaAbreCatMarca.classList.add("mostrar")
          flechaAbreCatMarca.classList.remove("oculto")
          flechaAbreCatAlimento.classList.add("mostrar")
          flechaAbreCatAlimento.classList.remove("oculto")
          flechaCierreCatAlimento.classList.add("oculto")
          flechaCierreCatAlimento.classList.remove("mostrar")
        });
      }
    });

    catElegida.forEach((catElegida) => {
      if (catElegida) {
        catElegida.addEventListener("click", () => {
          categorias.classList.remove("mostrar")
          categorias.classList.add("oculto")
          opcionesCategoriaMarca.classList.remove("mostrar")
          opcionesCategoriaMarca.classList.add("oculto")
          opcionesCategoriaAlimento.classList.remove("mostrar")
          opcionesCategoriaAlimento.classList.add("oculto")
          flechaCierreCat.classList.add("oculto")
          flechaCierreCat.classList.remove("mostrar")
          flechaAbreCat.classList.add("mostrar")
          flechaAbreCat.classList.remove("oculto")
          flechaCierreCatMarca.classList.add("oculto")
          flechaCierreCatMarca.classList.remove("mostrar")
          flechaAbreCatMarca.classList.add("mostrar")
          flechaAbreCatMarca.classList.remove("oculto")
          flechaAbreCatAlimento.classList.add("mostrar")
          flechaAbreCatAlimento.classList.remove("oculto")
          flechaCierreCatAlimento.classList.add("oculto")
          flechaCierreCatAlimento.classList.remove("mostrar")
        });
      }
    });

    if (flechaAbreCat) {
      flechaAbreCat.addEventListener("click", () => {
        flechaAbreCat.classList.add("oculto")
        flechaAbreCat.classList.remove("mostrar")
        flechaCierreCat.classList.add("mostrar")
        flechaCierreCat.classList.remove("oculto")
        categorias.classList.add("mostrar")
        categorias.classList.remove("oculto")
      });
    }

    if (flechaCierreCat) {
      flechaCierreCat.addEventListener("click", () => {
        flechaCierreCat.classList.add("oculto")
        flechaCierreCat.classList.remove("mostrar")
        flechaAbreCat.classList.add("mostrar")
        flechaAbreCat.classList.remove("oculto")
        categorias.classList.remove("mostrar")
        categorias.classList.add("oculto")
        opcionesCategoriaMarca.classList.remove("mostrar")
        opcionesCategoriaMarca.classList.add("oculto")
        opcionesCategoriaAlimento.classList.remove("mostrar")
        opcionesCategoriaAlimento.classList.add("oculto")
        flechaCierreCatMarca.classList.add("oculto")
        flechaCierreCatMarca.classList.remove("mostrar")
        flechaAbreCatMarca.classList.add("mostrar")
        flechaAbreCatMarca.classList.remove("oculto")
        flechaAbreCatAlimento.classList.add("mostrar")
        flechaAbreCatAlimento.classList.remove("oculto")
        flechaCierreCatAlimento.classList.add("oculto")
        flechaCierreCatAlimento.classList.remove("mostrar")
      });
    }

    if (flechaAbreCatAlimento) {
      flechaAbreCatAlimento.addEventListener("click", () => {
        flechaAbreCatAlimento.classList.add("oculto")
        flechaAbreCatAlimento.classList.remove("mostrar")
        flechaCierreCatAlimento.classList.add("mostrar")
        flechaCierreCatAlimento.classList.remove("oculto")
        opcionesCategoriaAlimento.classList.add("mostrar")
        opcionesCategoriaAlimento.classList.remove("oculto")
        flechaCierreCatMarca.classList.add("oculto")
        flechaCierreCatMarca.classList.remove("mostrar")
        flechaAbreCatMarca.classList.add("mostrar")
        flechaAbreCatMarca.classList.remove("oculto")
        opcionesCategoriaMarca.classList.remove("mostrar")
        opcionesCategoriaMarca.classList.add("oculto")
      });
    }

    if (flechaCierreCatAlimento) {
      flechaCierreCatAlimento.addEventListener("click", () => {
        opcionesCategoriaAlimento.classList.remove("mostrar")
        opcionesCategoriaAlimento.classList.add("oculto")
        flechaAbreCatAlimento.classList.add("mostrar")
        flechaAbreCatAlimento.classList.remove("oculto")
        flechaCierreCatAlimento.classList.add("oculto")
        flechaCierreCatAlimento.classList.remove("mostrar")

      });
    }

    if (flechaAbreCatMarca) {
      flechaAbreCatMarca.addEventListener("click", () => {
        flechaAbreCatMarca.classList.add("oculto")
        flechaAbreCatMarca.classList.remove("mostrar")
        flechaCierreCatMarca.classList.add("mostrar")
        flechaCierreCatMarca.classList.remove("oculto")
        opcionesCategoriaMarca.classList.add("mostrar")
        opcionesCategoriaMarca.classList.remove("oculto")
        opcionesCategoriaAlimento.classList.remove("mostrar")
        opcionesCategoriaAlimento.classList.add("oculto")
        flechaAbreCatAlimento.classList.add("mostrar")
        flechaAbreCatAlimento.classList.remove("oculto")
        flechaCierreCatAlimento.classList.add("oculto")
        flechaCierreCatAlimento.classList.remove("mostrar")
      });
    }

    if (flechaCierreCatMarca) {
      flechaCierreCatMarca.addEventListener("click", () => {
        flechaCierreCatMarca.classList.add("oculto")
        flechaCierreCatMarca.classList.remove("mostrar")
        flechaAbreCatMarca.classList.add("mostrar")
        flechaAbreCatMarca.classList.remove("oculto")
        opcionesCategoriaMarca.classList.remove("mostrar")
        opcionesCategoriaMarca.classList.add("oculto")
      });
    }
  }, []);

  return (
    <div>
      <header>
        <Link className="textoMenu" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <button id="abrir" className="botonAbrir">
          <i className="bi bi-list"></i>
        </button>
        <nav id="nav" className="nav">
          <ul>
            <button id="cerrar" className="botonCerrar">
              <i className="bi bi-x-lg"></i>
            </button>
            <li id="inicio">
              <Link className="textoMenu" to="/">
                Inicio
              </Link>
            </li>

            <ul className="contenedorCategorias">
              <li>
                Categorias 
                <button><i id="flechaAbreCat" className="bi bi-caret-down"></i></button>
                <button><i id="flechaCierreCat" className="bi bi-caret-up oculto"></i></button>
              </li>

              <ul id="categorias" className="categorias oculto">
                <li>
                  Alimento
                  <button><i id="flechaAbreCatAlimento" className="bi bi-caret-right"></i></button>
                  <button><i id="flechaCierreCatAlimento" className="bi bi-caret-left oculto"></i></button>
                </li>

                <li>
                  Marcas
                  <button><i id="flechaAbreCatMarca" className="bi bi-caret-right"></i></button>
                  <button><i id="flechaCierreCatMarca" className="bi bi-caret-left oculto"></i></button>
                </li>

                <li id="juguetes">
                  Juguetes
                </li>
              </ul>

              <ul id="opcionesCategoriaAlimento" className="opcionesCategoria oculto">
                <li id="comidaDeGato">
                  <Link to={"/productos/gato"}>Comida de gato</Link>
                </li>
                <li id="comidaDePerro">
                  <Link to={"/productos/perro"}>Comida de perro</Link>
                </li>
              </ul>

              <ul id="opcionesCategoriaMarca" className="opcionesCategoria oculto">
                <li id="frost">
                  <Link to={"/marca/frost"}>Frost</Link>
                </li>
              </ul>
            </ul>

            <li id="nosotros">
              <Link className="textoMenu" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li id="contacto">
              <Link className="textoMenu" to="/contacto">
                Contacto
              </Link>
            </li>
            <li id="carrito">
              <CartWidget />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
