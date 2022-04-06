import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm/TodoForm';
import Hide from './hide/Hide';

function App() {
 const[hideIsComplited,setHideIsComplited]=useState(false)
 
  const [todos, setTodos] = useState([
    
    // {
    //   id:Math.random(),
    //   text:"Learn Js",
    //   isCompleted:false
    // },
    // {
    //   id:Math.random(),
    //   text:"Learn CSS",
    //   isCompleted:false
    // }
  ]);

  return (
    <>
    <div className="App">
    
    <Hide hideIsComplited={hideIsComplited} setHideIsComplited={setHideIsComplited}/>
    
      <TodoForm onAdd={(text)=>{
         setTodos([
            
           {
             id:Math.random(),
             text:text,
             isCompleted:false
             
           },
           ...todos
         ])
      }}/>
      <TodoList 
      todos={todos} 
      hideIsComplited={hideIsComplited}
      onDelete ={(id)=>{
        console.log(id);
      
         setTodos(todos.filter((t)=> t.id !== id));
      }}
      onChange={(newTodo)=>{
        setTodos(todos.map((todo)=>{
          if(todo.id === newTodo.id){
            return newTodo;
          }
          return todo;
        }));
      }}
      />
      
   
    </div>
    </>
  );
}

export default App;


     
