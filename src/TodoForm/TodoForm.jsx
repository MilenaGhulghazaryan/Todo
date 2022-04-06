/*import { useState } from "react";
import  './TodoForm.css';

function TodoForm({onAdd}){

   const [text,setText] = useState("");

   
   return(
       <form onSubmit={(e) =>{
           e.preventDefault(); 
           onAdd(text);
           setText("");
       }}>
           
           <input placeholder="Write here" className = "input" type = "text" value={text} maxlength="5" onChange={(e) => {
              setText(e.target.value);
           }}/>
           <button className="add">Add</button>
         
       </form>
   )
}

export default TodoForm;*/

import { useState } from "react";
import './TodoForm.css';
import { useEffect } from "react";

function TodoForm({ onAdd }) {

    const [text, setText] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    let handleChange = (value) => {
        setText(value);
        if (value.length > 54) {
            console.info('mtav')
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
                <label>
                    Task
                    <input placeholder="Write here" className="input" type="text" value={text} onChange={(e) => {
                        handleChange(e.target.value);
                    }} />
                </label>



                <button className="add">Add</button>

            </form>
            <div>
                {errorMessage && <p>Task content can contain max 54 characters</p>}
            </div>
        </>
    )
}

export default TodoForm;

