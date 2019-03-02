import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <div className="contentPage">
                <div className="title">
                    <h1> This is the about. </h1>
                    <h2> Resources: </h2>
                    <ul>
                    <li>Paiza API </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
