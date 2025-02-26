import React from "react";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import { Gallery } from "../../listObjects/dados";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Gallery;

  // Bloquear rolagem
  function bloquearRolagem(image) {
    document.body.style.overflow = "hidden";
    setSelectedImage(image);
  }

  // Desbloquear rolagem
  function desbloquearRolagem() {
    document.body.style.overflow = "auto";
    setSelectedImage(null);
  }
  return (
    <div>
      <header className="sobreNos" data-aos="fade-rigth">
        <h1>Galeria C&R Plastic</h1>
        <div></div>
        <NavLink to="/" className="headerLink">
          Inicio
        </NavLink>
      </header>
      <br />
      <section className="section04">
        <h2>Galeria</h2>
        <div className="gallery-container">
          {selectedImage && (
            <div className="overlay" onClick={() => desbloquearRolagem()}>
              <div className="expanded-card">
                <img src={selectedImage.img} alt="Galeria" />
              </div>
            </div>
          )}
          <div className="gallery">
            {images.map((image, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                style={{
                  backgroundImage: `url(${image.img})`, // Aqui deve ser image.img e não apenas image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => bloquearRolagem(image)} // Passando o objeto correto para o estado
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galeria;
