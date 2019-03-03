import React, { Component } from 'react';
import './App.css';
import Home from '../src/components/Home';
import NavBar from '../src/components/NavBar';
import NavBarSelected from '../src/components/NavBarSelected';
import SideNavBar from '../src/components/SideNavBar';
import About from '../src/components/About';
import Glossary from '../src/components/Glossary';
import Java from '../src/components/Java';
import Javascript from '../src/components/Javascript';
import Python from '../src/components/Python';
import ConditionalsJS from '../src/components/javascript/Conditionals';
import LoopsJS from '../src/components/javascript/Loops';
import MethodsJS from '../src/components/javascript/Methods';
import OperatorsJS from '../src/components/javascript/Operators';
import VariablesJS from '../src/components/javascript/Variables';
import ConditionalsPY from '../src/components/python/Conditionals';
import LoopsPY from '../src/components/python/Loops';
import MethodsPY from '../src/components/python/Methods';
import OperatorsPY from '../src/components/python/Operators';
import VariablesPY from '../src/components/python/Variables';
import ConditionalsJAVA from '../src/components/java/Conditionals';
import LoopsJAVA from '../src/components/java/Loops';
import MethodsJAVA from '../src/components/java/Methods';
import OperatorsJAVA from '../src/components/java/Operators';
import VariablesJAVA from '../src/components/java/Variables';

class App extends Component {
    constructor(){
        super();
        this.state = {
            page: 'home',
            innerPage: '',
            hover: ''
        }
        this.selectHome = this.selectHome.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.selectGlossary = this.selectGlossary.bind(this);
        this.selectPython = this.selectPython.bind(this);
        this.selectJava = this.selectJava.bind(this);
        this.selectJavascript = this.selectJavascript.bind(this);
        this.hoverPython = this.hoverPython.bind(this);
        this.hoverJava = this.hoverJava.bind(this);
        this.hoverJavascript = this.hoverJavascript.bind(this);
        this.selectConditionals = this.selectConditionals.bind(this);
        this.selectLoops = this.selectLoops.bind(this);
        this.selectMethods = this.selectMethods.bind(this);
        this.selectOperators = this.selectOperators.bind(this);
        this.selectVariables = this.selectVariables.bind(this);
    }

    selectHome(){
        this.setState({
            page: 'home',
            innerPage: ''
        });
    }

    selectAbout(){
        this.setState({
            page: 'about',
            innerPage: ''
        });
    }

    selectGlossary(){
        this.setState({
            page: 'glossary',
            innerPage: ''
        });
    }

    selectJava(){
        this.setState({
            page: 'java'
        });
    }

    selectJavascript(){
        this.setState({
            page: 'javascript'
        });
    }

    selectPython(){
        this.setState({
            page: 'python'
        });
    }

    hoverJava(){
        this.setState({
            hover: 'java'
        });
    }

    hoverJavascript(){
        this.setState({
            hover: 'javascript'
        });
    }

    hoverPython(){
        this.setState({
            hover: 'python'
        });
    }

    selectConditionals(){
        if(this.state.page === 'javascript') {
            this.setState({
                innerPage: 'js-conditionals'
            });
        }else if(this.state.page === 'python'){
            this.setState({
                innerPage: 'py-conditionals'
            });
        }else if(this.state.page === 'java'){
            this.setState({
                innerPage: 'java-conditionals'
            });
        }
    }

    selectLoops(){
        if(this.state.page === 'javascript') {
            this.setState({
                innerPage: 'js-loops'
            });
        }else if(this.state.page === 'python'){
            this.setState({
                innerPage: 'py-loops'
            });
        }else if(this.state.page === 'java'){
            this.setState({
                innerPage: 'java-loops'
            });
        }
    }

    selectMethods(){
        if(this.state.page === 'javascript') {
            this.setState({
                innerPage: 'js-methods'
            });
        }else if(this.state.page === 'python'){
            this.setState({
                innerPage: 'py-methods'
            });
        }else if(this.state.page === 'java'){
            this.setState({
                innerPage: 'java-methods'
            });
        }
    }

    selectOperators(){
        if(this.state.page === 'javascript') {
            this.setState({
                innerPage: 'js-operators'
            });
        }else if(this.state.page === 'python'){
            this.setState({
                innerPage: 'py-operators'
            });
        }else if(this.state.page === 'java'){
            this.setState({
                innerPage: 'java-operators'
            });
        }
    }

    selectVariables(){
        if(this.state.page === 'javascript') {
            this.setState({
                innerPage: 'js-variables'
            });
        }else if(this.state.page === 'python'){
            this.setState({
                innerPage: 'py-variables'
            });
        }else if(this.state.page === 'java'){
            this.setState({
                innerPage: 'java-variables'
            });
        }
    }

  render() {
        if(this.state.innerPage === 'js-conditionals'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <ConditionalsJS />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'js-loops'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <LoopsJS />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'js-methods'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <MethodsJS />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'js-operators'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <OperatorsJS />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'js-variables'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <VariablesJS />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'py-conditionals'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <ConditionalsPY />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'py-loops'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <LoopsPY />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'py-methods'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <MethodsPY />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'py-operators'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <OperatorsPY />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'py-variables'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <VariablesPY />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'java-conditionals'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <ConditionalsJAVA />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'java-loops'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <LoopsJAVA />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'java-methods'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <MethodsJAVA />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'java-operators'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <OperatorsJAVA />
                    </div>
                </div>
            );
        }
        else if(this.state.innerPage === 'java-variables'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <VariablesJAVA />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'home'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBar home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Home language={this.state.hover}/>
                    </div>
                    <SideNavBar java={this.selectJava} javascript={this.selectJavascript} python={this.selectPython}
                                hoverJva={this.hoverJava} hoverJS={this.hoverJavascript} hoverPy={this.hoverPython}/>

                </div>
            );
        }
        else if(this.state.page === 'about'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBar home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <About />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'glossary'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBar home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Glossary />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'java'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected  home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                         variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                         operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <Java />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'javascript'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <Javascript />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'python'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary}
                                        variables={this.selectVariables} loops={this.selectLoops} methods={this.selectMethods}
                                        operators={this.selectOperators} conditionals={this.selectConditionals}/>
                        <Python />
                    </div>
                </div>
            );
        }
  }
}

export default App;
