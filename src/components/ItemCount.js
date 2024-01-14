import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ handleRestar, cantidad, handleSumar, handleAgregar }) => {

  const notify = () => toast.error('No tenemos suficiente stock de este articulo, le pedimos disculpas', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    
  const agregarAlCarrito = () => {
    if (cantidad > 0) {
      handleAgregar();
    } else {
      notify();
    }
  };

  return (
    <div className="cantidad">
        <p>Cantidad</p>
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>

      <button className="agregarAlCarrito" onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>
      <ToastContainer
position="top-center"
autoClose={3000}
limit={1}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="colored"
/>
    </div>
  );
};

export default ItemCount;
