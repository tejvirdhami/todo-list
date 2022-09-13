import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';
import { TodoListItem } from './TodoListItem';

const initialTodos: Todo[] = [
  {
    text:'Walk the dog',
  complete: false
  },
  {
    text:'Finish homework',
    complete: true
  },
  {
    text:'Workshop',
    complete: false
  },
  {
    text:'Grocery',
    complete: false
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo : AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };
  
    return (
      <form>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <AddTodoForm addTodo={addTodo}/>
    </form>
    );

}

export default App;