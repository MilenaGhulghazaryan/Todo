import './hide.css';
function Hide({ todos, onClearCompleted, setHideIsComplited, hideIsComplited }) {




    return (
        <>
            <span className="task">Task</span>

            <input style={{ color: "red" }} className='box' type="checkbox" checked={hideIsComplited} onChange={() => {
                setHideIsComplited(!hideIsComplited)
                console.log("usus", hideIsComplited)
            }} />

            <span className='hh'>Hide completed</span>

        </>
    )
}

export default Hide;