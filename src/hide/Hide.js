function Hide({ onClearCompleted}){
    //const completedSize = todos.filter((todo)=>todo.isCompleted.length);
  
   return (
       <div>
           <span className="hide"> Hide</span>
           
               <input type="checkbox" onClick={onClearCompleted}/>
         
          
       </div>
   )
}

export default Hide;