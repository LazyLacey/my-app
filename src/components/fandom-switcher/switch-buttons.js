import React, { Component } from 'react';
import './switch-buttons.css'
import { Link } from "react-router-dom";

class SwitchButtons extends Component {
    
    render(){
        const dcFandom = '/dc';
        const marvelFandom = '/marvel';

        const dcImageUrl = 'https://image.flaticon.com/icons/svg/826/826335.svg'
        const marvelImageUrl = 'https://image.flaticon.com/icons/svg/826/826331.svg'

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