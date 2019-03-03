import React, { Component } from 'react';

class Variables extends Component{
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

        paiza_io('java', text, '', this.callBack);

    }

    callBack(error, result){
        if (error) throw error;
        console.log('python result:');
        console.log(result.stdout); //=> Hello, Python World!
        this.setState({
            errormsg: result.stdout
        });

        if(result.stdout === ''){
            this.setState({
                errormsg: "Invalid Code: Please Try Again"
            })
        }

    }

    returnMessage(){
        if(this.state.errormsg === ''){
            return("");
        }else{
            return(this.state.errormsg)
        }
    }
    addText(){
        return(
            "// Practice here! \n \n \n" +
            "public class Main { \n" +
            "   public static void main(String[] args){ \n" +
            "   // declare an int variable called 'number' \n \n \n" +
            "   // set int variable to 5 \n \n \n " + 
            "   // print number \n \n \n" + 
            "   // change value of 'number' to 15 \n \n \n" +
            "   // print number \n \n \n" + 
            "   // declare a String variable called hello\n \n \n" +
            "   // set value of hello to 'Hello World'\n \n \n" +
            "   // print hello\n \n \n" +
            "   // declare a boolean called 'flag'\n \n \n" +
            "   // set value of flag to true\n \n \n" + 
            "   // print flag\n \n " +
            "   } \n}"

        )
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">variables.java</h1>
                <div className="container">
                    <div className="info">
                        <p>Basic variable types in Java include <span className="keywordV">integers (int)</span>, 
                            <span className="keywordV">strings (String)</span>, <span className="keywordV">doubles (double)</span>, <span className="keywordV">floats (float)</span>, <span className="keywordV">chars (char)</span>, and <span className="keywordV">booleans (boolean)</span>. 
                            An int is an integer (a whole number that can be positive or negative), a string is a set of characters (i.e ‘abc’) 
                            that is surrounded by double quotation marks, floats are a type of decimal, chars are individual characters (i.e ‘c’), 
                            and booleans can either be true or false.</p>
                        <p>Each variable must be <span className="keywordV">declared</span> with its type and name before it can be used, such as ‘String string’. To assign it to a 
                            value simply add an <span className="keywordV">equals sign (‘=‘)</span> after the name and then the value you’d like to set the variable to.</p>
                        <p>Ex: </p>
                        <p className="code">String string = “hello!”;</p>
                    </div>
                    <div className="console">
                        <textarea id="consoleBox" onKeyDown={e => this.addTab(e)} className="inputBox">
                            {this.addText()}
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

export default Variables;