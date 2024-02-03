import { useEffect, useState } from "react";
import _obtenerEstudiantes from "../../services/estudiante-service";
import './page_1.css'

export default function Page_1() {
  const [estudiantesFiltrados, setEstudiantesFiltrados] = useState([])
  const [estudiantes, setEstudiantes] = useState([])
  const [input, setInput] = useState('')

  useEffect( () => {
    obtenerEstudiantes()
  }, [])
  
  function obtenerEstudiantes(){
    _obtenerEstudiantes().then(estudiantes => {
      setEstudiantes(estudiantes)
      setEstudiantesFiltrados(estudiantes)
    })
  }

  function obtenerEstudiante(e){
    setInput(e.target.value)
    const terminoDeBusqueda = e.target.value.toLowerCase();
    setEstudiantesFiltrados(estudiantes.filter(estudiante => estudiante.nombre.toLowerCase().includes(terminoDeBusqueda)));
  }

  return (
    <div id="contenedorPrincipal">
      <span><b>Buscar</b></span>
      <input placeholder="Filtrar por nombre..." value={input} type="text" onChange={e => obtenerEstudiante(e)}/>
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
              estudiantesFiltrados.map(item => 
                <tr key={item.nombre}>
                  <td>{item.nombre}</td>
                  <td>{item.identificacion}</td>
                  <td>{item.fechaNacimiento}</td>
                  <td>{item.fechaIngreso}</td>
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