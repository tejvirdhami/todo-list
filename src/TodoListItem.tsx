import React from 'react';

interface TodoListItem {
    text: string
    complete: boolean
}

export const TodoListItem = ({text, complete} : TodoListItem) => {
  return ( <li>
  <label
    style={{ textDecoration: complete ? 'line-through' : undefined }}
  >
    <input type="checkbox" checked={complete} /> {text}
  </label>
</li> );
};