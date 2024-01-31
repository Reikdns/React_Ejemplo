import { useEffect, useState } from "react";
import _obtenerEstudiantes from "../../services/estudiante-service";
import './page_1.css'

export default function Page_1() {
  const [data, setData] = useState([])

  useEffect( () => {
    obtenerEstudiantes()
  }, [])
  
  function obtenerEstudiantes(){
    _obtenerEstudiantes().then(estudiantes => {
      setData(estudiantes)
    })
    
  }

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
                  <td>{item.identificacion}</td>
                  <td>{item.fecha_nacimiento}</td>
                  <td>{item.fecha_ingreso}</td>
                  <td>{item.sexo}</td>
                  <td>{(item.notas.reduce((a,b) => a + b, 0)/item.notas.length).toFixed(2)}</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </section>
    </div>
  );
}