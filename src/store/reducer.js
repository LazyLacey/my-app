 export default function reducer(state = getInitialState(),action){
    switch (action.type){
        case 'ADD_HERO':
            var count = 0;
            if (state.chosenHeroes[action.heroName] >= 1) {
                count = state.chosenHeroes[action.heroName] + 1  
            }
            else {
                count = 1
            }
            
            return {
                ...state,
                chosenHeroes: {...state.chosenHeroes, [action.heroName] : count}
            }
        case 'DELETE_HERO':
            return{
                ...state,
                chosenHeroes: {...state.chosenHeroes, [action.heroName] : state.chosenHeroes[action.heroName] - 1}
            }
        case 'CHANGE_FANDOM':
            return {
                ...state,
                inputSearch: state.fandom == action.fandomName ? state.inputSearch : "",
                fandom: action.fandomName,
                heroesList: state.fandom == action.fandomName ? state.heroesList : state.allHeroes[action.fandomName]
            }
        case 'SEARCH':
            return {
                ...state,
                inputSearch: action.fandom,
                heroesList: state.allHeroes[state.fandom].filter(x => x.name.includes(action.input))
            }
        case 'HEROES_LOADED':
            return {
                ...state,
                allHeroes: action.heroes,
                heroesList: action.heroes[state.fandom]
            }
        default:
            return state
    }
    
}

function getInitialState() {
    return {
        fandom: 'dc',
        chosenHeroes:{},
        heroesList:[],
        allHeroes: {},
        inputSearch: ""
    }
}


