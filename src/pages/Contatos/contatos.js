import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./contatos.css";
import WhatsApp from "../../assets/WhatsApp.png";
import emailjs from "@emailjs/browser";

const Contatos = () => {
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

  return (
    <div>
      <header className="sobreNos" data-aos="fade-rigth">
        <h1>Contatos, Fale Conosco</h1>
        <div></div>
        <NavLink to="/" className="headerLink">
          Inicio
        </NavLink>
      </header>
      <section className="DetalhesSectionContatos">
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
        <div className="divMaps">
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.8931573251112!2d-46.502991430433994!3d-23.619655369918046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce680965409141%3A0x7c17a1ceb9660a89!2sR.%20Ant%C3%B4nio%20de%20Fran%C3%A7a%20e%20Silva%2C%20565%20-%20Sapopemba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003978-540!5e0!3m2!1sen!2sbr!4v1740439828825!5m2!1sen!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da localização da loja CR Plastic"
          ></iframe>
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

export default Contatos;
