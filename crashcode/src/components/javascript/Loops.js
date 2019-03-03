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
            "//create a variable for time set at 0 \n" +
            "var time = 0; \n" +
            "\n" +
            "//run the loop until the time reaches 1 minute \n" +
            "while(time <= 60) {  \n" +
            "  time++; \n" +
            "  console.log(time); \n" +
            "}"
    }

    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">loops.js</h1>
                <div className="container">
                    <div className="info">

                        <p><span className="keywordL">Loops</span> are used to run code multiple times. However, loops MUST END at some point. Loops that are infinite, or
                            continue forever, will crash your program. In javascript, there are two main types of loops.</p>

                        <p>The first loop is the <span className="keywordL">while</span> loop. This loop will continue to run while its condition is true. For this example,
                        we are going to check the time until we reach 1 minute.</p>

                        <p className="code">var time = 0;</p>

                        <p className="code">while(time &lt;= 60) &#123;</p>
                        <p className="code"> time++;</p>
                        <p className="code">console.log(time);</p>
                        <p className="code">&#125;</p>

                        <p> This loop above is very simple, with the statement in the while loop's () checking if watchButton's value is true. As long as watchButton's value is
                        true, it will apply the <span className="keywordL">increment (++)</span> operator to our time variable. The way ++ works is simple, it simply adds
                        +1 to the value of the variable. So, we keep adding +1 to time until we reach time = 60 and the loop stops. You can also subtract -1 from the value each loop by
                        using the <span className="keywordL">decrement operator (--)</span>. </p>

                        <p>While loops are great for anything that can be true or false, but what if we wanted to do it another way? In that case, we would use what is known as a <span className="keywordL">for</span> loop.
    </p>
                        <ol> A for loop has 3 parts:

                        <li>The first part determines where the loop starts (var i = 0)</li>
                        <li>The second determines where the loop stops (i &lt;= 60)</li>
                        <li>The third increments the first statement until the second statement is true (i++)</li>
                        </ol>

                        <p> Each of these statements are separated by semicolons and placed within the () of the for loop</p>

                        <p className="code">for(var i = 0; i &lt;= 60; i++) &#123;</p>
                        <p className="code"> time = i;</p>
                        <p className="code"> console.log(time);</p>
                        <p className="code">&#125;</p>

                        <p>This will give you exactly the same output as the while loop, but approaches it in a different way.</p>
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