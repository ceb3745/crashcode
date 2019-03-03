import React, { Component } from 'react';

class Loops extends Component{
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

    addText() {
        return (
            " Practice Here! \n\n" +
            "// declare a for loop with an int called i starting at 0 and and incrementing until reaching 10 \n" +
            "// print each value\n\n\n" +
            "// do the same thing but with a while loop, and declare an int called 'x'\n// hint: don't forget to increment x"
        )
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">loops.java</h1>
                <div className="container">
                    <div className="info">
                        <p>If you want to do a process more than once, a <span className="keywordL">loop</span> is right for you! In Java, there are two common loops, a ‘for’ loop and a <span className="keywordL">while</span> loop. A for loop uses an int to keep track of how many times the block of code is ran.</p>
                        <p>The part within the parentheses of the for loop consists of three statements, <span className="keywordL">an initialization</span>, <span className="keywordL">a testing condition</span>, and the increment/decrement)</p>
                        <p>The <span className="keywordL">increment operator (‘++’)</span> increases the variable by 1 and the <span className="keywordL">decrement operator (‘--‘)</span> decreases the variable by 1. </p>
                        <p>Note: the <span className="keywordL">for</span> loop can be incremented or decremented by a value other than 1. </p>
                        <p>Ex: </p>
                        <p className="code">for (int i = 0; i &lt; 5; ++i) &#123; <br /> </p>
                        <p className="inner">System.out.println(“Hi”); <br /></p>
                        <p className="code">&#125;  <br /></p>
                        <p>In this example, “Hi” will be printed 5 times. </p>
                        <p>A <span className="keywordL">while</span> loop uses a <span className="keywordL">boolean</span>. A while loop will run until the condition within the parentheses is false. (A loop that is never turned to false is called an <span className="keywordL">infinite loop</span> and will run forever so avoid that condition!) A while loop and a for loop can do the same thing, just with different formatting. </p>
                        <p>(Same example from above)</p>
                        <p className="code">int i = 0; <br /> 
                        while (i &lt; 5)&#123; <br /> </p>
                        <p className="inner">System.out.println(“Hi”); <br /> i++; <br /> </p>
                        <p className="code">&#125; <br /> </p>

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

export default Loops;