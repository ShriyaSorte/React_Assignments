import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-5 text-center">Todo List</h1>
      <TodoInput value={inputValue} onChange={setInputValue} onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default TodoApp;
