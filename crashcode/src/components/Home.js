import React, { Component } from 'react';
import Heart from '../assets/heart.png';
import Lightning from '../assets/lightning.png';
import Lizard from '../assets/lizard.png';
import Pencil from '../assets/pencil.png';

class Home extends Component{

    constructor() {
        super();
    }

    render(){
        return(
            <div className="homePage">
                <div className="title">
                <h1 className="welcome"> Welcome to crash_code. </h1>
                </div>
                <h2>Today I'm learning:</h2><h2>{this.props.language}</h2>
                <img src={Heart} className="stickerHeart"/>
                <img src={Lightning} className="stickerLightning"/>
                <img src={Lizard} className="stickerLizard"/>
                <img src={Pencil} className="pencil"/>
            </div>
        );
    }
}

export default Home;
