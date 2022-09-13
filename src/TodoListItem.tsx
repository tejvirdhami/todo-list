import React from 'react';

interface TodoListItem {
  todo: Todo
  toggleTodo: (selectedTodo : Todo) => void
  handleRemove: (selectedItem: Todo)=> void;
}

export const TodoListItem = ({todo, toggleTodo, handleRemove} : TodoListItem) => {
  return ( 
    <li>
    <label
      style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
    >
      <input
        type="checkbox"
        checked={todo.complete}
        onClick={() => {
          toggleTodo(todo);
        }}
      />{' '}
      {todo.text}
      <button type="button" onClick={() => handleRemove(todo)}>
            Remove
          </button>
    </label>
  </li>
);
};