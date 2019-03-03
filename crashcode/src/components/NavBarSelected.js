import React, { Component } from 'react';

class NavBarSelected extends Component {


    render() {
        return(
            <div className="navBarSelected">
                <div className="innerNavSelected">
                    <div onClick={(e) => this.props.variables(e)} className="navLink">Variables</div>
                    <div onClick={(e) => this.props.operators(e)} className="navLink">Operators</div>
                    <div onClick={(e) => this.props.conditionals(e)} className="navLink">Conditionals</div>
                    <div onClick={(e) => this.props.loops(e)} className="navLink">Loops</div>
                    <div onClick={(e) => this.props.methods(e)} className="navLink">Methods</div>
                </div>
                <div className="rightNavSelected">
                    <div onClick={(e) => this.props.home(e)} className="navLink">Home</div>
                    <div onClick={(e) => this.props.glossary(e)} className="navLink">Glossary</div>
                    <div onClick={(e) => this.props.about(e)} className="navLink">About</div>
                </div>

            </div>
        );
    }
}

export default NavBarSelected;