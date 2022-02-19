import './App.css';
import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { TaskList } from './TaskList';
import { Task } from './Task';
import { AddButton } from './AddButton';

const tasks = [
  {text: "Crear app", completed: true},
  {text: "Crear 1", completed: false},
  {text: "Crear 2", completed: true},
  {text: "Tarea 3", completed: false},
  {text: "Tareas", completed: false},
  
]


function App(props) {
  return (
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      
      <TaskList>
        {tasks.map( task => (
          <Task 
          key={task.text}
          text={task.text}
          completed={task.completed}></Task>
        ))}
      </TaskList>
      <AddButton/>
      
    </React.Fragment>
  );
}

export default App;
