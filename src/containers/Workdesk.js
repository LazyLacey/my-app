import React, { Component } from 'react';
import HeaderHeroes from '../components/chosen-heroes/chosen-heroes'
import ListOfHeroes from '../components/hero-list/list-of-heroes'
import SwitchButtons from '../components/fandom-switcher/switch-buttons'
import SearchString from '../components/search/search';
import { loadHeroes } from "../api/heroes-api";

import { connect } from 'react-redux';
import { addHero, deleteHero, changeFandom, search, heroesLoaded } from '../store/actions';
import { timingSafeEqual } from 'crypto';
import { throws } from 'assert';

class Workdesk extends Component{
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        loadHeroes().then(heroes => {
            if(heroes == undefined)
            {
                alert('Тут неправильные герои и они делают неправильный мед :{')
                throw 'Ни шмогла'                
            }
            this.props.heroesLoaded(heroes)
        })
        //fetch('../____json____/heroes.json').then(res => console.log(res.json()))
        //getJSON('../____json____/heroes.json')
          //  .then(heroes => console.log(heroes));
    }

    render(){
        return(
            <div className='workdesk'>
                <HeaderHeroes deleteHero = {this.props.deleteHero} chosenHeroes = {this.props.chosenHeroes}/>
                <SearchString search = {this.props.search} searchText = {this.props.inputSearch}/>
                <ListOfHeroes heroesList = {this.props.heroesList} addHero={this.props.addHero}/>
                <SwitchButtons onClick={this.props.changeFandom}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addHero: heroName => dispatch(addHero(heroName)),
        deleteHero: heroName => dispatch(deleteHero(heroName)),
        changeFandom: fandomName => dispatch(changeFandom(fandomName)),
        search: input => dispatch(search(input)),
        heroesLoaded: heroes => dispatch(heroesLoaded(heroes))     
    }

}



export default connect(mapStateToProps,
    mapDispatchToProps)(Workdesk)









