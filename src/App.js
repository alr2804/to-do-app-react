import './App.css';
import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { TaskList } from './TaskList';
import { Task } from './Task';
import { AddButton } from './AddButton';

const allTasks = [
  {text: "Crear app", completed: true},
  {text: "Crear 1", completed: false},
  {text: "Crear 2", completed: true},
  {text: "Tarea 3", completed: false},
  {text: "Tareas", completed: false},
  
]


function App(props) {

  //States
  const [tasks, setTasks] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");

  //Variables
  const completedTasks = allTasks.filter( task => task.completed ).length;
  const totalTasks = allTasks.length;
  let searchedTasks = [];


  //Filter
  if (!searchValue.length >=1 ){
    searchedTasks = allTasks;
  } else {
    searchedTasks = allTasks.filter( task => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchText);
    })
  }


  return (
    <React.Fragment>
      <ToDoCounter
        completed={completedTasks}
        total={totalTasks}      
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}      
      />
      
      <TaskList>
        {searchedTasks.map( task => (
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
