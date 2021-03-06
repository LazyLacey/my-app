import React, { Component } from 'react';
import './hero-card.css'
import cross from './cross.png'

class HeroCard extends Component {

    constructor(props){
        super(props)
        this.defaultCountValue = 1;
        this.doNothingFunction = () => {};
        this.crossUrl = cross;
    }

    renderName = () => {
        const isNeedName = this.props.isNeedName;
        return isNeedName 
            ?  (<div>{this.props.name}</div>)
            :   null
    }

    renderDelete = () => {
        const canBeDeleted = this.props.canBeDeleted;
        return canBeDeleted
            ? (<img className='cross' onClick={() => this.props.deleteHero(this.props.name)} src={this.crossUrl}/>)
            : null;
    }

    renderCounter = () => {
        const counter = this.props.counter || this.defaultCountValue;
        return counter == this.defaultCountValue
            ? null
            : (<div className='counter'>{counter}</div>);
    }

    render(){
        const image = this.props.image;        
        const addHero = this.props.addHero || (this.doNothingFunction);

        return(
            <div className="heroCard" onClick={() => addHero(this.props.name)}>
                {this.renderDelete()}
                <img src={image}/>
                {this.renderName()}
                {this.renderCounter()}
            </div>
        )
    }
}

export default HeroCard;