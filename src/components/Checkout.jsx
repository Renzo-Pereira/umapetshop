import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">Muchas gracias por tu compra</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="contenedorFormComprar">
        <h1>Finalizar compra</h1>
        <form onSubmit={handleSubmit(comprar)}>
          <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")}/>
          <input type="email" placeholder="Ingresá tu e-mail" {...register("email")}/>
          <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")}/>

          <button type="submit">Comprar</button>
        </form>
      </div>

      <div className="productosComprar">
        {carrito.map((prod) => (
          <div className="productoComprar" key={prod.id}>
            <img src={prod.imagen} alt={prod.titulo} />
            <div className="footerProductoComprar">
              <h3>{prod.nombre}</h3>
              <p>Precio unit: ${prod.precio}</p>
              <p>Precio total: ${prod.precio * prod.cantidad}</p>
              <p>Cant: {prod.cantidad}</p>
            </div>
          </div>
        ))}
        <div className="total">
          <h2>Precio total: ${precioTotal()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
