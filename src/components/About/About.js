import React, {Component} from 'react';


class About extends Component {

  render(){
    return(
        <div className="about">
          <h2 className="about__title" >About</h2>
          <p className="about__text" >Bookmarks is an open access web-based tool about web technologies. It was developed at <a className="about__link" rel="noopener noreferrer" href="https://www.becode.org/" target="_blank">becode</a> (coding school based in Belgium), where learners and coaches can share their resources and bookmarks.</p>
          <p className="about__feedback">Did you encounter any problem while navigating? Please send your observations and help us improve the Lovelace 2.0 using this <a className="about__link" rel="noopener noreferrer" href="https://github.com/RomainVandevoorde/Lovelace-Bookmarks/issues" target="_blank">link</a> (GitHub issues).</p>
          <h3 className="about__subtitle">Team</h3>
          <ul className="about__credits">
            <li className="about__item">Back-End: <a className="about__link" rel="noopener noreferrer" href="https://github.com/RomainVandevoorde/" target="_blank">Romain Vandevoorde</a></li>
            <li className="about__item">Design &amp; UX: <a className="about__link" rel="noopener noreferrer" href="https://github.com/pedroseromenho" target="_blank">Pedro Seromenho</a></li>
            <li className="about__item">AJAX: <a className="about__link" rel="noopener noreferrer" href="https://github.com/tahrimostapha/" target="_blank">Mostapha Tahri</a></li>
          </ul>
          <h3 className="about__subtitle">Technologies</h3>
          <p className="about__text">Stack: Apache 2, PHP 7, MySQL 5.6</p>
          <ul className="about__credits">
            <li className="about__item" >Framework PHP : <a className="about__link" rel="noopener noreferrer" href="https://laravel.com/" target="_blank">Laravel 5.5</a></li>
            <li className="about__item" >Social Connection package : <a className="about__link" rel="noopener noreferrer" href="https://laravel.com/docs/5.5/socialite" target="_blank">Laravel Socialite</a></li>
            <li className="about__item" >Dependencies Manager : <a className="about__link" rel="noopener noreferrer" href="https://getcomposer.org/" target="_blank">Composer</a></li>
            <li className="about__item" >Framework CSS : <a className="about__link" rel="noopener noreferrer" href="https://bulma.io/" target="_blank">Bulma</a></li>
            <li className="about__item" >Icons : <a className="about__link" rel="noopener noreferrer" href="https://fontawesome.com/" target="_blank">FontAwesome</a></li>
          </ul>
        </div>
    )
  }
}

export default About;
