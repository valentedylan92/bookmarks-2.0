import React, { Component } from 'react';
import { Columns } from "react-bulma-components/full";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NavigationLogin from "./components/NavigationLogin/NavigationLogin";
import Container from "./components/Container/Container";
import './print.css';


class App extends Component {

  render() {
    return (
      <Router>
      <div className="app">
      <Columns>
        <Columns.Column className="app__left" size="two-fifths">

          <Navigation />
          <NavigationLogin />

        </Columns.Column>
        <Columns.Column className="app__right" size="three-fifths">
          <Container />
        </Columns.Column>
      </Columns>
      </div>
      </Router>
    );
  }
}

export default App;
