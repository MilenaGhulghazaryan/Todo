import { useCallback, useState } from "react";
import Modal from "./modal";
import TodoItem from "./TodoItem/TodoItem";

function TodoList({todos, onDelete, onChange,submit}){
    let [showModal,setShowModal]=useState(false)
   let[openedId,setOpenedId]=useState()

   let handleModal = (id) => {
console.info(id)
    setShowModal(!showModal)
    setOpenedId(id)
}
    return(
        <div>
            {
                todos.map((todo)=>{
                   return(
                      <TodoItem 
                      key={todo.id} 
                      todo={todo}
                      onChange={onChange}
                     openModal={() => handleModal(todo.id)}
                      />
                   )
                })
            }
             {showModal && <Modal onDelete={onDelete} closeModal={(id) => handleModal(id)} objId={openedId} />}
        </div>
    )
}

export default TodoList;

  