import React, {Component} from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props){
    super(props)
      this.state={
        login:false,
    }
  }
  connect(){
    this.setState({
      login: !this.state.login
    })
  }

  render(){
    return(
      <div className="navigation">
      <header className='header'>
        <h1 className="header__title">
          <Link className="header__link" to ="/" >Bookmarks</Link>
        </h1>
        <nav className='navbar'>
          {!this.state.login ?
          <ul className="navbar__list">
            <li className="navbar__item ">
              <Link className="navbar__link" to="/about">About</Link>
            </li>

            <li className="navbar__item ">
              <a href="javascript:void(0)" onClick={this.connect.bind(this)} className="navbar__link navbar--login"><i className="fab fa-github icon icon--github"></i>Log in</a>
            </li>
          </ul> :
          <ul className="navbar__list">
            <li className="navbar__item ">
              <Link className="navbar__link" to="/about">About</Link>
            </li>
            <li className="navbar__item ">
              <Link className="navbar__link" to="/Myprofil">My profil</Link>
            </li>
            <li className="navbar__item ">
              <Link className="navbar__link" to="/Add">Add</Link>
            </li>
            <li className="navbar__item ">
              <a href="javascript:void(0)" onClick={this.connect.bind(this)} className="navbar__link navbar--logout"><i className="fas fa-sign-out-alt icon--logout"></i>Log out</a>
            </li>
          </ul>
        }
        </nav>
      </header>
      </div>
    )
  }
}

export default Navigation;
