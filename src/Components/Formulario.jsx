import { useState, useEffect } from "react";
import Cotizador from "./Cotizador";
import Dominio from "./Dominio";
import Mt2 from "./Mt2";
import Lugar from "./Lugar";

export function Formulario() {//contenidos del formulario
  const [selectPropiedad, setSelectPropiedad] = useState("Propiedad");
  const [selectUbicacion, setSelectUbicacion] = useState("Ubicacion");
  const [ubicacionData, setUbicacionData] = useState([]);
  const [propiedadData, setPropiedadData] = useState([]);
  const [M2, setM2] = useState(35);
  const [ValorPoliza, FijarValorPoliza] = useState("0.00");
  const PrecioM2 = 35.86;
  useEffect(() => {
    fetch("/datos.json")
      .then((response) => response.json())
      .then((data) => {
        const ubicacion = data.filter((item) => item.categoria === "ubicacion");
        const propiedad = data.filter((item) => item.categoria === "propiedad");
        setUbicacionData(ubicacion);
        setPropiedadData(propiedad);
      });
  }, []);

  return (//logica organizada de los elementos del formulario
    <div className=" center div-cotizador">
      <h2 className="center separador">Completa los datos solicitados</h2>
      <Dominio datos={propiedadData} Dominio={setSelectPropiedad} />
      <Lugar datos={ubicacionData} Lugar={setSelectUbicacion} />
      <Mt2 M2={M2} setM2={setM2} />
      <Cotizador
        propiedadData={propiedadData}
        selectPropiedad={selectPropiedad}
        ubicacionData={ubicacionData}
        selectUbicacion={selectUbicacion}
        M2={M2}
        PrecioM2={PrecioM2}
        ValorPoliza={ValorPoliza}
        FijarValorPoliza={FijarValorPoliza}
      />
    </div>
  );
}

export default Formulario;