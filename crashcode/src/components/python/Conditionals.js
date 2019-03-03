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


    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">conditionals.py</h1>
                <div className="container">
                    <div className="info">
                        <p>Boolean is a value that can only be True or False. We use them to check if conditions are true or not.</p>
                        <p>We have the following operators that when used will tell us if the statement is True or False. We can also capture boolean values in variables. </p>
                        <p><b><u>equals</u></b></p> 
                        <p> a == b is True if a is equal to b
                            <br></br><br></br> Note: this is different than assigning a variable. Here we are performing the boolean operation 5 == 5 and then assigning that to a variable</p>
                    
                        <p>Code:</p>
                        <div className="code">
                            equal_check = 5 == 5<br></br>
		                     print(equal_check)<br></br><br></br>

		                    equal_check = 5 == 6<br></br>
		                    print(equal_check)<br></br><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">True <br></br>False</div>
                        
                        
                        <p><b><u>not equals</u></b></p>   
                        <p>a != b is True if a is not equal to b</p>
                        <p></p>

                        <p>Code:</p>
                        <div className="code">
                            not_equal_check = 5 != 6<br></br>
                            print(not_equal_check)<br></br><br></br>

	 		                not_equal_check = 5 != 5<br></br>
	 		                print(not_equal_check)<br></br><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">True <br></br>False</div>


                        <p><b><u>less than</u></b></p>   
                        <p>a &lt; b us True if a is less than b</p>
                        <p></p>

                        <p>Code:</p>
                        <div className="code">
                            less_than = 5 &lt; 6<br></br>
                            print(less_than)<br></br><br></br>

                            less_than = 6 &lt; 5 <br></br>
	 		                print(less_than)<br></br><br></br>

                            less_than = 5 &lt; 5 <br></br>
	 		                print(less_than)<br></br><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">True <br></br>False<br></br>False</div>

                        <p><u><b>less than or equal</b></u></p>   
                        <p>a &lt;= b is True if a less than or equal to b</p>
                        <p></p>

                        <p>Code:</p>
                        <div className="code">
                            less_equal = 5 &lt;= 5 <br></br>
                            print(less_equal)<br></br><br></br>

                            less_equal = 6 &lt;= 5 <br></br>
                            print(less_equal)<br></br><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">True <br></br>False</div>

                        <p><u><b>greater than</b></u></p>   
                        <p>a &gt;= b is True if a greater than b</p>
                        <p></p>

                        <p>Code:</p>
                        <div className="code">
                            less_equal = 6 &gt;= 5 <br></br>
                            print(less_equal)<br></br><br></br>

                            less_equal = 6 &gt;= 6 <br></br>
                            print(less_equal)<br></br><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">True <br></br>False</div>


                        <p><u><b>greater than or equal</b></u></p>   
                        <p>a &gt;= b is True if a greater than or equal to b</p>
                        <p></p>

                        <p>Code:</p>
                        <div className="code">
                            less_equal = 6 &gt;= 6 <br></br>
                            print(less_equal)<br></br><br></br>

                            less_equal = 5 &lt;= 6 <br></br>
                            print(less_equal)<br></br><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">True <br></br>False</div>

                        <p>We can use these operators for conditional statements! Let's go over some keywords. </p>
                        <p><br></br>One important thing we need to note first is that python is whitespace sensitive. This means that python uses whitespace to denote blocks, unlike 	&#123; 	&#125; in a language like Java.</p>
                        <p>This basically means we need to indent the code that belongs to the conditional statements. Otherwise python won't know the code belongs to them.</p>
                            
                            
                        <p><u><b>if statement</b></u></p>   
                        <p>We will use an if statement to only run a block of code if the statement is true</p>
                        <p></p>

                        <p>Code:</p>
                        <div className="code">
                            a = 5 <br></br>
                            b = 6<br></br>
                            if a &gt; b:<br></br>
                               <div className="inner"> print("a is less than b!")</div><br></br>

                            if b &gt; a:<br></br>
                            <div className="inner"> print("b is less than a!")</div><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">a is less than b! </div>

                        <p>See how the code only runs the first block? This is because a is less than b, but b is not less than a. If statements allow us to run code only if a certain condition has been met. </p>


                        <p><u><b>else statement</b></u></p>   
                        <p>Sometimes we still want something to happen if our if statement isn't true, this is where else statements come in. Else statements have to follow an if or an elif statement</p>
                        <p></p>

                        <p>Code:</p>
                        <div className="code">
                            a = 5 <br></br>
                            b = 6<br></br>
                            if a == b: :<br></br>
                               <div className="inner"> print("b is equal to a")</div><br></br>

                            else:<br></br>
                            <div className="inner"> print("b is not equal to a. :[ ")</div><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">b is not equal to a. :[</div>

                        <p><u><b>elif statement</b></u></p>   
                        <p>This is short for else if. Sometimes you want to run one block of statements or another block of statements, but not both. This is where elif comes in, it always follows an if statement. An elif statement will only run if the if preceeding if statement is false. </p>
                        <p></p>

                        <p>Code:</p>
                        <div className="code">
                            a = 9 <br></br>
                            if a &gt; 10: :<br></br>
                               <div className="inner"> print("a is greater than 10!")</div><br></br>

                            elif a &lt; 10:<br></br>
                            <div className="inner"> print("a is less than 10!")</div><br></br>
                            else:<br></br>
                            <div className="inner"> print("a is equal to 10!")</div><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">a is less than 10</div>

                        <p><b><u>Boolean Expressions</u></b></p>

                        <p><b><u>and</u></b></p>
                        <p> a and b <br></br>evaluates to True if a and b are both true </p>

                        <p><b><u>or</u></b></p>
                        <p> a or b <br></br>valuates to True if a is true or b is true. Only one of them needs to be true to run that block of code</p>

                        <p><b><u>not</u></b></p>
                        <p> a or b <br></br>gives the opposite of the answer to a <br></br>
 				                            if a is true then not a is false<br></br>
 				                            if a is false then not a is true
                        </p>
                        
                        <p>Code:</p>
                        <div className="code">
                            a = 5 <br></br>
                            b = 2 <br></br>
                            if a == 5 and b == 2 :<br></br>
                               <div className="inner"> print("a == 5 and b == 2")</div><br></br><br></br>

                            if a == 3 or b == 2:<br></br>
                            <div className="inner"> print("this prints because b == 2")</div><br></br><br></br>
                            if not a == 3:<br></br>
                            <div className="inner"> print("a is not equal to 3 is true")</div><br></br>
                        </div>
                       
                        <p>Output:</p>
                        <div className="code">a == 5 and b == 2 <br></br>this prints because b == 2<br></br>a is not equal to 3 is true</div>

                        <p><br></br><br></br>Go ahead and try it for yourself!</p>
                        
                    </div>
                    <div className="console">
                        <textarea id="consoleBox" onKeyDown={e => this.addTab(e)} className="inputBox">
                            # Type Code Here...
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