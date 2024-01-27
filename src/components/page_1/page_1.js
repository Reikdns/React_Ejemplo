import { useState } from "react";
import './page_1.css'

export default function Page_1() {
  const [data, setData] = useState([
    {nombre:"rei"},
    {nombre:"feli"},
    {nombre:"feli"},
    {nombre:"feli"},
    {nombre:"feli"},
    {nombre:"feli"}
  ])


  return (
    <div id="contenedorPrincipal">
      <section id="seccionDatos">
        <table id="tablaDatos">
          <thead>
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
                  <td>1234</td>
                  <td>1234</td>
                  <td>1234</td>
                  <td>1234</td>
                  <td>1234</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}