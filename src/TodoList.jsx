import { useCallback, useState } from "react";
import Modal from "./modal";
import TodoItem from "./TodoItem/TodoItem";

function TodoList({ todos, onDelete, onChange, submit, hideIsComplited }) {
    let [showModal, setShowModal] = useState(false)
    let [openedId, setOpenedId] = useState()
    
    let handleModal = (id) => {
        setShowModal(!showModal)
        setOpenedId(id)
    }
    let hh 
    if (hideIsComplited) {
        hh = todos.filter(todo => {
            return !todo.isCompleted
           
        })
    }else{
       hh = todos
    }
    console.log(hideIsComplited)
    return (
        <div>
            {
                hh.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onChange={onChange}
                            openModal={() => handleModal(todo.id)}
           
                        />
                    )
                })
            }
            {showModal && <Modal onDelete={onDelete} closeModal={() => handleModal()} objId={openedId} />}
        
        </div>
    )
}

export default TodoList;

