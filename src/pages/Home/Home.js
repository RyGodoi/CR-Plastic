import "./Home.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slides, Cards, Gallery } from "../../listObjects/dados";
import { NavLink } from "react-router-dom";
import { FaBellConcierge } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import Section from "../../assets/section02.png";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import redesSociais from "../../assets/redesSociais.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Gallery;
  const slides = Slides;
  const cards = Cards;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Duração de 1s, animação só acontece uma vez
  }, []);

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
      <header data-aos="fade-up">
        <Swiper
          modules={[EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          autoplay={true}
          className="slideSwiper"
          effect={"fade"}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index} className={item.slideImage}>
              <div className="divHeader">
                <h2>{item.title}</h2>
                <p className="txt-pc">{item.txt}</p>
                <p className="txt-mobile">{item.txtmobile}</p>
                <NavLink to={item.btn} className="btn">
                  Saiba Mais
                </NavLink>
              </div>
              <div className="divHeader">
                <img src={item.image} alt="Slider" className="imageSlider" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
      <br />
      <section className="Section01">
        <div className="divContainer" data-aos="fade-down">
          <div className="div01">
            <span>Em destaque</span>
            <h2>Produtos</h2>
          </div>
          <p>
            A SILPLAST é especialista na produção de sacos plásticos
            transparentes e coloridos, sacos plásticos sanfonados, bobinas
            tubulares e bobinas tipo folha todos em material PE. Nossos produtos
            são fabricados com matérias-primas de alta qualidade, atendendo a
            diversas indústrias e setores. Personalizamos medidas e espessuras,
            garantindo resistência, durabilidade e desempenho superior, sempre
            focados nas necessidades específicas de cada cliente.
          </p>
          <NavLink to="/produtos" className="btn">
            Saiba Mais
          </NavLink>
        </div>
        <div className="divContainer" data-aos="fade-up">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
            autoplay={true}
            effect={"fade"}
          >
            {cards.map((item, index) => (
              <div key={index}>
                <SwiperSlide>
                  <h2>{item.title}</h2>
                  <img src={item.img} alt={item.title} />
                  <p>{item.descricao}</p>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </section>
      <br />
      <section className="Section02">
        <div className="divContainer" data-aos="fade-right">
          <img src={Section} alt="Extrusora de plastico PE" />
        </div>
        <div className="divContainer" data-aos="fade-up">
          <div className="section-div01">
            <span>Em destaque</span>
            <h2>Sobre nós</h2>
          </div>
          <p>
            A C&R Plastic é uma casa de embalagens especializada na venda de
            sacos plásticos e bobinas, oferecendo produtos de alta qualidade
            como sacos PE, PP, sacos de lixo, bobinas PE, PP e picotadas. Nosso
            compromisso é garantir excelência, agilidade e um atendimento
            diferenciado, proporcionando embalagens resistentes, seguras e com
            ótimo custo-benefício. Trabalhamos para atender as necessidades dos
            nossos clientes com eficiência e rapidez, sempre prezando pela
            qualidade e durabilidade dos nossos produtos. Conte com a C&R
            Plastic para encontrar as melhores soluções em embalagens plásticas!
          </p>
          <NavLink to="/about" className="btn">
            Saiba Mais
          </NavLink>
        </div>
        <div></div>
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
      <section className="section04" data-aos="fade-up">
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
            {images.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="card"
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
        <NavLink to="/galeria" className="btn">
          Saiba mais
        </NavLink>
      </section>
      <br />
      <section className="section05" data-aos="fade-down">
        <div className="divContainer">
          <div className="section-div01">
            <span>Confira Nossas</span>
            <h2>Redes Socais</h2>
          </div>
          <p>
            Siga-nos nas redes sociais! Fique por dentro das nossas novidades,
            ofertas exclusivas e conteúdos especiais. Clique nos ícones abaixo e
            acompanhe-nos de perto.
          </p>
          <div className="redes">
            <a
              href="https://www.instagram.com/crplastic.comercio/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573203152614"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="divContainer">
          <img src={redesSociais} alt="" />
        </div>
      </section>
      <br />
    </div>
  );
};

export default Home;
