import promoA from "../assets/img/promoA.png"

const Menu = () => {
  return (
    <div>
      <div className="promoA">
        <img className="promoA" src={promoA} alt="promoAImg" />
      </div>

      <div className="contenedorMedio">
        <div className="contenedoresMedio">
          <i className="bi bi-truck"></i>
          <div>
            <h3>Envios</h3>
            <p>Envios sin costo dentro de Ciudad de la Costa</p>
          </div>
        </div>
        <div className="contenedoresMedio">
          <i className="bi bi-credit-card-2-front"></i>
          <div>
            <h3>Metodos de Pago</h3>
            <p>Aceptamos todas las tarjetas y mercado pago!</p>
          </div>
        </div>
        <div className="contenedoresMedio">
          <i className="bi bi-box-seam"></i>
          <div>
            <h3>Devolución</h3>
            <p>
              ¿No te gusta lo que compraste? No te preocupes, lo hacemos fácil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu
