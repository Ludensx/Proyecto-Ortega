import React, { useState } from "react";
import Axios from 'axios';

function FormRegistroEstudiante(props){
  
  const [identificacion, SetIdentificacion] = useState(0);
  const [nombre, SetNombre] = useState("");
  const [apellido, SetApellido] = useState("");
  
  const addEstudiante=()=>{
    Axios.post("http://localhost:3001/createEst", {
      identificacion: identificacion,
      nombre: nombre,
      apellido:apellido
    }).then(() => {
      manejarEnvio();
      alert("Estudiante Registrado");
    });
  }
  const manejarEnvio=()=>{
    props.enClick();
  }
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          Gestión de Estudiantes
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <div className="form-floating">
              <input type="number"
                onChange={(event)=>{
                  SetIdentificacion(event.target.value); }}  
                className="form-control" id="floatingInputGroup1" placeholder="Username"/>
              <label for="floatingInputGroup1">Identificación</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="form-floating">
              <input type="text"
                onChange={(event)=>{
                  SetNombre(event.target.value); }}  
                className="form-control" id="floatingInputGroup1" placeholder="Username"/>
              <label for="floatingInputGroup1">Nombre</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="form-floating">
              <input type="text"
                onChange={(event)=>{
                  SetApellido(event.target.value); }}  
                className="form-control" id="floatingInputGroup1" placeholder="Username"/>
              <label for="floatingInputGroup1">Apellido</label>
            </div>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <button className='btn btn-success' onClick={addEstudiante}>Registrar</button>
          <button className='btn btn-success' id='btnList' onClick={manejarEnvio}>Listar</button>
        </div>
      </div>
    </div>
    );
}

export default FormRegistroEstudiante;