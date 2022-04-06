import './modal.css';
function Modal({ closeModal, onDelete, objId }) {
  const onConfirm = () => {
    onDelete(objId)
    closeModal()

  }
  return (
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


