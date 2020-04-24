import React from 'react';
import Todos from './component/Todos/Todos';
import TososList from './component/TodosList/TodosList';

function App() {
  return (
    <div className="App">
      <Todos></Todos>
      <TososList></TososList>
    </div>
  );
}

export default App;
