import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
};

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: initialForm,
  });

  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const comprar = async (data) => {
    if (!data.nombre.trim()) {
      setValue("nombre", "");
      return;
    }

    if (!data.email.trim()) {
      setValue("email", "");
      return;
    }

    if (!data.telefono.trim()) {
      setValue("telefono", "");
      return;
    }

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
          <input
            type="text"
            placeholder="Ingresá tu nombre"
            {...register("nombre", {
              required: "El campo 'Nombre' es requerido",
              pattern: {
                value: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
                message: "El campo 'Nombre' solo acepta letras",
              },
            })}
          />
          {errors.nombre && <p className="errors">{errors.nombre.message}</p>}

          <input
            type="email"
            placeholder="Ingresá tu e-mail"
            {...register("email", {
              required: "El campo 'Email' es requerido",
              pattern: {
                value: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
                message: "El campo 'Email' no acepta simbolos",
              },
            })}
          />
          {errors.email && <p className="errors">{errors.email.message}</p>}

          <input
            type="tel"
            placeholder="Ingresá tu teléfono"
            {...register("telefono", {
              required: "El campo 'Telefono' es requerido",
              pattern: {
                value: /^\d+$/,
                message: "El campo 'Telefono' solo puede contener números",
              },
              minLength: {
                value: 9,
                message: "El numero de telefono debe ser de 9 numeros",
              },
              maxLength: {
                value: 9,
                message: "El numero de telefono no puede ser más largo de 9 numeros",
              },
            })}
          />
          {errors.telefono && (
            <p className="errors">{errors.telefono.message}</p>
          )}

          <button className="botonForm" type="submit">Comprar</button>
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
