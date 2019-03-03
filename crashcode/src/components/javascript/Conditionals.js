import React, { Component } from 'react';

class Conditionals extends Component{
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
            "//create a variable for time set at 0 \n" +
            "var lightSwitch = true;\n" +
            "\n" +
            "//If the light is on, print that it's on. If not, print that it's off \n" +
            "if(lightSwitch == true) {  \n" +
            "  console.log(\"The light is ON\"); \n" +
            "} else { \n" +
            "  console.log(\"The light is OFF\"); \n" +
            "}"
    }


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">conditionals.js</h1>
                <div className="container">
                    <div className="info">
                        <p>Another variable type in javascript is called a <span className="keywordC">boolean</span>. These variables can only have of of two values, true
                        or false. Conditionals are what we use to run pieces of code depending on if a condition is met. Incidentally,
                            one version of a conditional is called an <span className="keywordC">if</span> statement.</p>

                        <p>We're going to be use the boolean representing a light switch for this example.</p>

                        <p className="code">var lightSwitch = true; (light is ON)</p>

                        <p>Now to begin writing our if statement, we are first going to check if the light is ON (true)</p>

                        <p className="code">if(lightSwitch == true) &#123;</p>
                            <p className="code">console.log("The light is ON");</p>
                        <p className="code">&#125;</p>

                        <p>There are a few new things happening here. First, after the keyword "if" is two parentheses () between which you put
                        the condition you want to be met to run the code between the curly braces {}. Here, we see two new operators:</p>

                        <p>The <span className="keywordC">double equal, ==,</span> checks if the variable is equal to the condition of "true", we don't use = as the single equal sign
                        assigns a new value to the variable, which would override the current value. If we want to check if something is NOT true,
                        we use the <span className="keywordC">"not" operator (!)</span> in front of a single equal, which creates the <span className="keywordC">"not equal to" operator, !=.</span></p>

                        <p>So, IF our boolean lightSwitch's value is true, then the <span className="keywordC">console.log("the light is ON");</span> code is run. On crash_code, the <span className="keywordC">console</span> for you is located below where you're typing your code. At the top of this sidebar, select "console". This is the console, where you can see error messages if
                        there is problems with your code, or you can use console.log(your variable or string here); to print a message to the console.</p>

                        <p>Next, we're going to print a message to the console if the light is OFF (false). This can be done in two ways.</p>

                        <p className="code">if(lightSwitch == true) &#123;</p>
                        <p className="code">console.log("The light is ON");</p>
                        <p className="code">&#125; else &#123;</p>
                        <p className="code">console.log("The light is OFF");</p>
                        <p className="code">&#125;</p>

                        <p>The first way is to use the keyword <span className="keywordC">else</span>. So if the program checks if the first statement is true and it's false, it will run the code in the "else" section.
                        Since lightSwitch is currently true, the code within the else will NOT run.</p>

                        <p>What if we wanted to check something else though? What if we wanted to check the value of a number? Let's
                        continue with a new variable, called num.</p>

                        <p className="code">var num = 5;</p>

                        <p>First, we're going to check if num is 10 using what we learned above. Since num does not equal 10, this will be false.</p>

                        <p className="code">if(num == 10) &#123;</p>
                        <p className="code">console.log("num is 10!");</p>
                        <p className="code">&#125;</p>

                        <p>Now, we could just use "else" to determine if num isn't 10. However, say now we want to determine is num is greater than or less than 10.</p>

                        <p className="code">if(num == 10) &#123;</p>
                        <p className="code">console.log("num is 10!");</p>
                        <p className="code">&#125; else if ( num &gt; 10) &#123;</p>
                        <p className="code"> console.log("num is bigger than 10!");</p>
                        <p className="code">&#125; else if (num &lt; 10) &#123;</p>
                        <p className="code">console.log("num is less than 10!");</p>
                        <p className="code">&#125;</p>

                        <p>This conditional statement is the <span className="keywordC">else if</span> statement. It's similar to else, however it allows you to check another, different
                        condition from what you checked in your initial if statement. Here, we use the greater than (&gt;) and less than (&lt;) operators to
                        check if num is bigger or smaller than ten. You can also use the greater than or equal to (&gt;=) or the less than or equal to (&lt;=)
                        operators here. Again, these can only be true or false, as num is either greater or less than ten or not.</p>

                        <p>If num runs through all three statements and still does not return true, we can now use "else" to determine num is NOT a number, as any
                            possible number would have fulfilled one of the three conditions. In this case, "else" is great for catching errors. </p>

                        <p className="code">if(num == 10) &#123;</p>
                        <p className="code">console.log("num is 10!");</p>
                        <p className="code">&#125; else if ( num &gt; 10) &#123;</p>
                        <p className="code">console.log("num is bigger than 10!");</p>
                        <p className="code">&#125; else if (num &lt; 10) &#123;</p>
                        <p className="code">console.log("num is less than 10!");</p>
                        <p className="code">&#125; else &#123;</p>
                        <p className="code">console.log("num is not a number");</p>
                        <p className="code"> &#125;</p>

                            <p>You can also combine conditions using the <span className="keywordC">"and" (&&)</span> or the <span className="keywordC">"or" (||)</span> operators. For "or", one or both condition
                            has to be sure for its code to run. "And' requires BOTH conditions to be true for its code to run.</p>

                            <p className="code">if(num &gt; 10 || num &lt; 10) &#123;</p>
                            <p className="code">console.log("num is not 10");</p>
                        <p className="code"> &#125;</p>

                            <p>This uses "or", meaning that its code will run if num is &gt; 10 OR &lt; 10, so it checks both at the same time</p>

                            <p className="code"> if(boyAge == 10 && boyName == "Tom") &#123;</p>
                            <p className="code"> console.log("Tom is 10 years old");</p>
                        <p className="code">&#125;</p>

                        <p>This uses "and", meaning that the boy's name must be Tom AND his age must be 10, otherwise the statement "Tom is 10 years old"
                            will not print as BOTH statements are not true.</p>
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

export default Conditionals;