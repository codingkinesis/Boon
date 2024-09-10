import { storageService } from './async-storage.service';

export const gameService = {
    getGameState,
    setGameState,
    initGameState,
}

const GAME_STORAGE_KEY = 'game'
const GAME_LOOP = [
    'startOfTurn',
    'movement',
    'combat',
    'postCombat',
    'replenishing'
]

async function getGameState() {
    // console.log('GameService getGameState')
    const GameState = await storageService.query(GAME_STORAGE_KEY)
    return GameState
}

function setGameState(GameState) {
    // console.log('GameService setGameState')
    localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(GameState));
    return GameState
}

function initGameState(Players) {
    // console.log('GameService initGameState')
    Players = Players.map((p)=> {return{...p, life: 10, cards: [], coins: 1}})
        
    localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify({
        Players: Players, 
        isFirstTurn: true, 
        gameFase: 1,

    }));
}