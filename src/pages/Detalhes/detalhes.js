import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProdutosCards } from "../../listObjects/dados";
import "./Detalhes.css";
import WhatsApp from "../../assets/WhatsApp.png";
import emailjs from "@emailjs/browser";

const Detalhes = () => {
  const { produtoId } = useParams();

  // Encontrar o produto correspondente pelo link
  const produto = ProdutosCards.find((item) => item.link === produtoId);
  const [openIndex, setOpenIndex] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }
    const templateParams = {
      fromname: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_k2b0j1n",
        "template_hu876v7",
        templateParams,
        "g1kYJZYkjHPMZ1tlF"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setEmail("");
          setName("");
          setMessage("");
          alert("Email enviado com sucesso!");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

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
      <section className="sectionDetalhes">
        <div className="DetalhesSection02">
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
        </div>
        <div className="Contatos-container">
          <h1 className="Contatos-title">Contato</h1>

          <form className="Contatos-form" onSubmit={sendEmail}>
            <input
              className="Contatos-input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="Contatos-input"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <textarea
              className="Contatos-textarea"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <input className="Contatos-button" type="submit" value="Enviar" />
          </form>
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
