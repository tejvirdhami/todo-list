import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos = [
  {
    text:'Walk the dog',
  complete: false
  },
  {
    text:'Finish homework',
    complete: true
  }
];

function App() {
  return (
    <ul>
  <TodoListItem text={todos[0].text} complete={todos[0].complete} />
   <TodoListItem text={todos[1].text} complete={todos[1].complete} />
   </ul>
)};

export default App;