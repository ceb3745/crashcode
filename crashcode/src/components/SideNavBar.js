import React, { Component } from 'react';

class SideNavBar extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="sideNav">
                <div onMouseOver={(e) => this.props.hoverJS (e)} onClick={(e) => this.props.javascript(e)}  className="sideNavLink"> JavaScript </div>
                <div onMouseOver={(e) => this.props.hoverJva(e)} onClick={(e) => this.props.java(e)}  className="sideNavLink"> Java </div>
                <div onMouseOver={(e) => this.props.hoverPy(e)} onClick={(e) => this.props.python(e)}  className="sideNavLink"> Python </div>
            </div>
        );
    }
}

export default SideNavBar;