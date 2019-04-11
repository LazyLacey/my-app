import React, { Component } from 'react';
import './HeroIcon.css'

class HeroIcon extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>{this.props}</div>
        )
    }
}

export default HeroIcon;