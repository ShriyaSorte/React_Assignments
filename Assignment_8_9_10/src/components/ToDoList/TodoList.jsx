import React from 'react';

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className="list-disc list-inside">
      {todos.map((todo, index) => (
        <li key={index} className="flex justify-between items-center mb-2">
          <span>{todo}</span>
          <button className="btn btn-error btn-xs" onClick={() => onDeleteTodo(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
