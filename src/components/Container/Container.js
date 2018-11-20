import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from "../Page/Page";
import About from "../About/About";
import Profil from "../Profil/Profil";
import Add from "../Add/Add";

function Container({ location }) {
  return (
    <div className="content__container">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/"  component={Page}/>
              <Route exact path="/about"  component={About}/>
              <Route exact path="/Myprofil"  component={Profil}/>
              <Route exact path="/Add"  component={Add}/>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}


export default withRouter(Container);
