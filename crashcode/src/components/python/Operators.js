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


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">operators.py</h1>
                <div className="container">
                    <div className="info">
                        <p>Let's do math in Python! </p>
                        <p>We can add, subtract, multiply, divide, get the remainder and use exponents in a variable</p>
                        <p>Let's do math with the following variables and capture the answer in variables. </p>
                        <div className="code">a = 5</div>
                        <div className="code">b = 2</div>

                        <p>We can add them together.</p>
                        <div className="code">addition = a + b</div>

                        <p>We can subtract them.</p>
                        <div className="code">subtract = a + b</div>

                        <p>We can multiply them.</p>
                        <div className="code">multiply = a * b</div>

                        <p>We can divide them. Note this may result in a float(decimal).</p>
                        <div className="code">divide = a / b</div>

                        <p>We can also do integer division. This will always give a whole number that is rounded down.</p>
                        <div className="code">int_divide = a // b</div>

                        <p>We can calculate the exponent of 2 numbers. The left side is the base and the right side is the exponent </p>
                        <div className="code">exp_a_b = a ** b <br></br> exp_b_a = b ** a </div>

                        <p>We can also use the modulo operator. This will give you the remainder from long division </p>
                        <div className="code">mod_a_b = a % b <br></br> mod_b_a = b % a</div>

                        <p>Let's print them out and get the answers! </p>
                        <div className="code">
                            print(addition)<br></br>
                            print(subtract)<br></br>
                            print(multiply)<br></br>
                            print(divide)<br></br>
                            print(int_divide)<br></br>
                            print(exp_a_b)<br></br>
                            print(exp_b_a)<br></br>
                            print(mod_a_b)<br></br>
                            print(mod_b_a)<br></br>
                        </div>

                        <p>	Output: </p>
                        <div className="code">7
                            3<br></br>
                            10<br></br>
                            2.5<br></br>
                            2<br></br>
                            25<br></br>
                            32 <br></br>
                            1<br></br>
                            2<br></br>
                        </div>

                        <p>Now try it with different numbers! </p>
                        
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

export default Operators;