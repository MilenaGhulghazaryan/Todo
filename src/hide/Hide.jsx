import './hide.css';
function Hide({todos, onClearCompleted}){
    const completedSize = todos.filter((todo)=>todo.isCompleted.length);
  
   return (
       <>
        <span className="task">Task</span>
      
          <input style={{color:"red"}}   className='box' type="checkbox" onClick={onClearCompleted}/>
          <span className='hh'>Hide completed</span>
       
       </>
   )
}

export default Hide;