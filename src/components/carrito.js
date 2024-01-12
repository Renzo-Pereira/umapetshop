import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="productosCarrito">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div className="productoCarrito" key={prod.id}>
          <img src={prod.imagen} alt={prod.titulo} />
          <div className="footerProductoCarrito">
            <h3>{prod.nombre}</h3>
            <p>Precio unit: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <p>Cant: {prod.cantidad}</p>
          </div>
        </div>
      ))}

      {carrito.length > 0 ? (
        <div className="total">
          <h2>Precio total: ${precioTotal()}</h2>
          <div>
            <button className="botonesTotal" onClick={handleVaciar}>
              Vaciar
            </button>
            <Link className="botonesTotal" to="/checkout">
              Finalizar compra
            </Link>
          </div>
        </div>
      ) : (
      <div className="carritoVacio">
        <h2>El carrito está vacío, vuelve al inicio para realizar una compra!</h2>
        <button className="botonInicio">
          <Link to={"/"}> Inicio</Link>
        </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
