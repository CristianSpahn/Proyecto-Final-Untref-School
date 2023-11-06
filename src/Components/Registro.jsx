import { useEffect, useState } from "react";
export function Registro(){//manejamos historial
    const [cotizaciones, Fijarcotizaciones] = useState([]);

    useEffect(() => {//recuperamos datos de la cotizacion
      const cotizacionesGuardadas =
        JSON.parse(localStorage.getItem("cotizacion")) || [];
        Fijarcotizaciones(cotizacionesGuardadas);
    }, []);
  
    const SuprimirCotizacion = (index) => {//eliminamos una cotizacion 
      const nuevasCotizaciones = [...cotizaciones];
      nuevasCotizaciones.splice(index, 1);
      Fijarcotizaciones(nuevasCotizaciones);
      localStorage.setItem("cotizacion", JSON.stringify(nuevasCotizaciones));
    };
  
    const LimpiarHistorial = () => {//limpiamos el historial de cotizaciones
      Fijarcotizaciones([]);
      localStorage.removeItem("cotizacion");
    };
  
    return (
      <div>
        <h1 className="center separador">Ver Historial 📋</h1>
        <div className=" center div-cotizador">
          <table>
            <thead>
              {/*los nombres de las cosas que guardamos */}
              <tr>
                <th>Fecha y hora de cotización</th>
                <th>Propiedad</th>
                <th>Ubicación</th>
                <th>Metros cuadrados</th>
                <th>Costo mensual</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* resultados de lo seleccionado */}
              {cotizaciones.map(
                ({ fecha, propiedad, ubicacion, Mt2, poliza }, index) => (
                  <tr key={index}>
                    <td>{fecha}</td>
                    <td>{propiedad}</td>
                    <td>{ubicacion}</td>
                    <td>{Mt2}</td>
                    <td>{poliza}</td>
                    <td>
                      {/* boton para borrar 1 cotizacion */}
                      <span
                        className="eliminaritem"
                        onClick={() => SuprimirCotizacion(index)}>
                          <button>
                          <p>Borrar</p>
                          </button>
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="center separador">
            {/* boton para borrar el historial */}
            <button
              onClick={LimpiarHistorial}
              className="button button-outline"
              id="botoneshistorial">
              {/* <p>Vaciar</p> */}
              🗑️
            </button>
            <span style={{ margin: "0 10px" }} />
            {/* boton para volver a la parte del formulario */}
            <button
              onClick={() => window.history.back()}
              className="button button-outline"
              id="botoneshistorial">
              <p>Volver</p>
            </button>
          </div>
        </div>
      </div>
    );
}
export default Registro;