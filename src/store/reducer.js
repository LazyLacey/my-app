import { deepStrictEqual } from "assert";
import { stat } from "fs";

 export default function reducer(state = getInitialState(),action){
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

        case 'ADD_HERO':
            let currentCount = state.chosenHeroes[action.heroName];
            currentCount = currentCount >= 1 
                ? currentCount + 1
                : 1;

            return {
                ...state,
                chosenHeroes: {...state.chosenHeroes, [action.heroName] : 
                    {
                        heroName: action.heroName, 
                        image: action.image,
                        count: currentCount
                    }
                }
            }
        case 'DELETE_HERO':
            let count = state.chosenHeroes[action.heroName].count - 1;
            
            if(count <= 0) {
                var newChosenHeroes = Object.keys(state.chosenHeroes)
                        .filter(key => key != action.heroName)
                        .map(key => ({ [key] : state.chosenHeroes[key] }));
                
                return {
                    ...state,
                    chosenHeroes: newChosenHeroes.length != 0 
                        ? Object.assign(...newChosenHeroes)
                        : {}
                }
            }
            else 
                return{
                    ...state,
                    chosenHeroes: {...state.chosenHeroes, [action.heroName] : state.chosenHeroes[action.heroName] - 1}
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
        chosenHeroes:{},
        heroesList:[],
        allHeroes: {},
        inputSearch: ""
    }
}


