import React from 'react';

import ToDo from './Todo.js'

function ToDoList(props) {
    return (
        <div>
            {props.todos.map((todo, index) => {
                return <ToDo task={todo} key={index} />
            })}
        </div>
    )
}

export default ToDoList;