import './TodoItem.css';
import {AiOutlineClose} from "react-icons/ai";
import Modal from '../modal';
import { useState } from 'react';
function TodoItem({todo, onChange, openModal}){
  
   return(
       <>
       
       <div className='check'>
           
           <div className='action'> 
               <input  className='checkbox' type="checkbox" checked ={todo.isCompleted} onChange={(e)=>{
                  onChange({
                      ...todo,
                      isCompleted: e.target.checked
                  })
               }} />
                <span style={todo.isCompleted ? {color:'gray'} : {color: 'black'}}>{todo.text}</span>
           </div>
               <div className = "svg"  id="modal" onClick={openModal}><AiOutlineClose/></div>
       </div>
       </>
   )
}

export default TodoItem;




