import { useState } from 'react';
import './page_2.css'
import { Estudiante } from '../../clases/estudiante';
import { _guardarEstudiante } from '../../services/estudiante-service';
import Swal from 'sweetalert2'

export default function Page_2(){

    const [nombre, setNombre] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [sexo, setSexo] = useState('')
    const [fechaIngreso, setFechaIngreso] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [notas, setNotas] = useState()

    function guardarEstudiante(){
        let estudiante = new Estudiante(
            nombre,
            identificacion,
            sexo,
            fechaIngreso,
            fechaNacimiento,
            notas.split(","),
        )
        _guardarEstudiante(estudiante).then(mensaje => {
            Swal.fire({
                title: "Guardar",
                text: "¡El estudiante ha sido guardado con éxito!",
                icon: "success"
            });
        })
    }

    return(
        <div id="contenedor">
            
            <div id="formulario">
            
                <div className='inputDiv'>
                    <b><span>Nombre</span></b>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                </div>
                <div className='inputDiv'>
                    <b><span>Identificacion</span></b>
                    <input value={identificacion} onChange={(e) => setIdentificacion(e.target.value)}></input>
                </div><div className='inputDiv'>
                    <b><span>Sexo</span></b>
                    <select defaultValue="-1" onChange={e => setSexo(e.target.value)}>
                        <option value="-1" disabled >Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>
                <div className='inputDiv'>
                    <b><span>Fecha de nacimiento</span></b>
                    <input type='date' onChange={(e) => setFechaNacimiento(e.target.value)}></input>
                </div>
                <div className='inputDiv'>
                   <b> <span>Fecha de ingreso</span></b>
                    <input type='date' onChange={(e) => setFechaIngreso(e.target.value)}></input>
                </div>
                <div className='inputDiv'>
                    <b> <span>Notas</span></b>
                    <input type='text' onChange={(e) => setNotas(e.target.value)}></input>
                </div>
               <div className='inputDiv'>
                    <button onClick={guardarEstudiante}><b>Guardar estudiante</b></button>
               </div>
            </div>

        </div>
    );
}