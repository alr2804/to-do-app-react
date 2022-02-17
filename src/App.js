import './App.css';
import React from 'react';
import { ToDoCounter } from './Counter';
import { ToDoSearch } from './ToDoSearch';
import { TaskList } from './TaskList';
import { Task } from './Task';
import { AddButton } from './AddButton';

const tasks = [
  {text: "Crear app", completed: false},
  {text: "Crear 1", completed: false},
  {text: "Crear 2", completed: false},
  
]


function App(props) {
  return (
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      
      <TaskList>
        {tasks.map( task => (
          <Task key={task.text} text={task.text}></Task>
        ))}
      </TaskList>
      <AddButton/>
      
    </React.Fragment>
  );
}

export default App;
