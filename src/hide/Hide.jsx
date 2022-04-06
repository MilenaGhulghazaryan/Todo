import './hide.css';

function Hide({ setHideIsComplited, hideIsComplited }) {




    return (
        <div>
          <label className='checkBox'><input type="checkbox" checked={hideIsComplited} onChange={() => {
                setHideIsComplited(!hideIsComplited)
            }}/>Hide completed</label>
    
        </div>
    )
}

export default Hide;