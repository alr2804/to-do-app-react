import React from "react";
import "./TaskList.css"

function TaskList(props) {
    return(
        <div className="TaskList">
            <ul>
                {props.children}
            </ul>
        </div>
    );
}
export {TaskList};