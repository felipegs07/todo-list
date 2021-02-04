import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Buttons from './components/Controls';

class App extends Component {
  state = { 
    todos : [],
    activeToDo: null
  }
  
  componentDidMount() {
    this.loadHandler();
  }

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

    const state = {
      todos: todosUpdated,
      activeToDo: this.state.activeToDo
    }
    this.saveHandler(state);
  }

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    }
    const todos = [...this.state.todos, newTodo];

    this.setState({todos: todos});
    const state = {
      todos,
      activeToDo: this.state.activeToDo
    }
    this.saveHandler(state);
  }

  saveHandler = (newState) => {
    const stateJson = JSON.stringify(newState);
    localStorage.setItem("focus-app", stateJson);
  }

  loadHandler = () => {
    const stateJson = localStorage.getItem("focus-app");
    if (stateJson) {
      const state = JSON.parse(stateJson);
      
      this.setState({ ...state });
    } else {
      alert('Não existe dados do storage para carregar.')
    }
  }

  selectFocusToDo = (id) => {
    if (this.state.activeToDo === id) {
      this.setState({
        activeToDo: null
      });
    } else {
      this.setState({
        activeToDo: id
      });
    }
  };

  clearAll = () => {
    const state = {
      todos : [],
      activeToDo: null
    };

    this.setState(state);
    this.saveHandler(state);
  };

  clearCompleted = () => {
    const todos = [...this.state.todos];
    const todosNotCompleted = todos.filter(todo => todo.completed !== true);
    const state = {
      todos : todosNotCompleted,
      activeToDo: null
    };

    this.setState(state);
    this.saveHandler(state);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Todos 
          todos={this.state.todos} 
          inputChangeHandler={this.inputChangeHandler} 
          deleteTodoHandler={this.deleteTodoHandler}
          activeToDo={this.state.activeToDo}
          selectFocusToDo={this.selectFocusToDo}
        />
        {
          this.state.activeToDo === null ? (
            <>
              <AddTodo addTodo={this.addTodo} />
              <Buttons 
                saveHandler={() => this.saveHandler(this.state)}
                loadHandler={this.loadHandler}
                clearAll={this.clearAll}
                clearCompleted={this.clearCompleted}
              />
            </>
          ) : null
        }
      </div>
    );
  }
}

export default App;
