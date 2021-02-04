import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    itemStyle = () => {
        return {
            margin: '10px',
            fontSize: (this.props.activeToDo === this.props.todo.id) ? '4rem' : '2.2rem',
            fontWeight: '700',
            borderRadius: '5px',
            textDecoration: (this.props.todo.completed) ? 'line-through' : 'none',
        }
    }
    

    render(){
        const { id, title, completed } = this.props.todo; 
        const { activeToDo } = this.props;
        
        return (
            <>
                {
                    activeToDo === null || activeToDo === id ? (
                        <div className="todoItem" style={this.itemStyle()}>
                            <input type="checkbox" 
                                onChange={this.props.inputChangeHandler.bind(this,id)}
                                checked={completed}
                            />
                            <p onClick={() => this.props.selectFocusToDo(id)}>{title}</p>
                            <button onClick={this.props.deleteTodoHandler.bind(this,id)} style={buttonDeleteStyle}>delete</button>
                        </div>
                    ) : null
                }
            </>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const buttonDeleteStyle = {
    color: 'darkred',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.4rem',
    backgroundColor: 'transparent',
}

export default TodoItem;