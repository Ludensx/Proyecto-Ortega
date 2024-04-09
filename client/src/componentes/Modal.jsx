import Portal from '../componentesLogicos/Portal.jsx'
import '../Hojas-de-Estilo/Modal.css';
function Modal(props){
    const {children, toggle, active} = props;
    return(
        <Portal>
            {active && (
                <div className='window'>
                    <div>{children}</div>
                    <button type='button' className='btn btn-danger' id='cerrarPopUp' onClick={toggle}>Cerrar</button>
                </div>
            )}
        </Portal>
    );
}

export default Modal;