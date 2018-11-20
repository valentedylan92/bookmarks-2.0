import React, {Component} from 'react';
import { Form,Card, Button,Tag,Image } from "react-bulma-components/full";
import {articles} from '../../fakedata';
import Article from '../Article/Article';
import cat from '../../assets/img/cat.gif';
import asian from '../../assets/img/asian.gif';
import dance from '../../assets/img/dance.gif';
import glasses from '../../assets/img/glasses.gif';
import sailor from '../../assets/img/sailor.gif';



class Page extends Component {
  constructor(props) {
      super(props);
      this.state = {
          searchKeywords: "",
          data: [],
          tags: [],
          gifs:
        [
          cat,
          sailor,
          dance,
          glasses,
          asian

        ],
      }
  }

  componentWillMount(){
    this.setState({
      data : articles
    });
  }

  handleChangeKey(e){
      let regex= /([A-Za-z0-9éèùúáàóòíìâêîôûäëïöüç& ])/g;
      if(e.target.value && e.target.value.match(regex)){
      this.setState({searchKeywords: e.target.value.match(regex).join('')});
      }else{
          this.setState({searchKeywords: ""});
      }
  };

  handleChangeTag = (name) => {
    if(this.state.tags.indexOf(name) < 0){
      this.state.tags.push(name);
    }else{
      this.state.tags.forEach(function(el,index,array){
        if(el===name){
          array.splice(index,1)
        }
      })
    }
    this.renderTag();
    this.setState({searchKeywords:""
    });
  };

  renderTag(){
    if(this.state.tags !== ""){
      return(
      this.state.tags.map(value => (
        <li key={value} className=" tag">
          <a className="tags__link">{value}</a>
          <button onClick ={this.handleDelete.bind(this)} className="delete is-small"></button>
        </li>
        ))
      )

    }
  }

  handleDelete(event){
    event.preventDefault();
    this.state.tags.forEach(function(el,index,array){
      if(el===event.currentTarget.previousElementSibling.innerHTML){
        array.splice(index,1)
      }
    })
    this.setState({tags:this.state.tags})
    this.renderTag();
    }

  createTag(e){
    e.preventDefault();
    if(this.state.searchKeywords !== ''){
      {this.handleChangeTag(this.state.searchKeywords)}
    }
  };

  loadTagContent(value){
    {this.handleChangeTag(value.tag)}
  }

  renderContent(){
    let filterTag = this.state.data;
    if(this.state.tags.length !== 0){
      this.state.tags.forEach(function(el){
        filterTag = filterTag.filter((item) => {
            return item.tags.indexOf(el) > -1;
        });
      })
    }

    if(filterTag.length === 0){
      let size = this.state.gifs.length
      let x = Math.floor(size*Math.random())
      return <div className="page__gifs">
              <p className="page__unfound">No Result found. </p>
              <img  className="page__gif" src={this.state.gifs[x]} />
             </div>
    }

    else{
     const listArticles = filterTag.map((article,index) =>{
        return(
          <Card
          className="article"
          key={index}
          >
            <div className="article__content">
              <h4 className="article__title"><a rel="noopener noreferrer" target="_blank" href={article.url} className="article__link">{article.title}</a></h4>
              <p className="article__description">{article.description}</p>
            </div>
            <div className="article__tags">
              <ul className="tags">
              <li className="tags__title">Tags : </li>

                {article.tags.map((tag,i) =>  {
                  return <li key={i} className="tags__item">
                  <Button onClick={()=>this.loadTagContent({tag})} value={tag} className="tags__link">{tag}</Button>
                  </li>
                })}
              </ul>
            </div>
          </Card>
        )
      })
    return listArticles;
    }
  }

  render(){
    return(
        <div className="page">
          <form
          className="page__form"
          onSubmit={this.createTag.bind(this)}
          >
              <Form.Input
                className="page__input"
                placeholder= "Hey, looking for something ?"
                onChange={this.handleChangeKey.bind(this)}
                value={this.state.searchKeywords}
              >
              </Form.Input>
              <Button
                className="page__submit"
                type="submit"
              >
                <i className="fas fa-search icon icon--search"></i>
              </Button>
          </form>
          <div className="page__tags">
          <ul className="tags">
          {this.renderTag()}
          </ul>
          </div>
          <div className="article__container">
            {this.renderContent()}
          </div>
        </div>
    )
  }
}

export default Page;
