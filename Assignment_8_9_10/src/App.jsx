import React from 'react';
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter';
import TodoApp from './components/ToDoList/TodoApp';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div >
      <TemperatureConverter/>
      <TodoApp/>
      <ShoppingCart/>
    </div>
  );
}

export default App;
