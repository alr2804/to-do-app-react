import React from "react";
import "./Task.css"

function Task(props) {

    


    return (
        <li className="Task">
            <span 
            className={`Check Icon ${props.completed && 'Check--active'}`}
            onClick={props.onToggle}
            > ✔ </span>

            <p className={`${props.completed && "Task--completed"}`}>{props.text}</p>


            <span 
            className="Delete Icon"
            onClick={props.onDelete}
            > ✖ </span>
            
        </li>   
    );
}

export {Task};