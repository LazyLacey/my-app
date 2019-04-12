import React, { Component } from 'react';
import ChosenHeroes from '../components/chosen-heroes/chosen-heroes'
import ListOfHeroes from '../components/hero-list/list-of-heroes'
import SwitchButtons from '../components/fandom-switcher/switch-buttons'
import SearchString from '../components/search/search';
import { loadHeroes } from "../api/heroes-api";
import { withRouter  } from 'react-router-dom'

import { connect } from 'react-redux';
import { changeFandom, search, heroesLoaded, changeHeroesListByFandom, changeHeroesListBySearch } from '../store/all-heroes/actions';
import { addHero, deleteHero} from '../store/chosen-heroes/actions'

class Workdesk extends Component{

    componentDidMount() {
        loadHeroes().then(heroes => {
            if(heroes === undefined)
            {
                alert('Тут неправильные герои и они делают неправильный мед :{')
                throw 'Ни шмогла'                
            }

            var currentLocation = this.props.history.location.pathname.slice(1);
            this.props.changeFandom(currentLocation)
            this.props.heroesLoaded(heroes, currentLocation)
        })
    }

    componentWillReceiveProps() {
        var currentLocation = this.props.history.location.pathname.slice(1);
        var prevLocation = this.props.location.pathname.slice(1);
        if(currentLocation != prevLocation) {
            this.props.changeFandom(currentLocation, prevLocation);
        }
    }

    render() {
        return(
            <div className='workdesk'>
                <ChosenHeroes deleteHero = {this.props.deleteHero} chosenHeroes = {this.props.chosenHeroes.chosenHeroes} />
                <SearchString search = {this.props.search} searchText = {this.props.allHeroes.inputSearch}/>
                <ListOfHeroes heroesList = {this.props.allHeroes.heroesList} addHero={this.props.addHero}/>
                <SwitchButtons fandom={this.props.allHeroes.fandom}/>
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









