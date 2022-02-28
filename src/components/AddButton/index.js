import React from "react";
import "./AddButton.css"

function AddButton() {

    const onClickButton = (msg) => {
            console.log(msg);
    };

    return(
        <button
        className="AddButton"
        onClick={ () => {onClickButton("text")}}
        >
            +
        </button>
    );
}

export {AddButton};