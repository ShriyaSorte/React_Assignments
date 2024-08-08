import React from 'react';

function TodoInput({ value, onChange, onAddTodo }) {
  return (
    <div className="flex items-center mb-5">
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Enter a todo"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="btn btn-primary ml-3" onClick={onAddTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
