import React, { Component } from 'react';
import './switch-buttons.css'

class SwitchButtons extends Component{
    render(){
        const dcFandom = 'dc';
        const marvelFandom = 'marvel';

        const dcImageUrl = 'https://image.flaticon.com/icons/svg/826/826335.svg'
        const marvelImageUrl = 'https://image.flaticon.com/icons/svg/826/826331.svg'


        return(
            <div>
                <img src={dcImageUrl} onClick={() => this.props.onClick(dcFandom)}/>
                <img src={marvelImageUrl} onClick={() => this.props.onClick(marvelFandom)}/>
            </div>
        )
    }
}

export default SwitchButtons;