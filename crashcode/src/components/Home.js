import React, { Component } from 'react';

class Home extends Component{

    constructor() {
        super();
    }

    render(){
        return(
            <div className="homePage">
                <div className="title">
                <h1 className="welcome"> Welcome to crash_code. </h1>
                </div>
                <h2>Today I'm learning:</h2><h2>{this.props.language}</h2>
            </div>
        );
    }
}

export default Home;
