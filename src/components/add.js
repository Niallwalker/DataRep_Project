import React from "react";
import {CardDeck, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class Add extends React.Component {

  render() {
    return (
<center>
  <br></br>
    <h1>What do you want to create?</h1>
        <CardDeck style={{width: '80rem', height: '40rem'}} >
        <Card border="danger">
          <Card.Img variant="top" src="https://3legs4wheels.com/wordpress/wp-content/uploads/2019/03/ferrari-pitstop-2019.jpg" />
          <Card.Body>
            <Card.Title><h1>New Team</h1></Card.Title>
            <Card.Text>
              <h5>Is there a new team on the grid? You want to make one powered by your imagination? 
              Or bring back a team from the past? the click here to create your Team!</h5>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Link to={'/addTeam/'} className="btn btn-danger">Add Team</Link>
          </Card.Footer>
        </Card>
        <Card border="danger">
          <Card.Img variant="top" src="https://i.imgur.com/Ap1S65S.jpg" />
          <Card.Body>
            <Card.Title><h1>New Driver</h1></Card.Title>
            <Card.Text>
            <h5>Is there a new kid on the grid? You want put yourself alongside your heroes?
            Or create a historic line up? the click here to create a Driver!</h5>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Link to={'/addDriver/'} className="btn btn-danger">Add Driver</Link>
          </Card.Footer>
        </Card>
      </CardDeck>
</center>              
); } } 
              

/* Created new ADD class. Tghis calss has 2 bootstrap card that the user can decide what they weant to make an addition to.
 I had originally placed add team and driver to the navbar but I felt it was very overcrowded 
 Date: 28/12/20*/ 