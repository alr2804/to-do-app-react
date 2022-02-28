import './App.css';
import React from 'react';
import { ToDoCounter } from '../ToDoCounter/index.js';
import { ToDoSearch } from '../ToDoSearch/index.js';
import { TaskList } from '../TaskList/index.js';
import { Task } from '../Task/index.js';
import { AddButton } from '../AddButton/index.js';

const allTasks = [
  {text: "Crear app", completed: true},
  {text: "Crear 1", completed: false},
  {text: "Crear 2", completed: true},
  {text: "Tarea 3", completed: false},
  {text: "Tareas", completed: false},
  
]


function App(props) {

  //States
  const [tasks, setTasks] = React.useState(allTasks);
  const [searchValue, setSearchValue] = React.useState("");

  //Variables
  const completedTasks = tasks.filter( task => task.completed ).length;
  const totalTasks = tasks.length;
  let searchedTasks = [];


  //Filter
  if (!searchValue.length >=1 ){
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter( task => {
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchText);
    })
  }

  //Toggle tasks
  const toggleTasks = (text) => {

    const taskIndex = tasks.findIndex( task => task.text === text);
    const newTasks = [...tasks];

    if (!newTasks[taskIndex].completed) {
      newTasks[taskIndex].completed = true;

    }else {
      newTasks[taskIndex].completed = false;
    }

    setTasks(newTasks);

  };

  //Delete task 
  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex( task => task.text === text);
    const newTasks = [...tasks];

    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };



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
          completed={task.completed}
          onToggle = { ()=>{ toggleTasks(task.text)}}
          onDelete = { ()=>{ deleteTask(task.text)}}
          ></Task>
        ))}
      </TaskList>
      <AddButton/>
      
    </React.Fragment>
  );
}

export default App;
