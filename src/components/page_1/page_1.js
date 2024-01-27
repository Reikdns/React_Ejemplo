import { useState } from "react";

export default function Page_1() {
  const [data, setData] = useState([
    {nombre:"rei"},
    {nombre:"feli"}
  ])


  return (
    <div id="contenedorPrincipal">
      <section id="seccionDatos">
        <table className="table" id="tablaDatos">
          <thead className="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Identificacion</th>
              <th>Fecha nacimiento</th>
              <th>Fecha ingreso</th>
              <th>Sexo</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(item => 
                <tr key={item.nombre}>
                  <td>{item.nombre}</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}