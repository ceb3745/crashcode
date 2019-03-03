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

        paiza_io('javascript', text, '', this.callBack);

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
            "//create an empty variable\n" +
            "var name; \n" +
            "\n" +
            "//assign name a value and print\n" +
            "name = \"chris\";\n" +
            "console.log(name); \n" +
            "\n" +
            "//overwrite the value of name and print\n" +
            "name = \"paul\";\n" +
            "console.log(name); \n"
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">variables.js</h1>
                <div className="container">
                    <div className="info">
                        <p>In javascript <span className="keywordV"> variables </span> are containers for storing any data value. If you want
                           to store a number or phrase for use later you can create a variable using the
                           keyword <span className="keywordV"> var </span>. A keyword is a word reserved by the language to have a specific
                           meaning. You follow the keyword var with a name of your choice.</p>

                        <p>*This is the only time you will put the var in front of name.</p>

                        <p className="code">var name;</p>

                        <p>This creates a variable called name. Currently, name doesn't have a value.
                           Think of name like an empty box that you might want to put something inside of.</p>

                        <p>In order to assign name a value, or put something in the box, you must use the
                           equal operator followed by the assignment. In javascript there are many different
                           things we can 'put' inside of name, for now we will put a string. We will surround
                           the value we want inside of our variable in double quotation marks.</p>

                        <p><span className="keywordV"> String: </span> A string of characters, like a word or sentence.</p>

                        <p className="code">name = "chris";</p>

                        <p>If you use the equal operator again using the variable 'name' you will change
                           what you put previously</p>

                        <p className="code">name = "paul";</p>

                        <p>The value stored in name will now be paul.</p>

                        <p> You may also put a number inside of a variable. In this case we do not use quotation marks.
                           If you put a number inside of a quotation marks it will be considered a string, and you
                           will be unable to do math with it (add, subtract, divide, etc.).</p>

                        <p className="code"> var age = 3;</p>

                        <p>or a <span className="keyword"> character </span> (usually referred to as <span className="keyword"> char </span>). In this case we use single quotation marks.</p>

                        <p className="code">var letter = 'a';</p>

                        <p>There is another keyword used to define variables in javascript. This keyword is the
                            <span className="keywordV"> const </span> keyword. When you use the const keyword the initial value cannot be changed.</p>

                        <p>const is most useful for values that will not change (PI, Gravity, etc.).</p>

                        <p className="code"> const PI = 3.14;</p>

                        <p> When naming a variable, the name should represent what the use of that variable is (numberOfClothes, catNames, etc). This way,
                           anyone else reading your code will understand what it does. Also as you may have noticed in those examples, javascript uses a naming convention
                           called <span className="keywordV"> camelcase </span>. This means that the first word in your variable name will be lowercase, and the following words
                           will be capitalized.</p>

                        <p className="code">var camelCase = "this is an example of a variable name in camelcase";</p>

                        <p>The variable above both correctly uses camelcase, and the name explains the purpose of the
                           variable. This is a good variable name.</p>

                        <p>Finally, throughout these examples you may have noticed the use of a <span className="keywordV"> semicolon, ";" </span>, after each line of code. The semicolon is what
                           tells the program that the line of code is complete. Javascript does not technically require the use of the semicolon, however
                           as you learn more coding languages it's good to know how to use it.</p>
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

export default Variables;