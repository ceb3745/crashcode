import React, { Component } from 'react';

class Conditionals extends Component{
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
                <h1 className="titleName">conditionals.java</h1>
                <div className="container">
                    <div className="info">
                        <p>Conditionals are important when you want to do something only when a certain condition is met. 
                            This is normally done by checking a value of a variable (such as a boolean) and potentially comparing it to another value (such as an int). 
                            The condition must return true in order for the code within the if statement to execute. 
                            If there are more than one condition you want to check, simple add an ‘else if’ block. </p>
                            <p>Common operators for comparing values are equals to (‘==‘), not equals to (‘!=‘), greater than (‘&#62;’), 
                            less than (‘&#60;’), greater than or equal to (‘&ge;‘) and less than or equal to 
                            (‘&le;‘). </p>
                            <p>To check if more than one condition is met (so that everything within the parentheses is true) 
                            within the if statement, use the and (‘&amp;&amp;’) operator. If you have multiple conditions but only need one of them to be true use the or (‘||’) operator.</p>
                            <p>The basic structure for an if statement: </p>
                            <p className="code">if (check for condition here) &#123; <br /> //some code here <br />&#125; <br />
                            else if (check for condition here) &#123; <br /> //some code here <br /> &#125; <br />
                            else &#123; <br /> //some code here <br /> &#125; <br /> </p>
                            <p>Note: If the condition is met in the ‘if’ block, the code in the ‘else if’ and ‘else’ won’t execute. 
                                Also, if there are two if statements after each other, they can both execute if both their conditions are met. 
                                So you can view the whole if else block as one executable bit of code. </p>
                            <p>Ex: </p>
                            <p className="code">if (value%2 == 0 &amp;&amp; value%3 == 0) &#123; <br /> </p>
                            <p className="inner">System.out.println(“value is divisible by 6”); <br /> </p>
                            <p className="code">&#125; <br /> 
                            else if (value%2 == 0) &#123; <br /> </p>
                            <p className="inner">System.out.println(“value is an even number”); <br /> </p>
                            <p className="code">&#125; <br /> 
                            else &#123; <br /> </p>
                            <p className="inner">System.out.println(“value is not divisible by 6 or 2”); <br /> </p>
                            <p className="code">&#125; <br /> </p>
                    </div>
                    <div className="console">
                        <textarea id="consoleBox" onKeyDown={e => this.addTab(e)} className="inputBox">
                            Type Code Here...
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

export default Conditionals;