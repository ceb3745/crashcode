import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <div className="contentPage">
                    <h3>About Us</h3>
                    <div id="glossTerms">
                        <div className="about1">
                        <p>
                            The web app for beginners at coding! Learn the basics of Java, Python, and JavaScript through our interactive and instructive site.
                            crashcode targets girls who may find coding daunting and makes it fun and simple to learn in three common programming languages.
                            Studies have shown that women who do not feel prepared for a task will be dissuaded from doing it.
                             crashcode's goal is to help people feel more prepared and confident in coding.
                        </p>
                        <p>&#35;GIRLSWHOCODE</p>
                        </div>
                        <div className="about2">
                        <h5> Resources:</h5>
                            <p>
                        <ul>
                        <li>Paiza API </li>
                        <li>w3schools.com</li>
                        <li>css-tricks.com</li>
                        </ul>
                            </p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default About;
