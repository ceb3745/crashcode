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
            "// Practice Here!\n\n" +
            "public class Main { \n" +
            "   public static void main(String[] args){ \n" +
            "     int number = 15; \n\n" +
            "     // add 'number' by 3 \n\n\n" +
            "     System.out.println(number)\n\n" + 
            "     //increment 'number' using the increment operator\n\n\n" +
            "     System.out.println(number)\n\n" +
            "     // subtract 'number' by 6\n\n\n" +
            "     System.out.println(number)\n\n" + 
            "     // decrement 'number' using the decrement operator\n\n\n" +
            "     System.out.println(number)\n\n" + 
            "     // divide 'number' by 3\n\n\n" +
            "     System.out.println(number)\n\n" +
            "     // multiply number by 10\n\n\n" +
            "     System.out.println(number)\n\n"+
            "     // declare int called 'remainder'\n\n\n" +
            "     System.out.println(number)\n\n"+
            "     // set remainder to number modulus 18\n\n\n" +
            "    System.out.println(number)\n" +
            "   } \n}"
        )
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">operators.java</h1>
                <div className="container">
                    <div className="info">
                        <p>In Java, the most common operators are divided into two types, <span className="keywordO">Arithmetic Operators</span> and <span className="keywordO">Relational Operators</span> (to compare values). 
                            For basic <span className="keywordO">arithmetic</span>, <span className="keywordO">addition</span>, <span className="keywordO">subtraction</span>, <span className="keywordO">multiplication</span> and <span className="keywordO">division</span>, use the symbols for those operations <span className="keywordO">(+, -, *, /).</span>
                            The <span className="keywordO">increment</span> and <span className="keywordO">decrement</span> operators will be explained in the <span className="keywordO">“Loops”</span> section, and the relational operators will be explained in the <span className="keywordO">“Conditionals”</span> section. </p>
                        <p>To assign to an arithmetic on an int value, for example, simply include its symbol before an equals sign. </p>
                        <p>For example, if I declare an int variable x that equals 5, and I want to add 2 to it, I can do x +=2. 
                            You can also do the operation in their variable form if their types were defined already.</p>
                        <p>Ex: </p>
                        <p className="code">int x = 4; <br /> int y = 3; <br /> int z = x*y;</p>
                        
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