import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

const allTasks = [
  {text: "Crear app", completed: true},
  {text: "Crear 1", completed: false},
  {text: "Crear 2", completed: true},
  {text: "Tarea 3", completed: false},
  {text: "Tareas", completed: false},
  
]


function App() {

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
    <AppUI
      completedTasks={completedTasks}
      totalTasks={totalTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      toggleTasks={toggleTasks}
      deleteTask={deleteTask}
      searchedTasks={searchedTasks}


    />
  );
}

export default App;
