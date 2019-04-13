import React, { Component } from 'react';
import HeroCard from "../card/hero-card";
import Search from '../search/search'

class ListOfHeroes extends Component{
    render(){
        //array
        const heroes = this.props.heroesList
        return(
            heroes == undefined ? null : 
            <div className="heroesList">
                    { heroes.map(hero => 
                    <HeroCard key={hero.name} 
                                image={hero.image} 
                                name={hero.name} 
                                addHero={() => this.props.addHero(hero.name, hero.image)}
                                isNeedName={true}>
                    </HeroCard>)}
            </div>
        )
    }
}

export default ListOfHeroes;