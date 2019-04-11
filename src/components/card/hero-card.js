import React, { Component } from 'react';
import './hero-card.css'

//принимает 
class HeroCard extends Component{
    constructor(props){
        super(props)
        this.crossUrl = 'https://cdn.onlinewebfonts.com/svg/img_414950.png';
    }

    renderName = () => {
        const isNeedName = this.props.isNeedName || true;
        return isNeedName 
            ?  (<div>{this.props.name}</div>)
            :   null
    }

    renderDelete = () => {
        const canBeDeleted = this.props.canBeDeleted;
        return canBeDeleted
            ? (<img onClick={() => this.props.deleteHero(this.props.name)} src={this.crossUrl}/>)
            : null;
    }

    renderCounter = () => {
        const counter = this.props.counter || 1;
        return counter == 1
            ? null
            : (<div>{counter}</div>);
    }

    render(){
        const image = this.props.image;        
        const addHero = this.props.addHero || (() => {});

        return(
            <div onClick={() => addHero(this.props.name)}>
                {this.renderDelete()}
                <img src={image}/>
                {this.renderName()}
                {this.renderCounter()}
            </div>
        )
    }
}

export default HeroCard;