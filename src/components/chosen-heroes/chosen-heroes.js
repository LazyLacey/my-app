import React, { Component } from 'react';
import HeroCard from '../card/hero-card';

export default class ChosenHeroes extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const heroes = this.props.chosenHeroes;
        return (
            <div className='headerHeroes'>
                
                    { Object.keys(heroes).map(heroName => <HeroCard key={heroName} 
                            isNeedName={false} 
                            name={heroName} 
                            counter={heroes[heroName].count} 
                            deleteHero={() => this.props.deleteHero(heroName)} 
                            canBeDeleted={true}
                            image={heroes[heroName].image}/>)}
            </div>
        );
    }
}