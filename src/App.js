import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm/TodoForm';
import Hide from './hide/Hide';

function App() {
 
  const [todos, setTodos] = useState([
    {
      id:Math.random(),
      text:"Learn Js",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Learn CSS",
      isCompleted:false
    }
  ]);
  return (
    <>
    
    <div className="App">
      <TodoForm onAdd={(text)=>{
         setTodos([
           ...todos,
           {
             id:Math.random(),
             text:text,
             isCompleted:false
           }
         ])
      }}/>
      <TodoList 
      todos={todos}
      onDelete ={(id)=>{
        console.info(id)
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
      <Hide todos={todos} onClearCompleted={()=>{
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }}/>
    </div>
    </>
  );
}

export default App;


     
