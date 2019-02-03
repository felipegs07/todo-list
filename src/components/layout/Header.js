import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
        <div className="header">
            <h1>Todo List</h1>
            <button onClick={this.props.saveHandler} style={btn}>Save</button><button onClick={this.props.loadHandler} style={btn}>Load</button>
        </div>
        )
    }
}

const btn = {
    backgroundColor: '#fff',
    borderRadius: '5px', 
    border: '1px solid #000',
    padding: '0.2rem 0.6rem',
    marginRight: '0.5rem',
    cursor: 'pointer'
}

export default Header;