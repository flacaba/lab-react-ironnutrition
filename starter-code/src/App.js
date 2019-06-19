import React, { Component } from 'react';
import './App.css';
import Header from './components/misc/Header';
import { Switch, Route } from 'react-router-dom'
import Home from './scenes/Home';
import AddFood from './scenes/AddFood';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path ='/' component = { Home }/>
          <Route exact path='/new' component = { AddFood }/>
        </Switch>
      </div>
    );
  }
}

export default App;
