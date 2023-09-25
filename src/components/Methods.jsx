import "../styles/Methods.css";

export const Methods = () => {
  return (
    <section className="metodos">
      <div className="titulo">
        <h2 className="">¿Cómo trabajamos?</h2>
      </div>

      <div className="contenedor-metodos">
        <div className="metodo">
          <div className="tarjeta">
            <i className="fa-solid fa-sitemap"></i>
            <span>Recopilación de Información</span>
            <div className="go-corner"></div>
          </div>

          <div className="tarjeta">
            <i className="fa-solid fa-calendar-days"></i>
            <span>Planificación del Proyecto</span>
            <div className="go-corner"></div>
          </div>

          <div className="tarjeta">
            <i className="fa-solid fa-code"></i>
            <span>Desarrollo y Programación</span>
            <div className="go-corner"></div>
          </div>

          <div className="tarjeta">
            <i className="fa-solid fa-rocket"></i>
            <span>Testeo y Finalización</span>
            <div className="go-corner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
