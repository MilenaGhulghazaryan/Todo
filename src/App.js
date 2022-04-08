import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm/TodoForm';
import Hide from './hide/Hide';

function App() {
  const [hideIsComplited, setHideIsComplited] = useState(false)

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

  useEffect(() => {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));

    }
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  return (
    <>
      <div className="App">

        <Hide hideIsComplited={hideIsComplited} setHideIsComplited={setHideIsComplited} />
        
        <TodoForm onAdd={(text) => {
          var array = [

            {
              id: Math.random(),
              text: text,
              isCompleted: false

            },
            ...todos
          ]

          localStorage.setItem("todos", JSON.stringify(array));


          setTodos(array);
        }} />
        {todos.length === 0 ? <h3 className='h2'>So start by adding your tasks here</h3>  : 
        <TodoList
          todos={todos}
          hideIsComplited={hideIsComplited}
          onDelete={(id) => {

            const items = JSON.parse(localStorage.getItem("todos"));
            const filtered = items.filter(item => item.id !== id);
            localStorage.setItem("todos", JSON.stringify(filtered));

            setTodos(filtered);
          }}
          onChange={(newTodo) => {
            setTodos(todos.map((todo) => {
              if (todo.id === newTodo.id) {
                return newTodo;
              }
              return todo;
            }));
          }}
        /> 

        }
      </div>
    </>
  );
}

export default App;



