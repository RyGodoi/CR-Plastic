import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { register } from "swiper/element/bundle";
import ScrollToTop from "./components/ScrollToTop";

//icones
import "react-icons/fa6";

//swipper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galeria from "./pages/Galeria/Galeria";
import Produtos from "./pages/Produtos/Produtos";
import Contatos from "./pages/Contatos/contatos";
import Mapping from "./pages/Mapping/map";
import Detalhes from "./pages/Detalhes/detalhes";
import Loja from "./pages/Loja/loja";

//iconsButtons
import BtnFacebook from "./assets/button01.png";
import BtnInstagram from "./assets/button02.png";
import BtnWhatsApp from "./assets/button03.png";

function App() {
  register();
  return (
    <div className="App">
      <div className="tarjaSuperior">
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
      </div>
      <div className="floating-buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=61573203152614"
        >
          <img src={BtnFacebook} alt="Botão 1" />
        </a>
        <a
          href="https://www.instagram.com/crplastic.comercio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={BtnInstagram} alt="Botão 2" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5511964000352&text=Ol%C3%A1,%20vim%20pelo%20seu%20Site"
        >
          <img src={BtnWhatsApp} alt="Botão 3" />
        </a>
      </div>
      <BrowserRouter>
        <Navbar></Navbar>
        <ScrollToTop></ScrollToTop>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/galeria" element={<Galeria></Galeria>}></Route>
            <Route path="/produtos" element={<Produtos></Produtos>}></Route>
            <Route path="/contatos" element={<Contatos></Contatos>}></Route>
            <Route path="/mapping" element={<Mapping></Mapping>}></Route>
            <Route path="/loja" element={<Loja></Loja>}></Route>
            <Route path="/detalhes/:produtoId" element={<Detalhes />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
