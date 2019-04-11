import heroes from '../____json____/heroes.json';

export function loadHeroes() {
    return new Promise(function (resolve, reject) {
        const serverResponse = heroes;
        resolve(serverResponse);
    });
}