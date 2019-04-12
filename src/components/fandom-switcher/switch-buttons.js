import React, { Component } from 'react';
import './switch-buttons.css'
import { Link } from "react-router-dom";

class SwitchButtons extends Component{
    render(){
        const dcFandom = 'dc';
        const marvelFandom = 'marvel';

        const dcImageUrl = 'https://image.flaticon.com/icons/svg/826/826335.svg'
        const marvelImageUrl = 'https://image.flaticon.com/icons/svg/826/826331.svg'

        var currentFandom = this.props.fandom;
        return(
            <div>
                <Link to={'/dc'}>
                    <img src={dcImageUrl} 
                    // onClick={() => this.props.onClick(dcFandom, currentFandom)}
                    />
                </Link>
                <Link to={'/marvel'}>
                    <img src={marvelImageUrl}
                        // onClick={() => this.props.onClick(marvelFandom, currentFandom)}
                    />
                </Link>
            </div>
        )
    }
}

export default SwitchButtons;