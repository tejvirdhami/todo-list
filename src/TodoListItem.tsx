import React from 'react';

interface TodoListItem {
  todo: Todo
  toggleTodo: (selectedTodo : Todo) => void
}

export const TodoListItem = ({todo, toggleTodo} : TodoListItem) => {
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
    </label>
  </li>
);
};