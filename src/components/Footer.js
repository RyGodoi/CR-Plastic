import { NavLink } from "react-router-dom";
import Styles from "./Footer.module.css";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.ContainerFooter1}>
        <div>
          <img src={Logo} alt="" className={Styles.logo} />
          <p>
            A SILPLAST tem mais de 30 anos de experiência no mercado, oferecendo
            soluções personalizadas em sacos plásticos e bobinas PEBD de alta
            qualidade.
          </p>
        </div>
        <div>
          <h3>LINKS RAPIDOS</h3>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Sobre nós
          </NavLink>

          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Produtos
          </NavLink>

          <NavLink
            to="/galeria"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Galeria
          </NavLink>
          <NavLink
            to="/contatos"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Contatos
          </NavLink>
          <NavLink
            to="/loja"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Compre Agora !
          </NavLink>
          <NavLink
            to="/mapping"
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.cor
            }
          >
            Mapa do Site
          </NavLink>
        </div>
        <div>
          <h3>CONTATOS</h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
          >
            WhatsApp
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/crplastic.comercio/"
          >
            Instagram
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=61573203152614"
          >
            Facebook
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
          >
            Nuvem Shop
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
          >
            Shopee
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
          >
            Mercado Livre
          </a>
        </div>
      </div>
      <div>
        <p>
          Criado por{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ryan.godoi.dev/"
          >
            Ryan Godoi da Silva
          </a>{" "}
          , &copy; 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
