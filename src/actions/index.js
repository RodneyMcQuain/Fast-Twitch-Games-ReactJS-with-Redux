//Action that sets the selected game.
export function setSelectedGame(game) {
  return {
    type: "SELECT_GAME",
    game: game
  }
}

//Action that sets the games array.
export function setGames(games) {
  return {
    type: "SET_GAMES",
    games: games
  }
}
