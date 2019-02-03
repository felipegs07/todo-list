import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = { todos : [] }

  inputChangeHandler = (id) => {
    const todoIndex = this.state.todos.findIndex(t => {
      return t.id === id;
    });

    const todo = {
      ...this.state.todos[todoIndex]
    }

    todo.completed = !todo.completed;

    const todos = [...this.state.todos];

    todos[todoIndex] = todo;

    this.setState({
      todos: todos
    });

  }

  deleteTodoHandler = (id) => {
    const todos = [...this.state.todos];
    const todosUpdated = todos.filter(todo => todo.id !== id);
    
    this.setState({
      todos: todosUpdated
    });

  }

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    const todos = [...this.state.todos, newTodo];

    this.setState({todos: todos});
  }

  saveHandler = () => {
    const stateJson = JSON.stringify(this.state.todos);
    localStorage.setItem("todolist", stateJson);
  }

  loadHandler = () => {
    const stateJson = localStorage.getItem("todolist");
    const todos = JSON.parse(stateJson);

    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <Header saveHandler={this.saveHandler} loadHandler={this.loadHandler} />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} 
        inputChangeHandler={this.inputChangeHandler} 
        deleteTodoHandler={this.deleteTodoHandler}/>
      </div>
    );
  }
}

export default App;
