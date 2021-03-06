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
            "// write a method that takes in two values and returns the product of them\n\n"+
            "public class Main { \n" +
            "   public static void main(String[] args){ \n" +
            "   getProduct();\n" +
            "   }\n\n" +
            "   // write getProduct() here" +
            "   hint: need to make it static to be able to call it in main()\n" +
            "   \n}" 
        )
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">methods.java</h1>
                <div className="container">
                    <div className="info">
                        <p>Similar to variables, <span className="keywordM">method headers</span> (where the method is defined) requires the <span className="keywordM">data type</span> that the method <span className="keywordM">returns</span> (if the method doesn’t return a value, declare the method as void). </p>
                             <p>Returning a value means that when the method is run, a value is produced and can be used elsewhere. The first word in the method header is either public or private, which specifies where the method can be used. The second word is the data type and is followed by the method name and a set of parentheses. </p>
                                 <p>Inside any number of values can be inside the parentheses to be used within the method. Of course, the data type of the variables must be specified.</p>
                        <p>Ex:</p>
                        <p className="code">public int calculateSum(int a, int b) &#123; <br /> </p>
                        <p className="inner">return a + b; <br /> </p>
                        <p className="code">&#125; <br /></p>
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