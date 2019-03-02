import React, { Component } from 'react';

class Glossary extends Component{


    render(){
        return(
            <div className="contentPage">
                <div className="titleName">
                    <h3> Glossary </h3>
                </div>
                <div className="definitions">
                    <h2> Variable </h2>
                    <p> Used to store values. </p>
                    <p>Pro Tip: variable names should make sense to what they are holding </p>
                    <h2> Loops </h2>
                    <p> A sequence of instructions that are continuously repeated until a certain condition is reached </p>
                    <h2> Conditionals </h2>
                    <p> Performing actions based on certain states. This follows an if... then... format</p>
                    <h2> Operators </h2>
                    <p> The action to be done on values (numbers, booleans, etc.) or comparing values (equal to, not equal to, etc.) </p>
                    <h2> Methods </h2>
                    <p>A block of statements to be ran. </p>
                    <p> Pro Tip: Methods should only do one specific thing </p>
                </div>
                </div>
        );
    }
}

export default Glossary;