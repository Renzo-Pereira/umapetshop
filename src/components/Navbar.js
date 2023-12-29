import logo from '../assets/img/logoUmaPetShop.jpeg';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <li><Link className='textoMenu' to="/">Inicio</Link></li>
            <li><Link className='textoMenu' to="/catalogo">Catalogo</Link></li>
            <li><Link className='textoMenu' to="/nosotros">Nosotros</Link></li>
            <li><Link className='textoMenu' to="/contacto">Contacto</Link></li>
            <li><Link className='textoMenu' to="/productos/gato">Comida de Gato</Link></li>
            <li><Link className='textoMenu' to="/productos/perro">Comida de Perro</Link></li>
          </ul>
        </nav>
        
      </header>
    </div>
)
}

export default Navbar