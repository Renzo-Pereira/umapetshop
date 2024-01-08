import logo from "../assets/img/logoUmaPetShopPng.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img className="logoFooter" src={logo} alt="logo" />
      <ul className="contactanos">
        <h3>Contactanos</h3>
        <li>
        <a href="https://wa.me/+59894874104/?text=Hola! Queria hacerles una consulta..."><i className="bi bi-whatsapp"></i> +598 94874104</a>
          
        </li>
        <li>
          <a href="https://www.instagram.com/umapetshop2023/">
            <i className="bi bi-instagram"></i> umapetshop2023
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61553708134696">
            <i className="bi bi-facebook"></i> Uma Petshop
          </a>
        </li>
      </ul>
      <ul>
        <h3>Compra</h3>
        <li>Envios</li>
        <li>Metodos de pago</li>
        <li>Retiro</li>
      </ul>
      <ul>
        <h3>Empresa</h3>
        <li>Quienes somos</li>
        <li>Locales</li>
        <li><Link to={"/contacto"}>Contacto</Link></li>
      </ul>
    </div>
  );
};

export default Footer;
