import * as api from './api.js';


export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllGames() {
    return await api.get('/data/games?sortBy=_createdOn%20desc');
}

export async function getGameById(id) {
    return await api.get('/data/games/' + id)
}

export async function getRecentGames() {
    return await api.get(`/data/games?sortBy=_createdOn%20desc&distinct=category`);
}

export async function createGame(game) {
    return await api.post('/data/games', game);
}

export async function editGame(id, game) {
    return await api.put('/data/games/' + id, game);
}

export async function deleteGame(id) {
    return await api.del('/data/games/' + id)
}