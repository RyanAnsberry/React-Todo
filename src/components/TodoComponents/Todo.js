import React from 'react';

function ToDo(props) {
    const clickHandler = () => {
        props.toggleTask(props.id);
      };
    return (
        <div 
        className={`task${props.completed ? "-completed" : ""}`}
        onClick={clickHandler}
        >
            {props.task}
        </div>
    );
}

export default ToDo;