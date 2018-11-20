import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from "../Page/Page";
import About from "../About/About";

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
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}


export default withRouter(Container);
