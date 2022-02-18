import React from "react";
import "./Task.css"

function Task(props) {
    return (
        <li className="Task">
            <span className="Check">Check ✔</span>
            <p>{props.text}</p>
            <span className="Delete">Delete ✖</span>
            
        </li>
    );
}

export {Task};