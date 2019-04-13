import React, { Component } from 'react';
import './switch-buttons.css'
import { Link } from "react-router-dom";
import marvel from "./Marvel.png";
import dc from "./dc-logo.png";

class SwitchButtons extends Component {
    
    render(){
        const dcFandom = '/dc';
        const marvelFandom = '/marvel';

        const dcImageUrl = dc;
        const marvelImageUrl = marvel;

        return(
            <div className="buttonPanel">
                <Link to={dcFandom}>
                    <img src={dcImageUrl}/>
                </Link>
                <Link to={marvelFandom}>
                    <img src={marvelImageUrl}/>
                </Link>
            </div>
        )
    }
}

export default SwitchButtons;