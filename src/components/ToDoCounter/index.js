import React from "react";
import "./ToDoCounter.css"
function ToDoCounter({completed, total}) {
    return(
            <h2 className="ToDoCounter">You have completed {completed} out of {total} tasks.</h2>
    );  
}

export {ToDoCounter};