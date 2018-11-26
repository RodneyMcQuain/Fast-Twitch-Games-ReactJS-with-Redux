/*Reducer which contains checks for the action types select
  game and set games.*/
export default function reducer(state, action) {
  switch (action.type) {
    case "SELECT_GAME":
      return {
        ...state,
        selectedGame: action.game,
      };
    case "SET_GAMES":
      return {
        ...state,
        games: action.games
      }
    default:
      return state;
  }
}
