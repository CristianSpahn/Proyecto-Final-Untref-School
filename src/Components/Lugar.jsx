export function Lugar({ datos, Lugar }) {//funcion que maneja el Lugar
    const handleChange = (e) => {
      Lugar(e.target.value);
    };
    return (
      <div>
        <label htmlFor="ubicacion">Seleccione la ubicación deseada para cotizar</label>
        <select id="ubicacion" onChange={handleChange}>
          <option selected disabled>
            Ubicacion
          </option>
          {datos.map((item, index) => (
            <option key={index} value={item.tipo}>
              {item.tipo}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default Lugar;