import React from "react";
import "./ToDoSearch.css"

function ToDoSearch({searchValue, setSearchValue}) {

    
    const onSearchValueChange = (event) => {
        console.log( event.target.value);
        setSearchValue(event.target.value);

    };


    return[
        <input 
        className="ToDoSearch" 
        placeholder='Find your task'
        value={searchValue}
        onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}

export { ToDoSearch};