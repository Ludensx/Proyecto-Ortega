import React, { useState } from "react";
import Axios from "axios";

function FormEditarEstudiante(props){
    const [identificacion, SetIdentificacion] = useState();
    const [nombre, SetNombre] = useState('');
    const [apellido, SetApellido] = useState('');

    const updateEst = () =>{
        Axios.put("http://localhost:3001/updateEst",{
            nombre: nombre,
            apellido: apellido,
            identificacion: identificacion
        }).then(() => {
            alert("Estudiante Actualizado");
        });
    }
    return (
    <>
    <div className="card text-center">
        <div className="card-header">
          Edición de Estudiantes
        </div>
        <div className="card-body">
        <div className="input-group mb-3">
            <div className="form-floating">
              <input type="number"
                value = {identificacion}
                onChange={(event)=>{
                  SetIdentificacion(event.target.value); }}  
                className="form-control" id="floatingInputGroup1" placeholder="Username"/>
              <label for="floatingInputGroup1">Identificación</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="form-floating">
              <input type="text"
                value = {nombre}
                onChange={(event)=>{
                  SetNombre(event.target.value); }}  
                className="form-control" id="floatingInputGroup1" placeholder="Username"/>
              <label for="floatingInputGroup1">Nombre</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="form-floating">
              <input type="text"
                value = {apellido}
                onChange={(event)=>{
                  SetApellido(event.target.value); }}  
                className="form-control" id="floatingInputGroup1" placeholder="Username"/>
              <label for="floatingInputGroup1">Apellido</label>
            </div>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <button className='btn btn-success' onClick={updateEst}>Guardar Cambios</button>
        </div>
      </div>
      </>);
}

export default FormEditarEstudiante;