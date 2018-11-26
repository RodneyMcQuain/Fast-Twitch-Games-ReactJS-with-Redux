import React, { Component } from 'react';
import store from '../store';
import { setSelectedGame, setGames } from '../actions';
import 'font-awesome/css/font-awesome.min.css';
import { default as GamesDropdown } from '../containers/GamesDropdown';
import { default as Status } from '../components/Status';
import '../style/App.css';

/*Class for the header section for project, that contains the controls
  for the application.*/
class Header extends Component {
  constructor(props) {
    super(props);

    /*gameValue and gameName are separate state variables so that GamesDropdown
      isn't updated everytime something is typed in the textbox. Instead it is
      only updated when the add game button is clicked.*/
    this.state = {
      gameName: "",
      gameValue: "",
      statusGood: false,
      statusBad: false
    }

    this.handleOnChange_tbGame = this.handleOnChange_tbGame.bind(this);
    this.handleOnClick_btAddGame = this.handleOnClick_btAddGame.bind(this);
    this.handleOnClick_btRemoveGame = this.handleOnClick_btRemoveGame.bind(this);
    this.handleOnClick_btMoveGameToTop = this.handleOnClick_btMoveGameToTop.bind(this);
    this.setStatusBad = this.setStatusBad.bind(this);
    this.setStatusGood = this.setStatusGood.bind(this);
  }

  //OnClick event for the add game button.
  handleOnClick_btAddGame(e) {
    const gameName = this.state.gameName;
    const games = store.getState().games;

    for (let i = 0; i < games.length; i++)
      if (games[i] === gameName) {
        this.setState({statusBad: true}, this.setState({statusBad: false}));
        return;
      }

    games.push(gameName);
    store.dispatch(setGames(games));
    this.setState({gameValue: gameName});

    //When a game is added it becomes the selected game.
    store.dispatch(setSelectedGame(this.state.gameName));

    /*Clear text box after addition of game and set statusGood
      to true because the addition was successful.*/
    this.setState({
      gameName: "",
      statusGood: true
    });
  }

  //OnClick event for the remove game button.
  handleOnClick_btRemoveGame(e) {
    let { selectedGame, games } = store.getState();

    for (let i = 0; i < games.length; i++)
      if (games[i] === selectedGame) {
        games.splice(i, 1);
        break;
      }

    this.setSelectedGameToFirst();
  }

  //OnClick event for the move game to top button.
  handleOnClick_btMoveGameToTop(e) {
    const games = store.getState().games;

    for (let i = 0; i < games.length; i++)
      if (games[i] === this.props.selectedGame) {
        games.unshift(games[i]);
        games.splice(i + 1, 1);
        break;
      }

    store.dispatch(setGames(games));
  }

  //OnChange event for when the text in the game text box changes.
  handleOnChange_tbGame(e) {
    this.setState({gameName: e.target.value});
  }

  //Sets statusBad based on response from HeaderStatus.
  setStatusBad(statusBad) {
    this.setState({statusBad: statusBad});
  }

  //Sets statusGood based on response from HeaderStatus.
  setStatusGood(statusGood) {
    this.setState({statusGood: statusGood});
  }

  /*Sets the selected game to the first in the array if
    length is greater than 0. Used after removal of a game
    and when initially loading the game dropdown.*/
  setSelectedGameToFirst() {
    const games = store.getState().games;

    if (games.length > 0)
      store.dispatch(setSelectedGame(games[0]));
    else if (games.length === 0)
      store.dispatch(setSelectedGame(""));
  }

  /*Render the Header with the add game textbox, add game button,
    games dropdown, remove game button, move game to top button, and status*/
  render() {
    return (
      <div id="add-game-container">
        <input value={this.state.gameName} onChange={this.handleOnChange_tbGame} className="text-field fa" placeholder="&#xf11b; Game to Add"></input>
        <button onClick={this.handleOnClick_btAddGame} id="btn-game-to-add" className="btn fa fa-plus"></button>

        <div>
          <GamesDropdown gameValue={this.state.gameValue} games={store.getState().games}/>
          <button onClick={this.handleOnClick_btRemoveGame} className="btn fa fa-trash"></button>
          <button onClick={this.handleOnClick_btMoveGameToTop} className="btn fa fa-arrow-up"></button>
        </div>
        <Status setStatusGood={this.setStatusGood} statusGood={this.state.statusGood} setStatusBad={this.setStatusBad} statusBad={this.state.statusBad} />
      </div>
    );
  }
}

export default Header;
