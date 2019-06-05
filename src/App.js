import React from 'react';

import ToDoForm from './components/TodoComponents/TodoForm.js';
import ToDoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: ["example1","example2"],
      todo: ""
    };
  }

changeHandler = event => {
  this.setState({ [event.target.name]: event.target.value});
};

submitHandler = event => {
  event.preventDefault();
  const newTodo = this.state.todo;

}

  render() {
    return (
      <div>
        <h2>React Todo List App</h2>
        <ToDoList todos={this.state.todos} />
        <ToDoForm todo={this.state.todo} onChange={this.changeHandler} onSubmit={this.submitHandler}/>
      </div>
    );
  }
}

export default App;
