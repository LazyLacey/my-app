import React, { Component } from 'react';
import HeroCard from '../card/hero-card';
import './chosen-heroes.css'

export default class ChosenHeroes extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const heroes = this.props.chosenHeroes;
        return (
            Object.keys(heroes).length == 0 
                ? null 
                : <div className='headerHeroes'>
                    { Object.keys(heroes).map(heroName => <div className='fuckinHack'>
                        <HeroCard key={heroName} 
                            isNeedName={false} 
                            name={heroName} 
                            counter={heroes[heroName].count} 
                            deleteHero={() => this.props.deleteHero(heroName)} 
                            canBeDeleted={true}
                            image={heroes[heroName].image}/>
                    </div> )}
            </div>
        );
    }
}