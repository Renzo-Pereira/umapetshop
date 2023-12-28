import logo from '../assets/img/logoUmaPetShop.jpeg';
import React, { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
        const nav = document.querySelector("#nav");
        const abrir = document.querySelector("#abrir");
        const cerrar = document.querySelector("#cerrar");
    
        if (abrir) {
          abrir.addEventListener("click", () => {
            nav.classList.add("visible");
          });
        }
    
        if (cerrar) {
          cerrar.addEventListener("click", () => {
            nav.classList.remove("visible");
          });
        }}, []);

return (
    <div>
              <header>
        <img className="logo" src={logo} alt="logo" />
        <button id="abrir" className="botonAbrir"><i className="bi bi-list"></i></button>
        <nav id="nav" className="nav">
          <ul>
            <button id="cerrar" className="botonCerrar"><i className="bi bi-x-lg"></i></button>
            <li>Inicio</li>
            <li>Catalogo</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
        
      </header>
    </div>
)
}

export default Navbar