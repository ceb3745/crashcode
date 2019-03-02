import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return(
            <div className="navBar">
                <div onClick={(e) => this.props.home(e)} className="navLink">Home</div>
                <div onClick={(e) => this.props.glossary(e)} className="navLink">Glossary</div>
                <div onClick={(e) => this.props.about(e)} className="navLink">About</div>
            </div>
        );
    }
}

export default NavBar;