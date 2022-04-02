/*import './hide.css';
function Modal(){
    return(
      <div className="mm">
          <button>Yes</button>
          <button>No</button>
      </div>
    )
}
export default Modal;*/

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Modal() {

  const submit = () => {

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
          onClick: () => alert('Click No')
        }
      ]
    });
  }




}

export default Modal; 



