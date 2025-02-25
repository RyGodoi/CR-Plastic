import React from "react";
import { NavLink } from "react-router-dom";
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
    </div>
  );
};

export default About;
