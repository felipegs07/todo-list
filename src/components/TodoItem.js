import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    itemStyle = () => {
        return {
            padding: '1rem 1.5rem',
            margin: '10px',
            fontSize: '1.6rem',
            borderRadius: '5px',
            border: (this.props.todo.completed) ? '2px solid green' : '1px solid rgba(0,0,0,0.5)',
            textDecoration: (this.props.todo.completed) ? 'line-through' : 'none',
        }
    }
    

    render(){
        const { id, title } = this.props.todo; 
        
        return (
            <div className="todoItem" style={this.itemStyle()}>
                <input type="checkbox" 
                onChange={this.props.inputChangeHandler.bind(this,id)} />
                <p>{title}</p>
                <button onClick={this.props.deleteTodoHandler.bind(this,id)} style={buttonDeleteStyle}>x</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const buttonDeleteStyle = {
    background: 'darkred',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    float: 'right',
    position: 'absolute',
    right: '1rem',
    top: '50%',
    fontSize: '1.5rem'


}

export default TodoItem;