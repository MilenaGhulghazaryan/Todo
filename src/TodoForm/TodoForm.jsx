import { useState } from "react";
import './TodoForm.css';


function TodoForm({ onAdd }) {

    const [text, setText] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    let handleChange = (value) => {
        setText(value);
        if (value.length > 54) {
            setErrorMessage(true)
        } else {
            setErrorMessage(false)

        }
    }

    return (

        <>

            <form onSubmit={(e) => {
                e.preventDefault();
                onAdd(text);
                setText("");
            }}>

                <div className="ajj">
                    <div className="taskinpadd">
                        <label>Task</label>
                        <input placeholder="Write here" className ="input" style={errorMessage ? {borderColor:"red" } : {borderColor:"yellow"}} type="text" value={text} onChange={(e) => {
                            handleChange(e.target.value);
                        }} />
                    </div>
                    <button className="add">Add</button>
                </div>
            </form>
            <div className="error">
                {errorMessage && <p className="err">Task content can contain max 54 characters</p>}
                
            </div>
        </>
    )
}

export default TodoForm;