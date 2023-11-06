import Swal from "sweetalert2";
import Toastify from "toastify-js";
import { useState } from "react";

export function Cotizador({//Cotizador de seguros
  propiedadData,
  selectPropiedad,
  ubicacionData,
  selectUbicacion,
  M2,
  PrecioM2,
  ValorPoliza,
  FijarValorPoliza,
}) {
  const [cotizado, Cotizado_Establecido] = useState(false);

  const cotizar = () => {//funcion que realiza la cotizacion
    if (
      M2 >= 35 &&
      M2 <= 500 &&
      selectPropiedad !== "Propiedad" &&
      selectUbicacion !== "Ubicacion"
    ) {
      const factorPropiedad = propiedadData.find(
        (item) => item.tipo === selectPropiedad
      ).factor;
      const factorUbicacion = ubicacionData.find(
        (item) => item.tipo === selectUbicacion
      ).factor;
      const resultado = factorPropiedad * factorUbicacion * M2 * PrecioM2;
      const valorPoliza = resultado.toFixed(2);
      FijarValorPoliza(valorPoliza);
      Cotizado_Establecido(true);

      // notificar que la cotizacion sepudo hacer
      Swal.fire({
        icon: "success",
        title: "Cotización realizada con éxito.",
        showConfirmButton: false,
        timer: 3500,
        width: "200px",
      });
    } else {
      // notificar que faltan datos
      Swal.fire({
        icon: "error",
        title: "Debes completar todos los datos en pantalla.",
        showConfirmButton: false,
        timer: 3500,
        width: "200px",
      });
    }
    if (M2 < 35 || M2 > 500) {
      // notificar que la cantidad de metros seleccionada no es correcta
      Swal.fire({
        icon: "warning",
        title: "La cantidad de metros debe estar entre los 35 y los 500.",
        showConfirmButton: false,
        timer: 3500,
        width: "200px",
      });
    }
  };

  const guardar = () => {//almacenar datos en el historial
    if (cotizado) {
      const agregarCotizacion = {
        fecha:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
        propiedad: selectPropiedad,
        ubicacion: selectUbicacion,
        Mt2: M2,
        poliza: ValorPoliza,
      };
      const cotizaciones = JSON.parse(localStorage.getItem("cotizacion")) || [];
      cotizaciones.push(agregarCotizacion);
      localStorage.setItem("cotizacion", JSON.stringify(cotizaciones));

      //Cotización guardada
      Toastify({
        text: "Cotización guardada.",
        duration: 3500,
        newWindow: true,
        gravity: "top",
        position: "left",
        style: {
          background: "CornflowerBlue",
        },
      }).showToast();
    }
  };

  return (
    <>
      <div className="center separador">
        <button onClick={cotizar}>Cotizar</button>
      </div>
      <div className="center separador">
        <p className="importe">
          Precio estimado: $ <span id="valorPoliza">{ValorPoliza}</span>
          <span
            className={`guardar ${cotizado ? "" : "ocultar"}`}
            onClick={guardar}
            title="Guardar en historial">
            💾
          </span>
        </p>
      </div>
    </>
  );
}

export default Cotizador;
