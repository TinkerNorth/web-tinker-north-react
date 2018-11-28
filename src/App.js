import React, { 
  Component
 } from 'react';
import './App.css';
import HomePage from './views/HomePage';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={HomePage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
