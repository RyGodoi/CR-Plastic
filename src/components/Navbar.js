import { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Logo from "../assets/LogoSimplificado.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={Styles.navbar}>
      <NavLink to="/" className={Styles.brand}>
        <img src={Logo} alt="Logo C&R Plastic" className={Styles.logo} />
      </NavLink>

      {/* Botão do Menu Mobile */}
      <button className={Styles.menuButton} onClick={toggleMenu}>
        &#9776; {/* Ícone de hambúrguer */}
      </button>

      <ul className={Styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Sobre Nós
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/galeria"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Galeria
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contatos"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Contatos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/loja"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.Contato
            }
          >
            Compre Agora !
          </NavLink>
        </li>
      </ul>
      {/* Menu lateral */}
      <div className={`${Styles.mobileMenu} ${menuOpen ? Styles.open : ""}`}>
        <ul className={Styles.mobileLinks}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              Sobre Nós
            </NavLink>
          </li>
          <li>
            <NavLink to="/produtos" onClick={closeMenu}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeria" onClick={closeMenu}>
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink to="/contatos" onClick={closeMenu}>
              Contatos
            </NavLink>
          </li>
          <li>
            <NavLink to="/loja" onClick={closeMenu}>
              Compre Agora !
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Fundo escuro ao abrir o menu */}
      {menuOpen && <div className={Styles.overlay} onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
