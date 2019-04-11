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
                DCOrMarvel: action.fandomName

            }
        case 'SEARCH':
            return{
                ...state,
                inputSearch: [action.input]
            }
        default:
            return state
    }
    
}

function getInitialState() {
    return {
        DCOrMarvel:("DC"),
        chosenHeroes:{},
        inputSearch:"",
        heroesList:[]
    }
}


