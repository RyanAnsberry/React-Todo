import React from 'react';

import ToDoForm from './components/TodoComponents/TodoForm.js';
import ToDoList from './components/TodoComponents/TodoList.js';

import './components/TodoComponents/Todo.css'
import { whileStatement } from '@babel/types';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  clickHandler = event => {
    const filteredList = this.state.todos.filter( todo => {
      return todo.completed === false; 
    });
    this.setState(
      {todos: filteredList}
    )
  };

  submitHandler = event => {
    event.preventDefault();
    this.addItem(this.state.todo);
    this.setState({ todo: "" });
  };

  addItem = newTask => {
    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTodo = id => {
    const newList = this.state.todos.map(todo => {
      if (todo.id === id) {
        const newObj = {
          ...todo,
          completed: !todo.completed
        };
        return newObj;
      } else {
        return todo;
      }
    });

    this.setState({ todos: newList });
  };

  render() {
    return (
      <div>
        <h2>React Todo List App</h2>
        <ToDoList 
          todos={this.state.todos} 
          toggleTask={this.toggleTodo}
        />
        <ToDoForm
          todo={this.state.todo} 
          changeHandler={this.changeHandler} 
          submitHandler={this.submitHandler} 
          clickHandler={this.clickHandler} 
        />
      </div>
    );
  }
}

export default App;
