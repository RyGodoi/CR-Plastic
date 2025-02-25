import { NavLink } from "react-router-dom";
import "./loja.css";

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
      <h1>Entre em contato conosco</h1>
      <h1>Mercado Livre</h1>
      <h1>Shoppe</h1>
      <h1>Nuvem Shop</h1>
    </div>
  );
};

export default Loja;
