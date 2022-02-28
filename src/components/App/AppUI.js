import React from "react";
import { ToDoCounter } from '../ToDoCounter/index.js';
import { ToDoSearch } from '../ToDoSearch/index.js';
import { TaskList } from '../TaskList/index.js';
import { Task } from '../Task/index.js';
import { AddButton } from '../AddButton/index.js';

function AppUI({
    completedTasks,
    totalTasks,
    searchValue,
    setSearchValue,
    searchedTasks,
    toggleTasks,
    deleteTask,
}) {
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

export {AppUI};