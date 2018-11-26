import { createStore } from 'redux';
import reducer from '../reducers';
import { loadGames, saveGames } from '../localStorage';

const games = loadGames()
/*Set initial state of selected game to the first in the array if it exists
  and if not set the selected game to "" so it will show all streams.*/
const selectedGame = ((games.length !== 0) ? games[0] : "");

const initialState = {
  games: games,
  selectedGame: selectedGame
}
export const store = createStore(reducer, initialState);

//Save games to local storage whenever a change to state of games occurs.
store.subscribe(() => {saveGames(store.getState().games)});

export default store;
