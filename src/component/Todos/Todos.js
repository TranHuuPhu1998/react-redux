import React from 'react';
import TodosList from "../TodosList/TodosList"
import './Todos.css'

function Todos() {
  return (
      <>
    <div className="todos">
       
            <span className="texttodos">todos</span> <br />
            <span className="clicktodos">Click to edit a todos</span>
        
    </div>
    <TodosList />
    </>
  );
}

export default Todos;
