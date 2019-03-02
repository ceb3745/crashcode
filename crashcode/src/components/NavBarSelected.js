import React, { Component } from 'react';

class NavBarSelected extends Component {
    constructor(props) {
        super(props);

        this.getLangExtension = this.getLangExtension.bind(this);
    }


    getLangExtension(){
        if(this.props.language === 'python'){
            return '.py';
        }
        if(this.props.language === 'java'){
            return '.java';
        }
        if(this.props.language === 'javascript'){
            return '.js';
        }
    }

    render() {
        return(
            <div className="navBarSelected">
                <div className="titleName">crash_code{this.getLangExtension()}</div>
                <div onClick={(e) => this.props.home(e)} className="navLink">Home</div>
                <div onClick={(e) => this.props.glossary(e)} className="navLink">Glossary</div>
                <div onClick={(e) => this.props.about(e)} className="navLink">About</div>
            </div>
        );
    }
}

export default NavBarSelected;