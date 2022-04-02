import './hide.css';
function Hide({todos, onClearCompleted}){
    const completedSize = todos.filter((todo)=>todo.isCompleted.length);
  
   return (
       <>
        
       <div>
          <span className="task">Task</span>
          <span className='hh'>Hide completed</span>
          <input className='box' type="checkbox" onClick={onClearCompleted}/>
       </div>
       </>
   )
}

export default Hide;