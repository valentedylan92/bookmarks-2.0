import React, {Component} from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";

class Navigation extends Component {
  render(){
    return(
      <div className="navigation">
      <header className='header'>
        <h1 className="header__title">
          <Link className="header__link" to ="/" >Bookmarks</Link>
        </h1>
        <nav className='navbar'>
          <ul className="navbar__list">
            <li className="navbar__item ">
              <Link className="navbar__about" to="/about">About</Link>
            </li>
            <li className="navbar__item ">
              <a href="javascript:void(0)" className="navbar__login"><i className="fab fa-github icon icon--github"></i>Log in</a>
            </li>
          </ul>
        </nav>
      </header>
      </div>
    )
  }
}

export default Navigation;
