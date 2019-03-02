import React, { Component } from 'react';
import './App.css';
import Home from '../src/components/Home';
import NavBar from '../src/components/NavBar';
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
            page: 'home'
        }
        this.selectHome = this.selectHome.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.selectGlossary = this.selectGlossary.bind(this);
        this.selectPython = this.selectPython.bind(this);
        this.selectJava = this.selectJava.bind(this);
        this.selectJavascript = this.selectJavascript.bind(this);

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

  render() {
        if(this.state.page === 'home'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBar home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Home />
                    </div>
                    <SideNavBar java={this.selectJava} javascript={this.selectJavascript} python={this.selectPython}/>
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
                    <SideNavBar java={this.selectJava} javascript={this.selectJavascript} python={this.selectPython}/>
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
                    <SideNavBar java={this.selectJava} javascript={this.selectJavascript} python={this.selectPython}/>
                </div>
            );
        }
        else if(this.state.page === 'java'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBar home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Java />
                    </div>
                    <SideNavBar java={this.selectJava} javascript={this.selectJavascript} python={this.selectPython}/>
                </div>
            );
        }
        else if(this.state.page === 'javascript'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBar home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Javascript />
                    </div>
                    <SideNavBar java={this.selectJava} javascript={this.selectJavascript} python={this.selectPython}/>
                </div>
            );
        }
        else if(this.state.page === 'python'){
            return(
                <div className="outer">
                    <div className="App">
                        <NavBar home={this.selectHome} about={this.selectAbout} glossary={this.selectGlossary} />
                        <Python />
                    </div>
                    <SideNavBar java={this.selectJava} javascript={this.selectJavascript} python={this.selectPython}/>
                </div>
            );
        }
  }
}

export default App;
