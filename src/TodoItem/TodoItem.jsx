import './TodoItem.css';
import {AiOutlineClose} from "react-icons/ai";
import Modal from '../modal';
import { useState } from 'react';
function TodoItem({todo, onChange, openModal}){
  
   return(
       <>
       
       <div className='check'>
           
           <label className='action'> 
               <input  className='checkbox' type="checkbox" checked ={todo.isCompleted} onChange={(e)=>{
                  onChange({
                      ...todo,
                      isCompleted: e.target.checked
                  })
               }} />
           </label>
           {todo.text}
               <i className = "svg"  id="modal" onClick={openModal}><AiOutlineClose/></i>
       </div>
       </>
   )
}

export default TodoItem;




