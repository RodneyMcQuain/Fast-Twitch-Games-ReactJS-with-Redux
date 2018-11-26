import React, { Component } from 'react';
import store from '../store';
import { default as Header } from '../containers/Header';
import { default as Streams } from '../containers/Streams';
import '../style/App.css';

//Class for the highest level component.
class App extends Component {
  //Render the Header and Streams sections.
  render() {
    return (
      <div>
        <Header selectedGame={store.getState().selectedGame} />
        <Streams selectedGame={store.getState().selectedGame} />
      </div>
    );
  }
}

export default App;
