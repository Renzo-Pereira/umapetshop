const ItemCount = ( {handleRestar, cantidad, handleSumar}  ) =>{

    return (
        <div className="cantidad">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
    </div>
    )
}

export default ItemCount