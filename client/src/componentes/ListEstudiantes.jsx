import Axios from 'axios';
import React, { useState } from "react";
import FormRegistroEstudiante from './FormRegistroEstudiante.jsx';
import FormEditarEstudiante from './FormEditarEstudiante.jsx';
import Modal from './Modal.jsx'

function ListEstudiantes(props){

    const [estudiantesList, setEstudiantes] = useState([]);
    const [active, setActive] = useState(false);

    const toggle = (val) => {
        setActive(!active);
    }
    const getEstudiantes=()=>{
        Axios.get("http://localhost:3001/estudiantes").then((response) => {
            setEstudiantes(response.data);
        });
    }

    return (
        <>
        <FormRegistroEstudiante enClick={getEstudiantes}/>
        <Modal active={active} toggle={toggle}>
            <FormEditarEstudiante/>
        </Modal> 
        <table className ='table talbe-striped'>
            <thead>
            <tr>
                <th scope='col'>Identificación</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Apellido</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
            estudiantesList.map((val,key)=>{
                return <tr key={val.est_id}>
                        <th scope='row'>{val.est_id}</th>
                        <td>{val.est_nombre}</td>
                        <td>{val.est_apellido}</td>
                        <td>
                            <div className='btn-group' role='group' aria-label='Basic example'>
                                <button type='button' className='btn btn-info'
                                 onClick={()=>{
                                    toggle(val);  
                                 }}> 
                                 Editar</button>
                                <button type='button' className='btn btn-danger'>Eliminar</button>
                            </div>
                        </td>
                       </tr>
                })
            }
            </tbody>
        </table>  
        </>
    );
}

export default ListEstudiantes;