import { NavLink } from "react-router-dom";
import "./loja.css";
import RedesSociais from "../../assets/RedesSociais02Logo.png";
import Shopee from "../../assets/ShopeeLogo.png";
import MercadoLivre from "../../assets/MercadoLivreLogo.png";
import NuvemShop from "../../assets/NuvemShopLogo.png";

const Loja = () => {
  return (
    <div>
      <header className="sobreNos" data-aos="fade-rigth">
        <h1>Conheça nossas Lojas de vendas</h1>
        <div></div>
        <NavLink to="/" className="headerLink">
          Inicio
        </NavLink>
      </header>
      <div className="LojaRedesSociais LojaContainer">
        <a href="#">
          <img src={RedesSociais} alt="" />
          <h2>Entre em contato agora!</h2>
        </a>
      </div>
      <div className="LojaMercadoLivre LojaContainer">
        <a href="#">
          <img src={MercadoLivre} alt="" />
          <h2>Loja Mercado Livre</h2>
        </a>
      </div>
      <div className="LojaShopee LojaContainer">
        <a href="#">
          <img src={Shopee} alt="" />
          <h2>Loja Shopee</h2>
        </a>
      </div>
      <div className="LojaNuvemShop LojaContainer">
        <a href="#">
          <img src={NuvemShop} alt="" />
          <h2>Entre em contato agora!</h2>
        </a>
      </div>
    </div>
  );
};

export default Loja;
