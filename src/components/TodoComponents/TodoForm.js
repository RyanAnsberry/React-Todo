import React from 'react';

function ToDoForm(props) {
    return (
        <div>
            <form>
                <input type="text" name="todo" placeholder="...todo" value={props.todo} onChange={props.onChange}/>
                <button type="submit" onSubmit={props.submitHandler}>Add Todo</button>
                <button type="button" onClick={props.clickHandler}>Clear Completed</button>
            </form>
        </div>
    );
}

export default ToDoForm;