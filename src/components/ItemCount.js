const ItemCount = ({ handleRestar, cantidad, handleSumar, handleAgregar }) => {
  return (
    <div className="cantidad">
        <p>Cantidad</p>
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>

      <button className="agregarAlCarrito" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
