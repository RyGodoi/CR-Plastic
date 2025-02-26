import React from "react";

import { NavLink } from "react-router-dom";
import { ProdutosCards } from "../../listObjects/dados";
import ButtonImg from "../../assets/button.png";
import "./Produtos.css";
import WhatsApp from "../../assets/WhatsApp.png";

const Produtos = () => {
  const produtosCards = ProdutosCards;

  return (
    <div>
      <header className="sobreNos">
        <h1>Produtos C&R Plastic - Variedade em Embalagens Plásticas</h1>
        <div></div>
        <NavLink to="/" className="headerLink">
          Inicio
        </NavLink>
      </header>
      <section>
        <div className="produtosCardsContainer">
          {produtosCards.map((item, index) => (
            <NavLink
              key={index}
              to={`/detalhes/${item.link}`}
              className="produtosCards"
              data-aos="fade-up"
            >
              <div className="produtosInfo">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="produtosInfo2">
                <h2>{item.title}</h2>
                <img src={ButtonImg} alt="Saiba mais" />
              </div>
              {/*
              <NavLink key={index} to={"/" + item.link} className="produtosCards">
                <div className="produtosInfo">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="produtosInfo2">
                  <h2>{item.title}</h2>
                  <img src={ButtonImg} alt="" />
                </div>
              </NavLink>
              */}
            </NavLink>
          ))}
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

export default Produtos;
