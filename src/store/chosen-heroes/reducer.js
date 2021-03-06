export default function choseHeroReducer(state = getInitialState(), action) {
    switch (action.type){
        case 'ADD_HERO':
        let currentCount = state.chosenHeroes[action.heroName] === undefined 
            ? 0 
            : state.chosenHeroes[action.heroName].count;
        currentCount = currentCount != 0 
            ? currentCount + 1
            : 1;
        console.log(currentCount+1)
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
                chosenHeroes: {...state.chosenHeroes,
                    [action.heroName] : 
                    {
                        heroName: action.heroName, 
                        image: state.chosenHeroes[action.heroName].image,
                        count: count
                    } }
            }
    default:
        return state
    }
    
}

function getInitialState() {
    return {
        chosenHeroes:{}
    }
}