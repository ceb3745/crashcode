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

class App extends Component {
    constructor(){
        super();
        this.state = {
            page: 'home',
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

    }

    selectHome(){
        this.setState({
            page: 'home'
        });
    }

    selectAbout(){
        this.setState({
            page: 'about'
        });
    }

    selectGlossary(){
        this.setState({
            page: 'glossary'
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

  render() {
        if(this.state.page === 'home'){
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
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <About />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'glossary'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Glossary />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'java'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Java />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'javascript'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Javascript />
                    </div>
                </div>
            );
        }
        else if(this.state.page === 'python'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBarSelected home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Python />
                    </div>
                </div>
            );
        }
  }
}

export default App;
