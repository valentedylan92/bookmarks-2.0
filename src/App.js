import React, { Component } from 'react';
import { Columns } from "react-bulma-components/full";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page/Page";
import Container from "./components/Container/Container";
import About from "./components/About/About";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './print.css';


class App extends Component {

  render() {
    return (
      <Router>
      <div className="app">
      <Columns>
        <Columns.Column className="app__left" size="two-fifths">

          <Navigation />

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
