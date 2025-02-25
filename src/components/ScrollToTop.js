import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Sempre que a rota mudar, executa o scroll para o topo

  return null;
};

export default ScrollToTop;
