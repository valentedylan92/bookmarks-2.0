import React, {Component} from 'react';
import { Form,Card, Button } from "react-bulma-components/full";
class Add extends Component {
  constructor(props) {
    super(props);
      this.state = {

      }

  }

  render(){


    return(
      <div className="add">
        <h2 className="add__title container__title">Add</h2>
        <form className="add__form" action="http://bookmarks-nexus.tk/bookmarks" method="post" name="form1" onSubmit="required()">
          <input readOnly type="hidden" name="_token" value="7WnXHzfijH1wWr5z712hoEAeLNyduCiG6dNwDUOh"/>
          <div className="control-container">
            <div className="control">
              <label className="label">Topic</label>
              <div className="select">
                <select name="category">
                  <option value="0">Choose</option>
                              <option value="1">Git</option>
                              <option value="2">HTML</option>
                              <option value="3">CSS</option>
                              <option value="4">Design</option>
                              <option value="5">Javascript</option>
                              <option value="6">jQuery</option>
                              <option value="7">PHP</option>
                              <option value="8">SQL</option>
                              <option value="9">AJAX</option>
                              <option value="10">Gaming</option>
                            </select>
              </div>
            </div>
            <div className="control">
              <label className="label">Type</label>
                      <div className="select">
                <select name="type">
                  <option value="0">Choose</option>
                              <option value="1">Article</option>
                              <option value="2">Vidéo</option>
                              <option value="3">Documentation</option>
                              <option value="4">Outil</option>
                              <option value="5">Librairie</option>
                              <option value="6">Framework</option>
                              <option value="7">References</option>
                            </select>
              </div>
            </div>
          </div>
          <div className="field-container">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input readOnly className="input" type="text" placeholder="ex: Bulma Framework" name="title" value=""/>
              </div>
                    </div>
            <div className="field">
              <label className="label">Link</label>
              <div className="control">
                <input readOnly className="input" type="text" placeholder="ex: https://bulma.io/" name="url" value=""/>
              </div>
                    </div>
            <div className="field">
              <label className="label">About</label>
              <div className="control">
                <textarea className="textarea" name="description" placeholder="Link description"></textarea>
              </div>
                    </div>
          </div>
          <div className="buttons-container">
            <div className="control">
              <button className="button is-primary" role="submit">Submit</button>
            </div>
            <div className="control">
              <button className="button"><a href="index.html">Cancel</a></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Add;
