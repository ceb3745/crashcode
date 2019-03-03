import React, { Component } from 'react';

class Javascript extends Component{

    constructor(props) {
        super(props);
        this.state = {
            errormsg: ''
        }

        this.callBack = this.callBack.bind(this);
    }


    addTab(e){
        var o = document.getElementById("consoleBox");
        var kC = e.keyCode ? e.keyCode : e.charCode ? e.charCode : e.which;
        if (kC === 9 && !e.shiftKey && !e.ctrlKey && !e.altKey)
        {
            var oS = o.scrollTop;
            if (o.setSelectionRange)
            {
                var sS = o.selectionStart;
                var sE = o.selectionEnd;
                o.value = o.value.substring(0, sS) + "\t" + o.value.substr(sE);
                o.setSelectionRange(sS + 1, sS + 1);
                o.focus();
            }
            else if (o.createTextRange)
            {
                document.selection.createRange().text = "\t";
                e.returnValue = false;
            }
            o.scrollTop = oS;
            if (e.preventDefault)
            {
                e.preventDefault();
            }
            return false;
        }
        return true;
    }

    compileText(){
        console.log("button clicked");
        var text = document.getElementById("consoleBox").value;
        let paiza_io = require('paiza-io');

        paiza_io('python', text, '', this.callBack);

    }

    callBack(error, result){
        if (error) throw error;
        console.log('python result:');
        console.log(result.stdout); //=> Hello, Python World!
        this.setState({
            errormsg: result.stdout
        });

        console.log(this.state.errormsg);
    }

    returnMessage(){
        if(this.state.errormsg === ''){
            return("Invalid Code: Please Try Again")
        }else{
            return(this.state.errormsg)
        }
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">crash_code.js</h1>
                <div className="container">
                    <div className="info">
                        <h2>General Info</h2>
                        <p>Although it's not necessary, it is good coding practice to include semicolons (‘;’) after each executable line</p>
                        <p>For large blocks of code, use curly braces</p>
                        <p>To print to the console, use console.log()</p>
                        <p>Javascript also doesn't use data types</p>
                    </div>
                    <div className="console">
                        <textarea id="consoleBox" onKeyDown={e => this.addTab(e)} className="inputBox">
                            This is where you'll practice!
                        </textarea>
                        <button className="compileButton" onClick={e => this.compileText(e)}>Compile</button>
                    </div>
                    <div  className="output">
                        {this.returnMessage()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Javascript;