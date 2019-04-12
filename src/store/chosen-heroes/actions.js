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