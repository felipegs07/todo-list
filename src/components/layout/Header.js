import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
        <div className="header">
            <h1 className="header__title">focus app</h1>
            <h2 className="header__subtitle">your focus now is...</h2>
        </div>
        )
    }
}

export default Header;