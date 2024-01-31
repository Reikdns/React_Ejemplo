
const apiBase = "http://127.0.0.1:8000"

export default function _obtenerEstudiantes(){
    return fetch(apiBase + "/obtener_todos")
    .then(response => response.json())
}

export function _guardarEstudiante(){
    return fetch(apiBase + "/guardar_estudiante", {
        method: 'POST',
        headers: 'Content-Type: application/json',
        body: {}
    })
    .then(response => response.json())
}