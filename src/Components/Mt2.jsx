export function Mt2({ M2, setM2 }) {//funcion para ingresar los metros cuadrados
    return (
      <div>
        <label htmlFor="Mt2">Ingresa los Metros cuadrados:</label>
        <input
          type="number"
          id="Mt2"
          value={M2}
          min="35"
          max="500"
          onChange={(e) => setM2(e.target.value)}
          required
        />
      </div>
    );
  }
  
  export default Mt2;