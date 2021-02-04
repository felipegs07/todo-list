import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChangeHander = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }   

    render(){
        return (
            <form onSubmit={this.onSubmitHandler} style={{display: 'flex', height: '3.5rem', margin: '2rem 0'}}>
                <input
                type="text"
                name="title"
                style={{flex:'10'}}
                placeholder="Add todo..." 
                value={this.state.title} 
                onChange={this.onChangeHander}
                className="input"
                />
                <input type="submit" 
                value="Add"
                className="btn"
                style={{flex:'2'}} />

            </form>
        )
    }
}

export default AddTodo;