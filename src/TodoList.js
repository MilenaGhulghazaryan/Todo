/*import Modal from "./modal";
import TodoItem from "./TodoItem/TodoItem";

function TodoList({todos, onDelete, onChange,submit}){
    return(
        <div>
            {
                todos.map((todo)=>{
                   return(
                      <TodoItem 
                      key={todo.id} 
                      todo={todo}
                      onChange={onChange}
                      onDelete={onDelete}
                     
                      />
                   )
                })
            }
        </div>
    )
}

export default TodoList;*/

import Modal from "./modal";
import TodoItem from "./TodoItem/TodoItem";

function TodoList({todos, onDelete, onChange,submit}){
    return(
        <div>
            {
                todos.map((todo)=>{
                   return(
                      <TodoItem 
                      key={todo.id} 
                      todo={todo}
                      onChange={onChange}
                      onDelete={onDelete}
                     
                      />
                   )
                })
            }
        </div>
    )
}

export default TodoList;