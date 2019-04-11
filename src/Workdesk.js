import React, { Component } from 'react';
import HeaderHeroes from './HeaderHeroes.js'
import ListOfHeroes from './ListOfHeroes.js'
import SwitchButtons from './SwitchButtons.js'

import { connect } from 'react-redux';
import { addHero, deleteHero, changeFandom, search } from './actions.js';
import { timingSafeEqual } from 'crypto';
import { throws } from 'assert';
import SearchString from './SearchString.js';

class Workdesk extends Component{
    constructor(props) {
        super(props)
        console.log(this.props)
        console.log(this.state)
        
        this.props.addHero("Кошка")
        this.props.addHero("Бэтмен")
        this.props.addHero("Бэтмен")
        

    };
    render(){
        return(
            <div class='workdesk'>
                <HeaderHeroes deleteHero = {this.props.deleteHero} chosenHeroes = {this.props.chosenHeroes}/>
                <SearchString search = {this.props.search}/>
                <ListOfHeroes/>
                <SwitchButtons/>
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
        search: input => dispatch(search(input))        
    }

}



export default connect(mapStateToProps,
    mapDispatchToProps)(Workdesk)









