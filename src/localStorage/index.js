//Loads and returns games from local storage.
export const loadGames = () => {
  try {
    const gamesStorageSerialized = localStorage.getItem("games");

    if (gamesStorageSerialized === null)
      return [];

    const gamesStorage = JSON.parse(gamesStorageSerialized);
    let games = [];
    if (gamesStorage != null && gamesStorage.trim() !== "")
      games = gamesStorage.split(",;:!");

    return games;
  } catch (err) {
    return [];
  }
}

/*Sets the local storage, typically after addition, removal,
  or moving up of a game.*/
export const saveGames = (games) => {
  try {
    let toLocalStoreString = games.join(",;:!");
    const serializedGames = JSON.stringify(toLocalStoreString);

    localStorage.setItem('games', serializedGames);
  } catch (err) {
    //Ignore
  }
}
