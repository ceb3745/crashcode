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

    addText(){
        return(
            "# write a for range loop to print the odd numbers between 1 - 20 \n\n\n# write a for in loop through your name \n\n\n# write a while loop to print all even numbers between 1 - 20 \n"
        )
    }

    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">loops.py</h1>
                <div className="container">
                    <div className="info">
                        <p><span className="keywordL">Loops</span> are used when we need to do a set of instructions more than once. They run until some <span className="keywordL">condition</span> has met.</p>
                        <p><b><u>For Loops</u></b></p>
                        <p>for loops come in a few different flavors in python</p>
                        <p><u><span className="keywordL">for in</span></u> - these are used to run through each <span className="keywordL">element</span> of an item</p>
                        <p>for example we can loop through every character in a string</p>
                        <div className="code">

                            for letter in "gecko":
                                <div className="inner">print(letter)</div>
                        </div>

                        <p><u><span className="keywordL">for range</span></u> - this allows us to loop through a <span className="keywordL">range</span> of numbers. range always needs to know when to <span className="keywordL">stop</span>, but we can also specifiy where to <span className="keywordL">start</span> the range and how to <span className="keywordL">count/step</span> through the values</p>
                        
                        <p>First we will just give range a stop. Range will count up to but not include the stop value. Since we did not give a start value, it will start counting from 1 </p>
                        <div className="code">
                            # prints 1 - 10, notice we give range 11 to stop<br></br>
                            for number in range(11)<br></br>
                                <div className="inner">print(number)</div>
                        </div>

                        <p>Next we will give range a start and stop value</p>
                        <div className="code">
                            # prints 20 - 29  <br></br>
                            for number in range(20, 30)<br></br>
                                <div className="inner">print(number)</div>
                        </div>

                        <p>Next we will give range a start, stop and step to print all even numbers between 2- 20</p>
                        <div className="code">
                            # prints even numbers between 2 - 20  <br></br>
                            for number in range(2, 21, 2)<br></br>
                                <div className="inner">print(number)</div>
                        </div>

                        <p><b><u><span className="keywordL">While Loops</span></u></b></p>
                        <p>while loops will go until a certain condition is met. Usually we use a counter and have the loop execute that many times. So we need a variable to count for us. Make sure to increment this counter every time otherwise your loop will run forever!</p>
                        <div className="code">
                            # print 1 - 10  <br></br>
                            i = 1 <br></br>
                            while i &lt;= 10:<br></br>
                                <div className="inner">print(i)<br></br>i = i + 1</div>
                                
                        </div>
                        
                        <p>We can also count down and increment at different intervals</p>
                        <div className="code">
                            # print odd numbers between 1 - 19 in descending order  <br></br>
                            i = 19 <br></br>
                            while i &gt;= 0:<br></br>
                                <div className="inner">print(i)<br></br>i = i - 2</div>
                                
                        </div>

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