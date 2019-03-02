import React, { Component } from 'react';

class SideNavBar extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="sideNav">
                <div onClick={(e) => this.props.javascript(e)}  className="sideNavLink"> JavaScript </div>
                <div onClick={(e) => this.props.java(e)}  className="sideNavLink"> Java </div>
                <div onClick={(e) => this.props.python(e)}  className="sideNavLink"> Python </div>
            </div>
        );
    }
}

export default SideNavBar;