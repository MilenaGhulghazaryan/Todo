import './hide.css';

function Hide({ setHideIsComplited, hideIsComplited }) {

    return (

        <div className='checkBox'><input type="checkbox" checked={hideIsComplited} onChange={() => {
            setHideIsComplited(!hideIsComplited)
        }} />Hide completed</div>

    )
}

export default Hide;