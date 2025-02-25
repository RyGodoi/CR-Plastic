import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProdutosCards } from "../../listObjects/dados";
import "./Detalhes.css";
import WhatsApp from "../../assets/WhatsApp.png";

const Detalhes = () => {
  const { produtoId } = useParams();

  // Encontrar o produto correspondente pelo link
  const produto = ProdutosCards.find((item) => item.link === produtoId);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: produto.pergunta01, answer: produto.resposta01 },
    { question: produto.pergunta02, answer: produto.resposta02 },
    { question: produto.pergunta03, answer: produto.resposta03 },
  ];

  if (!produto) {
    return <h2>Produto não encontrado!</h2>;
  }
  return (
    <div>
      <header className="sobreNos">
        <h1>{produto.title}</h1>
      </header>
      <section>
        <div className="detalhesContainer">
          <h2>Confira os detalhes de nosso produto</h2>
          <div className="detalhesContainer01">
            <div>
              <img
                className="detalhesImg"
                src={produto.img}
                alt={produto.title}
              ></img>
            </div>
            <div>
              <p>{produto.paragrafo}</p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="DetalhesSection02">
        <h2>Perguntas Frequentes</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="box-1">
              <button
                className="btnDetalhes"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question} </span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="destalhesRespotas">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="sobreNos-FaleConosco">
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

export default Detalhes;
