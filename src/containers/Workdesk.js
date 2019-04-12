import React, { Component } from 'react';
import HeaderHeroes from '../components/chosen-heroes/chosen-heroes'
import ListOfHeroes from '../components/hero-list/list-of-heroes'
import SwitchButtons from '../components/fandom-switcher/switch-buttons'
import SearchString from '../components/search/search';
import { loadHeroes } from "../api/heroes-api";
import { withRouter  } from 'react-router-dom'

import { connect } from 'react-redux';
import { addHero, deleteHero, changeFandom, search, heroesLoaded, changeHeroesListByFandom, changeHeroesListBySearch } from '../store/actions';

class Workdesk extends Component{

    componentDidMount() {
        loadHeroes().then(heroes => {
            if(heroes === undefined)
            {
                alert('Тут неправильные герои и они делают неправильный мед :{')
                throw 'Ни шмогла'                
            }

            this.props.changeFandom(this.props.history.location.pathname.slice(1))
            this.props.heroesLoaded(heroes, this.props.history.location.pathname.slice(1))
        })
    }

    componentWillReceiveProps() {
        var currentLoc = this.props.history.location.pathname.slice(1);
        var prevLoc = this.props.location.pathname.slice(1);
        if(currentLoc != prevLoc) {
            this.props.changeFandom(currentLoc, prevLoc);
        }
        console.log('we are here suka')
    }

    render() {
        return(
            <div className='workdesk'>
                <HeaderHeroes deleteHero = {this.props.deleteHero} chosenHeroes = {this.props.chosenHeroes} />
                <SearchString search = {this.props.search} searchText = {this.props.inputSearch}/>
                <ListOfHeroes heroesList = {this.props.heroesList} addHero={this.props.addHero}/>
                <SwitchButtons fandom={this.props.fandom}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addHero: (heroName, image) => {
            dispatch(addHero(heroName, image))
        },
        deleteHero: heroName => dispatch(deleteHero(heroName)),
        
        changeFandom: (fandom, prevFandom) => {
            if(fandom != prevFandom)
            {
                dispatch(changeFandom(fandom, prevFandom))
                dispatch(search(""))
                dispatch(changeHeroesListByFandom(fandom))
            }
        } ,
        search: input => {
            dispatch(search(input))
            dispatch(changeHeroesListBySearch(input))
        },
        heroesLoaded: (heroes, currentFandom) => { 
            dispatch(heroesLoaded(heroes)) 
            dispatch(changeHeroesListByFandom(currentFandom))
        }      
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Workdesk))









