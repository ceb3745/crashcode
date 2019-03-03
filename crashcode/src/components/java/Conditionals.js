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
    addText() {
        return (
            "// Practice Here! \n\n" +
            "public class Main { \n" +
            "   public static void main(String[] args){ \n" +
            "     System.out.println(\"Hello!\"); \n\n" +
            "// write an if else statement that checks if flag is true and if true, prints 'Flag is true' //else, 'Flag is false'\n\n\n" +
            "// write an if else statement that checks if 'number' is divisible by 15, then 22 and then print // 'not divisible by 15 or 22'\n" +
            "// if it's divisible by 15, print 'Number is divisible by 15', and if it's divisible by 22,  \n// print 'Number is divisible by 22'\n\n\n" +
            "   } \n}"
            
        )
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">conditionals.java</h1>
                <div className="container">
                    <div className="info">
                        <p><span className="keywordC">Conditionals</span> are important when you want to do something only when a certain condition is met. 
                            This is normally done by checking a value of a variable (such as a boolean) and potentially comparing it to another value (such as an int). 
                            The condition must return true in order for the code within the <span className="keywordC">if</span> statement to execute. 
                            If there are more than one condition you want to check, simple add an <span className="keywordC">else if</span> block. </p>
                            <p>Common operators for comparing values are <span className="keywordC">equals to (‘==‘)</span>, <span className="keywordC">not equals to (‘!=‘)</span>, <span className="keywordC">greater than (‘&#62;’)</span>, 
                            <span className="keywordC">less than (‘&#60;’)</span>, <span className="keywordC">greater than</span> or <span className="keywordC">equal to (‘&ge;‘)</span> and <span className="keywordC">less than</span> or <span className="keywordC">equal to 
                            (‘&le;‘). </span></p>
                            <p>To check if more than one condition is met (so that everything within the parentheses is true) 
                            within the if statement, use the and <span className="keywordC">(‘&amp;&amp;’)  </span>operator. If you have multiple conditions but only need one of them to be true use the or <span className="keywordC">(‘||’)  </span>operator.</p>
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

export default Conditionals;