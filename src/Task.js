import React from "react";
import "./Task.css"

function Task(props) {

    const onComplete = () => {
        console.log("Task completed:" + props.text);
    };

    const onDelete = () => {
        console.log("Task deleted:" + props.text);
    };



    return (
        <li className="Task ">
            <span 
            className={`Check Icon ${props.completed && 'Check--active'}`}
            onClick={onComplete}
            > ✔ </span>

            <p className={`${props.completed && "Task--completed"}`}>{props.text}</p>


            <span 
            className="Delete Icon"
            onClick={onDelete}
            > ✖ </span>
            
        </li>   
    );
}

export {Task};