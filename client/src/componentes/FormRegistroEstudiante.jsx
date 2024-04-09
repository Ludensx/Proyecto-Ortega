import React, { useState } from "react";
import Axios from 'axios';

function FormRegistroEstudiante(props){
  
  const [identificacion, SetIdentificacion] = useState();
  const [nombre, SetNombre] = useState("");
  const [apellido, SetApellido] = useState("");
  const [estado, SetEstado] = useState("");
  const [editar, SetEditar] = useState(false);
  const [estudiantesList, setEstudiantes] = useState([]);
  
  const getEstudiantes=()=>{
    Axios.get("http://localhost:3001/estudiantes").then((response) => {
        setEstudiantes(response.data);
    });
  }
  const addEstudiante=()=>{
    Axios.post("http://localhost:3001/createEst", {
      identificacion: identificacion,
      nombre: nombre,
      apellido:apellido
    }).then(() => {
      getEstudiantes();
      limpiarCampos();
      alert("Estudiante Registrado");
    });
  }
  const deleteEstudiante=(id)=>{
      Axios.delete("http://localhost:3001/deleteEst/"+id,{
      identificacion: identificacion
    }).then(() => {
      getEstudiantes();
      alert("Estudiante Eliminado");
    });
  }
  const updateEstudiante = () =>{
    Axios.put("http://localhost:3001/updateEst",{
        nombre: nombre,
        apellido: apellido,
        estado: estado,
        identificacion: identificacion

    }).then(() => {
      getEstudiantes();
      alert("Estudiante Actualizado");
    });
  }
  const menuEditarEstudiante=(val)=>{
    SetEditar(true);
    SetIdentificacion(val.est_id);
    SetNombre(val.est_nombre);
    SetApellido(val.est_apellido);
    SetEstado(val.est_estado);
  }
  const limpiarCampos=()=>{
    SetEditar(false);
    SetIdentificacion("");
    SetNombre("");
    SetApellido("");
    SetEstado("");
  }
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          Gestión Estudiantes
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <div className="form-floating">
              {
                editar ? (
                  <input type="number"
                  disabled='true'
                  onChange={(event)=>{
                  SetIdentificacion(event.target.value); }}  
                  value={identificacion}
                  className="form-control" id="floatingInputGroup1" placeholder="Username"/>)
                :(
                  <input type="number"
                  onChange={(event)=>{
                  SetIdentificacion(event.target.value); }}  
                  value={identificacion}
                  className="form-control" id="floatingInputGroup1" placeholder="Username"/>)
              }
              <label for="floatingInputGroup1">Identificación</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="form-floating">
              <input type="text"
                value={nombre}
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
                className="form-control" value={apellido} id="floatingInputGroup1" placeholder="Username"/>
              <label for="floatingInputGroup1">Apellido</label>
            </div>
          </div>
          <div>
          {editar ?(
            <div className="input-group mb-3">
              <div className="form-floating">
                <input type="text"
                  onChange={(event)=>{
                    SetEstado(event.target.value); }}  
                  className="form-control" value={estado} id="floatingInputGroup1" placeholder="Username"/>
                <label for="floatingInputGroup1">Estado</label>
              </div>
            </div>        
          ):
          <></>
          }
          </div>
        </div> 
        <div className="card-footer text-body-secondary">
          {
            editar ? (
            <div> 
              <button className='btn btn-warning m-2' onClick={updateEstudiante}>Guardar Cambios</button>
              <button className='btn btn-danger m-2' onClick={limpiarCampos}>Cancelar</button>
            </div>
            )
            :(<div>
              <button className='btn btn-success' onClick={addEstudiante}>Registrar</button>
              <button className='btn btn-info' id='btnList' onClick={getEstudiantes}>Listar</button>
            </div>
            )
          }
          
        </div>
      </div>
      <table className ='table talbe-striped'>
            <thead>
            <tr>
                <th scope='col'>Identificación</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Apellido</th>
                <th scope='col'>Estado</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
            estudiantesList.map((val,key)=>{
                return(
                   <tr key={val.est_id}>
                      <th scope='row'>{val.est_id}</th>
                      <td>{val.est_nombre}</td>
                      <td>{val.est_apellido}</td>
                      <td>{val.est_estado}</td>
                      <td>
                        <div className='btn-group' role='group' aria-label='Basic example'>
                            <button type='button' className='btn btn-info'
                              onClick={()=>{
                                menuEditarEstudiante(val)
                              }}> Editar</button>
                            <button type='button' className='btn btn-danger'
                              onClick={()=>{
                                deleteEstudiante(val.est_id)
                              }}>Eliminar</button>
                        </div>
                    </td>
                    </tr>)
                })
            }
            </tbody>
        </table>  
    </div>
    );
}

export default FormRegistroEstudiante;