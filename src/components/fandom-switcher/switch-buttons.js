import React, { Component } from 'react';
import './switch-buttons.css'
import { Link } from "react-router-dom";
import marvel from "./Marvel.png";
import dc from "./dc-logo.png";
import './switch-buttons.css'

class SwitchButtons extends Component {
    
    render(){
        const dcFandom = '/dc';
        const marvelFandom = '/marvel';

        const dcImageUrl = dc;
        const marvelImageUrl = marvel;

        return(
            <div className="buttonPanel">
                <div className='buttonWrapper'>
                    <Link to={dcFandom}>
                        <img src={dcImageUrl}/>
                    </Link>
                    <Link to={marvelFandom}>
                        <img src={marvelImageUrl}/>
                    </Link>
                </div>
            </div>
        )
    }
}

export default SwitchButtons;