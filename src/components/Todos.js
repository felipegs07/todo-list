import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render(){
        return (
            <section style={{marginBottom: '5rem'}}>
                {
                     this.props.todos.map((todo) => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            inputChangeHandler={this.props.inputChangeHandler}
                            deleteTodoHandler={this.props.deleteTodoHandler}
                            activeToDo={this.props.activeToDo}
                            selectFocusToDo={this.props.selectFocusToDo}
                        />
                    ))
                }
            </section>
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;