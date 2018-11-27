import React, {Component} from 'react';
import { Form,Card, Button } from "react-bulma-components/full";
class Article extends Component {
  constructor(props) {
    super(props);
      this.state = {
          favori          : false,
          favoriteCount : 0
      }

  }

  favori = () =>
  {
    let favoriCount     = this.state.favoriteCount;

    favoriCount     +=  !this.state.favori ? 1 : -1

      this.setState({
          favori  : !this.state.favori,
          favoriteCount : favoriCount
      })
  }

  render(){
    let starIcon    = <i className="fas fa-star" aria-hidden="true"></i>

    if (this.state.favori) {
        starIcon = <i className="fas fa-star favoriIcon" aria-hidden="true"></i>
    }

    return(
      <div
      className="article"
      >
        <img src="http://placecorgi.com/300/200" className="article__img"/>
        <div className="article__content">
          <div className='article__favori' >
                <img src="http://placecorgi.com/50/50" class="article__img--mobile"/>
                <h4 className="article__title"><a rel="noopener noreferrer" target="_blank" href={this.props.article.url} className="article__link">{this.props.article.title}</a></h4>
                <button className="article__button" onClick={this.favori}>{ starIcon } <span>{ this.state.favoriteCount }</span></button>
          </div>
          <p className="article__description">{this.props.article.description}</p>
        </div>
      </div>
    )
  }
}

export default Article;
