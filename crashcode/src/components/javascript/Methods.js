import React, { Component } from 'react';

class Methods extends Component{
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

    addText(){
        return " \n" +
            "//call our function \n" +
            "console.log(doMath(1, 5, 10)); \n" +
            "\n" +
            "//create a function to do simple addition \n" +
            "function doMath(number1, number2, number3) {  \n" +
            "  var total = number1 + number 2 + number3; \n" +
            "  return total; \n" +
            "}"
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">methods.js</h1>
                <div className="container">
                    <div className="info">

                        <p>If you want to use the same code over and over, instead of copy and pasting it, it's better to instead use what
                        is known as a <span className="keywordM">method</span>  or <span className="keywordM">function</span> .</p>

                        <p>First, we have to create the function that will hold the code we want to repeat. The name of your function should follow the same
                        standards of variable names, it should explain what it does and be in camelcase.</p>

                        <p>Lets create a function to do some simple math for us.</p>

                        <p className="code">console.log(doMath(1, 5, 10));</p>
                        <p className="code">var answer = doMath(-10, 20, 2);</p>

                        <p className="code">function doMath(number1, number2, number3) &#123;</p>
                        <p className="code">var total = number1 + number 2 + number3;</p>
                        <p className="code">return total;</p>
                        <p className="code">&#125;</p>

                        <p> here's a breakdown of all the parts you're seeing above:</p>

                        <p>function doMath() &#123;&#125; is how to create a basic function, all functions must be start with the keyword function, followed by its name, then () which holds
                        what are called <span className="keywordM">parameters</span>  and the &#123;&#125; that contains your code.</p>

                        <p>Above our function call, we see the name of our function with three numbers between it's (). This is a <span className="keywordM">function call</span>, which is how we get our function to run.
                        Just creating the function does nothing, you also need to call it for anything to happen.</p>

                        <p>Our parameters are number1, number2, and number3. As you can see in our function call, these act as variables where the user can pass in different values in the function call which then are assigned
                        to number1, number2, and number3 for use within the function. This is what allows the function to be used multiple times instead of copy and pasting the math formula with different numbers each time.</p>

                        <p>Finally, return does exactly that. It returns the value of total into the function name. That means when doMath is called, it's value is equal to whatever the value of total is.
                        So our first function call will print "16" to the console since total = 16, and for our second call the variable answer will be equal to 12 since total = 12.</p>
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

export default Methods;