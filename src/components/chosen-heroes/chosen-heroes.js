import React, { Component } from 'react';
import HeroCard from '../card/hero-card';

// export default const ChosenHeroes = (heroes) => {
//     return (
//         <div class='headerHeroes'>
//             <ul>
//                 { Object.keys(heroes).map(key =>  <li onClick={() => this.props.deleteHero(key)} key={key}>{ heroes[key] }</li>)}
//             </ul>
//         </div>
//     );
// }

export default class ChosenHeroes extends Component{
    constructor(props){
        super(props)
    }

    render(){
        //heroes = object
        const heroes = this.props.chosenHeroes;
        return (
            <div className='headerHeroes'>
                
                    { Object.keys(heroes).map(heroName => <HeroCard key={heroName} 
                            isNeedName={false} 
                            name={heroName} 
                            counter={heroes[heroName]} 
                            deleteHero={() => this.props.deleteHero(heroName)} 
                            canBeDeleted={true}
                            image={heroes[heroName].image}/>)}
            </div>
        );
    }
}