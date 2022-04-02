import './TodoItem.css';
import {AiOutlineClose} from "react-icons/ai";
function TodoItem({todo, onChange, onDelete}){
   
  
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
                {todo.text}
               <i className = "svg" onClick={()=>{
                   onDelete(todo);
               }}><AiOutlineClose/></i>
           </label>
       </div>
       </>
   )
}

export default TodoItem;




