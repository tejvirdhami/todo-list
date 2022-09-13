import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: (selectedItem: Todo)=> void;
  handleRemove: (selectedItem: Todo)=> void;
}
  
export const TodoList: React.FC<Props> = ({ todos, toggleTodo, handleRemove }) => {
  return (
    
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} handleRemove={handleRemove}/>
      ))}
    </ul>
  );
};