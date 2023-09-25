import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import "../styles/Contact.css";
import logo_vibra from "../assets/images/Simple-claro.webp";

export const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de nombre
    if (nombre.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El nombre debe contener al menos 3 caracteres.",
      });
      return;
    }

    // Validación de teléfono
    if (telefono.length < 10) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El número de teléfono debe contener al menos 10 dígitos.",
      });
      return;
    }

    // Validación de correo
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(correo)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El correo debe contener el formato correcto. Por ejemplo: jon@mail.com",
      });
      return;
    }

    // Envía el formulario (puedes hacer una solicitud HTTP aquí si es necesario)
  };

  
  return (
    <section id="contacto" className="contacto">
      <div className="titulo">
        <h2>
          <strong>Contáctenos</strong>
        </h2>
        <p></p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="left">
          <div className="grupo-input">
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="inputs">
            <div className="grupo-input">
              <input
                type="tel"
                placeholder="Teléfono"
                name="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="grupo-input">
              <input
                type="email"
                placeholder="Correo electrónico"
                name="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
          </div>

          <div className="grupo-input">
            <textarea
              name="mensaje"
              placeholder="Escriba su mensaje..."
            ></textarea>
          </div>

          <input type="submit" value="Enviar" className="btn" />
        </div>
        <div className="right">
          {/* <img src={logo_vibra} alt="Logo Vibra Digital" /> */}
        </div>
      </form>
    </section>
  );
};
