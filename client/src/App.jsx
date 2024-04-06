import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [identificacion, SetIdentificacion] = useState(0);
  const [nombre, SetNombre] = useState("");
  const [apellido, SetApellido] = useState("");

  const addEstudiante=()=>{
    Axios.post("http://localhost:3001/createEst", {
      identificacion: identificacion,
      nombre: nombre,
      apellido:apellido
    }).then(() => {
      alert("Empleado Registrado")
    });
  }

  return (
    <div className="App">
      <div className='datos'>
        <label>Identificación: <input type="number"
          onChange={(event)=>{
            SetIdentificacion(event.target.value);
          }}/></label>
        <label>Nombre: <input type="text" 
          onChange={(event)=>{
            SetNombre(event.target.value);
          }}
        /></label>
        <label>Apellido: <input type="text"
          onChange={(event)=>{
            SetApellido(event.target.value);
          }}
        /></label>
        <button onClick={addEstudiante}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
