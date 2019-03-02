import React, { Component } from 'react';

class Java extends Component{


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">crash_code.java</h1>
                <div className="container">
                    <div className="info">
                        Info
                    </div>
                    <div className="console">
                        <textarea className="inputBox">
                            Type Code Here...
                        </textarea>
                    </div>
                    <div  className="output">
                            <textarea readOnly className="outputBox">

                            </textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default Java;