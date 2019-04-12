export default function allHeroReducer(state = getInitialState(), action) {
    switch (action.type){
        case 'SEARCH':
            return {
                ...state,
                inputSearch: action.input,
            }
        case 'HEROES_LOADED':
            return {
                ...state,
                allHeroes: action.heroes,
            }
        case 'CHANGE_HEROES_BY_FANDOM': {
            return {
                ...state,
                heroesList: state.allHeroes[action.fandom]
            }
        }

        case 'CHANGE_HEROES_BY_SEARCH': {
            return {
                ...state,
                heroesList: state.allHeroes[state.fandom].filter(x=> x.name.toLowerCase().includes(action.input.toLowerCase()))
            }
        }

        case 'CHANGE_FANDOM':
            return {
                ...state,
                fandom: action.fandomName,
            }
        
        default:
            return state
    }
}


function getInitialState() {
    return {
        fandom: 'dc',
        heroesList:[],
        allHeroes: {},
        inputSearch: ""
    }
}


