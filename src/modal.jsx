import './modal.css';
function Modal({closeModal, onDelete, objId}){
  console.info(objId)
    return(
      <>
      <div className="mm">
        <p>Are you sure you want to delete?</p>
        <buton className='yes' onClick={()=>console.info(objId)}>Yes</buton>

        <button className='no'>No</button>
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



