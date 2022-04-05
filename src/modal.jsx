import './modal.css';
function Modal({closeModal, onDelete, objId}){
  const onConfirm=()=>{
    onDelete(objId)
    closeModal()
    
  }
    return(
      <>
      <div className="mm">
      
        <p>Are you sure you want to delete?</p>
        <button className='yes' onClick={onConfirm} >Yes</button>

        <button className='no' onClick={closeModal}>No</button>
        
      </div>
      </>
    )
}
export default Modal;

/*import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Modal({closeModal}) {

  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => alert('Click Yes')
      },
      {
        label: 'No',
        onClick: () => closeModal()
      }
    ]
  });




}

export default Modal; */



