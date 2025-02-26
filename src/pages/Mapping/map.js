import React from "react";
import { NavLink } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import "./map.css";

const About = () => {
  return (
    <div>
      <header className="sobreNos" data-aos="fade-rigth">
        <h1>Mapa do Site</h1>
        <div></div>
        <NavLink to="/" className="headerLink">
          Inicio
        </NavLink>
      </header>
      <section className="SectionMap">
        <div className="MapContainer">
          <NavLink to="/" className="MapRouter">
            <FaLink />
            Inicio
          </NavLink>
          <NavLink to="/about" className="MapRouter">
            <FaLink />
            Sobre nós
          </NavLink>
          <NavLink to="/produtos" className="MapRouter">
            <FaLink />
            Produtos
          </NavLink>
          <NavLink to="/galeria" className="MapRouter">
            <FaLink />
            Galeria
          </NavLink>
          <NavLink to="/contatos" className="MapRouter">
            <FaLink />
            Contatos
          </NavLink>
          <NavLink to="/loja" className="MapRouter">
            <FaLink />
            Loja
          </NavLink>
          <NavLink to="/detalhes/sacos-plasticos-pebd" className="MapRouter">
            <FaLink />
            Sacos plásticos (PEBD)
          </NavLink>
          <NavLink to="/detalhes/sacos-plasticos-lixo" className="MapRouter">
            <FaLink />
            Sacos plásticos de LIXO
          </NavLink>
          <NavLink to="/detalhes/bobinas-plasticas-pp" className="MapRouter">
            <FaLink />
            Bobinas plásticas (PP)
          </NavLink>
          <NavLink
            to="/detalhes/sacos-plasticos-picotados-pead"
            className="MapRouter"
          >
            <FaLink />
            Bobinas plásticas picotadas (PEAD)
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;
