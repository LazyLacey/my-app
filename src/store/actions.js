export function addHero(heroName) {
    return {
        type: "ADD_HERO",
        heroName
    }
}

export function deleteHero(heroName) {
    return {
        type: "DELETE_HERO",
        heroName
    }
}

export function changeFandom(fandomName) {
    return {
        type: "CHANGE_FANDOM",
        fandomName
    }
}

export function search(input) {
    return {
        type: "SEARCH",
        input
    }
}

export function heroesLoaded(heroes) 
{
        return {
            type: "HEROES_LOADED",
            heroes
        }
}
