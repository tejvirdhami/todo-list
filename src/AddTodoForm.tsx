import React, { useState } from 'react';
import { text } from 'stream/consumers';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm = ({ addTodo } : Props) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};