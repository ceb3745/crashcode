import React, { Component } from 'react';

class Variables extends Component{
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
                <h1 className="titleName">variables.py</h1>
                <div className="container">
                    <div className="info">
                    <p>Variables are used to store value. It's kind of like placing something inside of a box. 
                    We do this so we can easily access values later in our programs </p>
                    
                    <p>If you have programmed in other languages, then you might've had to declare what type of data you
                    plan to store in your variable. In Python we don't have to say what the variable will hold. We can just use it. </p>

                    <p>Variable name should make sense to what it is holding.</p>

                    <p>In Python we use snake_case when naming our variables to make our variables easy to read. This means the name is all lower case and _ in place of spaces.</p>

                    <p>Examples:</p>

                    <p>We can assign many different types of data to a variable. Here are a few examples</p>

                    <p>We can assign an integer to a variable</p>

                    <p className="code"> num_of_months = 12 </p>
                    
                    <p>Float values:</p>

                        <p className="code">weight_of_cat = 6.77</p>

                    <p>We can also assign strings to a variable. Strings are sequences of characters. 
                    They're kind of like sentences. You know it's a string because it has " " marks around it.</p>

                    <p className="code">  my_cats_name = "The Kraken"</p>  

                    <p> We can also reassign variables to contain new data. Say I changed my cat's name to Garfield and I want to change it. I can easily do that. </p>

                    <p className="code">   my_cats_name = "Garfield" </p>

                    <p>Be careful to not reuse a variable name, unless you actually want to reassign it, otherwise your data will be lost! </p>

                   <p>We can print our variables to the console. The console is where you can see output from your code or error messages if something went wrong. On crashcode the console is the little box on the bottom right. To print to the console with python we use the print() command. Just put the variable to print between the () </p> 

                    <p className="code">print(my_cats_name)</p> 
                    </div>
                    </div>
                    <div className="console">
                        <textarea id="consoleBox" onKeyDown={e => this.addTab(e)} className="inputBox">
                            
                        </textarea>
                        <button className="compileButton" onClick={e => this.compileText(e)}>Compile</button>
                    </div>
                    <div  className="output">
                        {this.returnMessage()}
                    </div>
                </div>
        );
    }
}

export default Variables;