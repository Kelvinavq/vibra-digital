import "../styles/Avantages.css";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
export const Avantages = () => {
  return (
    <section id="ventajas" className="ventajas">
      <div className="titulo">
        <h2>
          ¿Sabía las ventajas de contar con un
          <strong>sitio web bien diseñado?</strong>
        </h2>
        <p>
          Nosotros nos encargamos de que su negocio gane prestigio digital para
          que pueda incrementar sus ventas
        </p>
      </div>

      <div className="contenedor-ventajas">
        <div className="ventaja">
          <div className="icono">
            <StackedLineChartIcon />
          </div>

          <div className="texto">
            <p>
              Los negocios que no cuentan con un sitio web de su propia marca,
              venden un 30% menos que los negocios que si cuentan con un sitio
              como tal
            </p>
          </div>
        </div>

        <div className="ventaja">
          <div className="icono">
            <TroubleshootIcon />
          </div>

          <div className="texto">
            <p>Gane prestigio y posicionamiento en el amplio mundo digital</p>
          </div>
        </div>

        <div className="ventaja">
          <div className="icono">
            <CorporateFareIcon />
          </div>

          <div className="texto">
            <p>Facilita la parte organizacional y técnica de su negocio</p>
          </div>
        </div>
      </div>
    </section>
  );
};
