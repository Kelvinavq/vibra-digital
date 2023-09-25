import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Menu.css'
import logo_vibra from "../assets/images/Simple.webp";

export const Menu = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    // Función para abrir el menú
    const abrirMenu = () => {
      setMenuVisible(true);
    };
  
    // Función para cerrar el menú
    const cerrarMenu = () => {
      setMenuVisible(false);
    };
  
    // Clase condicional para el nav
    const navClass = menuVisible ? "active" : "";
  return (
    <section>
      <div className="circle uno"></div>

      <nav className={navClass}>
        <div className="logo">
          <Link to="/">
            <img width="100" src={logo_vibra} alt="Logo Vibra Digital" />
          </Link>
        </div>

        <ul>
          <li className="logo li">
          <Link to="/">
              <img src={logo_vibra} alt="" />
              </Link>
          </li>
          <li className="active li">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="li">
            <a href="#ventajas">Ventajas</a>
          </li>
          <li className="li">
            <a href="#procesos">Proceso</a>
          </li>
          <li className="li">
            <a href="#portafolio">Portafolio</a>
          </li>

          <button className="cerrar" onClick={cerrarMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>

          <button className="cotizacion li" >
            <i className="fa-sharp fa-solid fa-phone fa-shake"></i>
            Cotización
          </button>
        </ul>

        <button  className="btn">
          <i className="fa-sharp fa-solid fa-phone fa-shake"></i>
          Cotización
        </button>

        <button className="btn-menu" onClick={abrirMenu}>
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </nav>
    </section>
  );
};
