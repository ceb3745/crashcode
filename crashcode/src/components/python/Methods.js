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
        return(
            "# write a function to sum up 3 numbers \n\n\n# write a function to negate a number (Hint: num * -1) \n\n\n# write a function to print a string \n"
        )
    }

    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">methods.py</h1>
                <div className="container">
                    <div className="info">
                        <p>In programming we use functions to create reusable blocks of code. They are usally related to a single action. It stops us from having to retype the same code over and over.</p>
                        <p>Code:</p>
                        <div className="code">
                        def cubed(num):<br></br>
                            <div className="inner">
	                        cube = num ** 3 <br></br>
	                        return cube<br></br>
                        </div>
                        answer = cubed(3)<br></br>
                        print(answer)<br></br>
                        answer2 = cubed(5)
                        print(answer2)
                        </div>

                        <p>Output:</p>
                        <div className="code"> 27 <br></br> 8</div>

                        <p>So here's what's going on here?</p>

                        <p>So create a function in python we write def followed by the name of the function and ( ): </p>
                        <p>We can give the function parameters. That's what goes inside of the ( ). Parameters are data that we give to the functions to use. </p>
                        <p>Note: If we say a function has a parameter when we define it, then we can't use it without those parameters. </p>
                        <p>Just like we did with the conditional statements and loops, we indent the code so python knows the code belongs to that function. </p>
                        <p>The word return will send back data that we can capture in a variable. </p>
                        <p>Try making your own functions!</p>


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