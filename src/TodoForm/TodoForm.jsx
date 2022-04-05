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
import  './TodoForm.css';

function TodoForm({onAdd}){

   const [text,setText] = useState("");
  
   
   return(
       <form onSubmit={(e) =>{
           e.preventDefault(); 
           onAdd(text);
           setText("");
       }}>
           
           <input placeholder="Write here" className = "input" type = "text"  value={text}   maxlength="5"  onChange={(e) => {
              setText(e.target.value);
           }}/>
           
           <button className="add">Add</button>
         
       </form>
   )
}

export default TodoForm;

