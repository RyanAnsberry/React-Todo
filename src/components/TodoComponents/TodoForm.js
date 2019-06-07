import React from 'react';

function ToDoForm(props) {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <input type="text" name="todo" placeholder="...todo" value={props.todo} onChange={props.changeHandler}/>
                <button type="submit">Add Todo</button>
                <button type="button" onClick={props.clickHandler}>Clear Completed</button>
            </form>
        </div>
    );
}

export default ToDoForm;