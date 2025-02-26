import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import Extrusora from "../../assets/section02.png";
import { FaBellConcierge } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import WhatsApp from "../../assets/WhatsApp.png";

const About = () => {
  return (
    <div>
      <header className="sobreNos" data-aos="fade-rigth">
        <h1>Compromisso com Qualidade e Inovação</h1>
        <div></div>
        <NavLink to="/" className="headerLink">
          Inicio
        </NavLink>
      </header>
      <section className="sobreNos-Section01" data-aos="fade-up">
        <div className="sobreNos-div01-container">
          <span>CONHEÇA NOSSA EMPRESA</span>
          <h2>Sobre Nós</h2>
          <p>
            A SILPLAST tem mais de 30 anos de experiência no mercado, oferecendo
            soluções personalizadas em sacos plásticos e bobinas PEBD de alta
            qualidade.
          </p>
          <p>
            Com forte compromisso com a sustentabilidade, a empresa busca
            constantemente inovar, prezando pela ética e responsabilidade
            ambiental.
          </p>
          <p>
            Destacamo-nos pelo atendimento ágil, eficiente e pela capacidade de
            entender as necessidades específicas de cada cliente, oferecendo
            soluções sob medida para diversos segmentos.
          </p>
        </div>
        <div className="sobreNos-div01-container">
          <img src={Extrusora} alt="" />
        </div>
      </section>
      <section className="section03" data-aos="fade-up">
        <div className="cards">
          <FaBellConcierge fontSize={100} color="#008bc8" />
          <h2>Rápido atendimento</h2>
          <p>
            Na C&R Plastic, prezamos pela agilidade! Garantimos um atendimento
            rápido e eficiente, para que você receba suas embalagens plásticas
            com praticidade e sem demora.
          </p>
        </div>
        <div className="cards">
          <FaStar fontSize={100} color="#008bc8" />
          <h2>Qualidade</h2>
          <p>
            A C&R Plastic conta com uma equipe altamente capacitada e os
            melhores equipamentos para proporcionar produtos da mais alta
            qualidade.
          </p>
        </div>
        <div className="cards">
          <FaUserCheck fontSize={100} color="#008bc8" />
          <h2>Reconhecimento</h2>
          <p>
            Veja o que dizem nossos clientes: "A C&R Plastic é sempre ágil no
            atendimento às nossas necessidades. Com eles, estamos sempre
            tranquilos."
          </p>
        </div>
      </section>
      <br />
      <section className="sobreNos-FaleConosco" data-aos="fade-up">
        <div>
          <h2>Fale Conosco</h2>
          <p>Estamos sempre prontos para melhor atendê-los.</p>
        </div>
        <div className="SobreNos-WhatsApp">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
          >
            <img src={WhatsApp} alt="" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
