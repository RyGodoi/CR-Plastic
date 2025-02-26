import { NavLink } from "react-router-dom";
import "./loja.css";
import RedesSociais from "../../assets/RedesSociais02Logo.png";
import Shopee from "../../assets/ShopeeLogo.png";
import MercadoLivre from "../../assets/MercadoLivreLogo.png";
import NuvemShop from "../../assets/NuvemShopLogo.png";

const Loja = () => {
  return (
    <div>
      <header className="sobreNos">
        <h1>Conheça nossas Lojas de vendas</h1>
        <div></div>
        <NavLink to="/" className="headerLink">
          Inicio
        </NavLink>
      </header>
      <div className="LojaRedesSociais LojaContainer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
        >
          <img src={RedesSociais} alt="" />
          <h2>Entre em contato agora!</h2>
        </a>
      </div>
      <div className="LojaMercadoLivre LojaContainer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
        >
          <img src={MercadoLivre} alt="" />
          <h2>Loja Mercado Livre</h2>
        </a>
      </div>
      <div className="LojaShopee LojaContainer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
        >
          <img src={Shopee} alt="" />
          <h2>Loja Shopee</h2>
        </a>
      </div>
      <div className="LojaNuvemShop LojaContainer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
        >
          <img src={NuvemShop} alt="" />
          <h2>Entre em contato agora!</h2>
        </a>
      </div>
    </div>
  );
};

export default Loja;
