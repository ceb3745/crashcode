import React, { Component } from 'react';

class Java extends Component{

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

    render(){
        return(
            <div className="contentPage">
                <h1 className="titleName">crash_code.java</h1>
                <div className="container">
                    <div className="info">
                        Info
                    </div>
                    <div className="console">
                        <textarea id="consoleBox" onKeyDown={e => this.addTab(e)} className="inputBox">
                            Type Code Here...
                        </textarea>
                    </div>
                    <div  className="output">
                            <textarea id="textbox" readOnly className="outputBox">

                            </textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default Java;