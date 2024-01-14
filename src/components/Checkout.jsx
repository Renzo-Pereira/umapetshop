import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = async (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(db, "pedidos");
    const docPedido = await addDoc(pedidosRef, pedido);

    for (const producto of carrito) {
      const productoRef = doc(db, "productos", producto.id);
      await updateDoc(productoRef, {
        stock: producto.stock - producto.cantidad,
      });
    }

    setPedidoId(docPedido.id);
    vaciarCarrito();
  };

  if (pedidoId) {
    return (
      <div className="fin">
        <h1>Muchas gracias por tu compra</h1>
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
