
export function search(input) {
    return {
        type: "SEARCH",
        input
    }
}

export function changeHeroesListByFandom(fandom) {
    return {
        type: 'CHANGE_HEROES_BY_FANDOM',
        fandom
    }
}

export function changeHeroesListBySearch(input) {
    return {
        type: 'CHANGE_HEROES_BY_SEARCH',
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


export function changeFandom(fandomName) {
    return {
        type: "CHANGE_FANDOM",
        fandomName
    }
}

export function addHero(heroName, image) {
    return {
        type: "ADD_HERO",
        heroName,
        image
    }
}

export function deleteHero(heroName) {
    return {
        type: "DELETE_HERO",
        heroName
    }
}


