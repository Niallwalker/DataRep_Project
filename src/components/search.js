// Imports React, Component
import React, { Component } from 'react';
// Imported Component from React Bootstrap
import { Form } from 'react-bootstrap';

export class Search extends Component {
  render() {
    return (
      <div style={{ width: "50%"}}>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Search....'
            onChange={this.props.handleInput}
          />
        </Form.Group>
      </div>
    );
  }
}


export default Search;

/*Created search.js file. This posses our search bar component where the user can look up a certain team or driver 
The code above is the input from taken from bootstrap
Div with width styling was also added so that it's the same size as the cards on the team and driver pages
Date: 30/12/20*/ 