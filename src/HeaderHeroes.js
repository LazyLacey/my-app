import React, { Component } from 'react';

export default class HeaderHeroes extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const heroes = this.props.chosenHeroes;
        
        return (
            <div class='headerHeroes'>
            <ul>
                { Object.keys(heroes).map(key =>  <li onClick={() => this.props.deleteHero(key)} key={key}>{ heroes[key] }</li>)}
            </ul>
            </div>
        );
    }
}