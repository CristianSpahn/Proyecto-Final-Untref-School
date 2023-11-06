export function Dominio({ datos, Dominio }) {//funcion que maneja que tipo de propiedad se elige
    const handleChange = (e) => {
      Dominio(e.target.value);
    };
  
    return (
      <div>
        <label htmlFor="propiedad">Seleccione el tipo de propiedad que busca cotizar</label>
        <select id="propiedad" onChange={handleChange}>
          <option selected disabled>
            Propiedad
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
  
  export default Dominio;