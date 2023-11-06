import { Link } from "react-router-dom";

export function Encabezado() {//parte de arriba de la pagina, encontramos el titulo y un boton para ir al historial
  return (
    <nav>
      <div className="historial">
        <Link to="historial">
          <button>Ver Historial</button>
        </Link>
      </div>
      <h1 className="center separador">Seguro de hogar 🏡</h1>
    </nav>
  );
}

export default Encabezado;