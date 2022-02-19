import React from "react";
import "./Task.css"

function Task(props) {
    return (
        <li className="Task ">
            <span className={`Check Icon ${props.completed && 'Check--active'}`}  > ✔ </span>
            <p className={`${props.completed && "Task--completed"}`}>{props.text}</p>
            <span className="Delete Icon"> ✖ </span>
            
        </li>
    );
}

export {Task};