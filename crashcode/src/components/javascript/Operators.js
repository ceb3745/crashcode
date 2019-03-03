import React, { Component } from 'react';

class Operators extends Component{
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

    addText(){
        return " \n" +
            "//create our variables and assign them a value \n" +
            "var firstNumber = 5; \n" +
            "var secondNumber = 10; \n" +
            "\n" +
            "//Add secondNumber to firstNumber\n" +
            "firstNumber += secondNumber;\n" +
            "console.log(firstNumber); \n"
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">operators.js</h1>
                <div className="container">
                    <div className="info">
                        <p><span className="keywordO"> Operators</span> in javascript are what allow us to preform most basic math. For these examples, we will
                        be using the following variables. firstNumber and secondNumber has been assigned number values, while we will
                        assign operator a value later.</p>

                        <p className="code">var firstNumber = 5;</p>
                        <p className="code">var secondNumber = 10;</p>
                        <p className="code">var operator;</p>

                        <p>For <span className="keywordO"> addition</span>, you can add two numerical variables or numbers together like how you would in math class.</p>

                        <p className="code">operator = 10 + 5 (operator = 15) OR operator = firstNumber + secondNumber (operator = 15)</p>

                        <p><span className="keywordO"> Subtraction</span> works the same way:</p>

                        <p className="code">operator = 10 - 5 (operator = 5) OR operator = firstNumber - secondNumber (operator = 5)</p>

                        <p> If you want to use subtraction or addition on a variable without creating a new one to store the outcome, it would look like the following:
                        </p>
                        <p className="code">firstNumber = firstNumber + 5; (firstNumber = 10)</p>
                        <p className="code">firstNumber = firstNumber - 5; (firstNumber = 5)</p>

                        <p>This can also be simplified by placing the addition or subtraction operator in front of the = sign and placing only
                        the value you want to add or subtract after it</p>

                        <p className="code">firstNumber += 5; (firstNumber = 10)</p>
                        <p className="code">firstNumber -= 5; (firstNumber = 5)</p>

                        <p>Javascript also contains operators to handle <span className="keywordO"> multiplication</span>:</p>

                        <p className="code">operator = 10 * 5 (operator = 50) OR operator = firstNumber * secondNumber (operator = 50)</p>

                        <p>and <span className="keywordO"> division</span>:</p>

                        <p className="code">operator = 10 / 5 (operator = 2) OR operator = firstNumber / secondNumber (operator = 2)</p>

                        <p>These can also be used without creating a new variable to store the outcome and also simplified</p>
                        <p className="code">firstNumber = firstNumber * 5; (firstNumber = 25)</p>
                        <p className="code">firstNumber = firstNumber / 5; (firstNumber = 1)</p>

                        <p className="code">firstNumber *= 5; (firstNumber = 25)</p>
                        <p className="code">firstNumber /= 5; (firstNumber = 1)</p>

                        <p>The division operator can be used to divide any number, with numbers that can't be divided evenly resulting
                        in a decimal. If you want to get the remainder of a division, the <span className="keyword"> modulus (%)</span> operator can be used.</p>

                        <p className="code">secondNumber = secondNumber % firstNumber (this will return 0 as 10/5 divides evenly)</p>
                        <p className="code">secondNumber %= firstNumber</p>

                        <p>Some operators you may see are <span className="keywordO"> greater than (&gt;)</span>, <span className="keywordO"> less than (&lt;)</span>, <span className="keywordO"> greater than or equal to (&gt;=)</span>, <span className="keywordO"> less than or equal to (&lt;=)</span>,
                            <span className="keywordO"> increment (++)</span>, <span className="keywordO"> decrement (--)</span>, <span className="keywordO"> equal to (==)</span>, or <span className="keywordO"> not equal to (!=)</span>. These and more will be covered in the <span className="keywordO"> conditionals</span> and <span className="keywordO"> loops</span> sections.
                        </p>
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

export default Operators;